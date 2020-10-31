pragma solidity ^0.5.16;

/**
 * @title Sigh Speed Controller Contract
 * @notice Distributes a token to a different contract at a fixed rate.
 * @dev This contract must be poked via the `drip()` function every so often.
 * @author SighFinance
 */

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol"; 
import "./Interfaces/ISighSpeedController.sol";
 
contract SighSpeedController is ISighSpeedController {

  /// @notice Reference to SIGH
  IERC20 public token;

  address public admin;
  address private addressesProvider;
  bool private isAddressesSet = false;

  bool public isDripAllowed = false;  
  uint public lastDripBlockNumber;    
    
  address[] private storedSupportedProtocols; 
  mapping (address => bool) supportedProtocols;
  mapping (address => uint) distributionSpeeds;

  mapping (address => uint) public totalDrippedAmount; 
  mapping (address => uint) public recentlyDrippedAmount;

  event DistributionInitialized(uint blockNumber);

  event NewProtocolSupported (address protocolAddress, uint sighSpeed);
  event ProtocolRemoved(address protocolAddress, uint totalDrippedToProtocol);
  
  event DistributionSpeedChanged(address protocolAddress, uint prevSpeed , uint newSpeed );  
  event Dripped(address protocolAddress, uint currentBalance, uint AmountDripped, uint totalAmountDripped ); 

  event pendingAdminUpdated(address prevPendingAdmin, address pendingAdmin );
  event newAdminAssigned(address prevAdmin, address admin);

// ########################
// ####### MODIFIER #######
// ########################

    /**
    * @dev only the SIGH Finance Manager can call functions affected by this modifier
    **/
    modifier onlySIGHFinanceManager {
        require( addressesProvider.getSIGHFinanceManager() == msg.sender, "The caller must be the SIGH Mechanism Manager" );
        _;
    }

    //only SIGH Finance Configurator can use functions affected by this modifier
    modifier onlySighFinanceConfigurator {
        require(addressesProvider.getSIGHFinanceConfigurator() == msg.sender, "The caller must be the SIGH Finanace Configurator Contract");
        _;
    }

// ###########################
// ####### CONSTRUCTOR #######
// ###########################

  /**
    * @notice Constructs a Reservoir
    * @param token_ The token to drip
    */
  constructor(IERC20 token_ ) public {
    admin = msg.sender;
    token = token_;
  }

  function setAddressProvider(address _addressesProvider) external returns bool {
    require(admin == msg.sender,"Dripping can only be initialized by the Admin");
    require(!isAddressesSet,"AddressProvider can only be initialized once");
    isAddressesSet = true;
    addressesProvider = _addressesProvider;
    require(addressesProvider == _addressesProvider, " AddressesProvider not initialized Properly ");
    admin = address(0);
  }

// #############################################################################################
// ###########   SIGH DISTRIBUTION : INITIALIZED DRIPPING (Can be called only once)   ##########
// #############################################################################################

  function beginDripping () external onlySighFinanceConfigurator returns (bool) {
    require(!isDripAllowed,"Dripping can only be initialized once");

    isDripAllowed = true;
    lastDripBlockNumber = block.number;

    emit DistributionInitialized( lastDripBlockNumber );
    return true;
  }

// ############################################################################################################
// ###########   SIGH DISTRIBUTION : ADDING / REMOVING NEW PROTOCOL WHICH WILL RECEIVE SIGH TOKENS   ##########
// ############################################################################################################

  function supportNewProtocol( address newProtocolAddress, uint sighSpeed ) external onlySighFinanceConfigurator returns (bool)  {
    require (!supportedProtocols[newProtocolAddress], 'This Protocol is already supported by the Sigh Speed Controller');

    if (isDripAllowed) {
        dripInternal();
    }
    
    storedSupportedProtocols.push(newProtocolAddress);
    
    supportedProtocols[newProtocolAddress] = true;
    distributionSpeeds[newProtocolAddress] = sighSpeed;
    totalDrippedAmount[newProtocolAddress] = 0;
    recentlyDrippedAmount[newProtocolAddress] = 0;
    
    require (supportedProtocols[newProtocolAddress], 'Error occured when adding the new protocol address to the supported protocols list.');
    require (distributionSpeeds[newProtocolAddress] == sighSpeed, 'SIGH Speed for the new protocl was not initialized properly.');
    
    emit NewProtocolSupported(newProtocolAddress, sighSpeed);
  }
  
//   ######### WE DO NOT DRIP WHEN REMOVING A PROTOCOL  ######### 
  function removeSupportedProtocol(address protocolAddress_ ) external onlySighFinanceConfigurator returns (bool) {
    require(supportedProtocols[protocolAddress_],'The Protocol is already not Supported by the Sigh Speed Controller' );
    
    uint index = 0;
    uint len = storedSupportedProtocols.length;

    for (uint i=0; i< len; i++) {
        if ( storedSupportedProtocols[i] == protocolAddress_ ) {
            index = i;
            break;
        }
    }
    
    storedSupportedProtocols[index] = storedSupportedProtocols[len - 1];
    storedSupportedProtocols.length--;
    uint newLength = len - 1;
    require(storedSupportedProtocols.length == newLength, 'The length of the list was not properly decremented.' );
    
    supportedProtocols[protocolAddress_] = false;
    distributionSpeeds[protocolAddress_] = 0;

    require (supportedProtocols[protocolAddress_] == false, 'Error occured when removing the protocol.');
    require (distributionSpeeds[protocolAddress_] == 0, 'SIGH Speed was not properly assigned to 0.');

    emit ProtocolRemoved( protocolAddress_,  totalDrippedAmount[protocolAddress_] );
  }
  
// ######################################################################################
// ###########   SIGH DISTRIBUTION : FUNCTIONS TO UPDATE DISTRIBUTION SPEEDS   ##########
// ######################################################################################

  function changeProtocolSIGHSpeed (address targetAddress, uint newSpeed_) external onlySighFinanceConfigurator returns (bool) {
    require(supportedProtocols[targetAddress],'The Protocol is not Supported by the Sigh Speed Controller' );
    if (isDripAllowed) {
        dripInternal();
    }
    uint prevSpeed = distributionSpeeds[targetAddress];
    distributionSpeeds[targetAddress] = newSpeed_;
    require(distributionSpeeds[targetAddress] == newSpeed_, " Protocol's SIGH speed was not properly updated");
    emit DistributionSpeedChanged(targetAddress, prevSpeed , distributionSpeeds[targetAddress]);
    return true;
  }


// #####################################################################
// ###########   SIGH DISTRIBUTION FUNCTION - DRIP FUNCTION   ##########
// #####################################################################

  /**
    * @notice Drips the maximum amount of tokens to match the drip rate since inception
    * @dev Note: this will only drip up to the amount of tokens available.
    * @return The amount of tokens dripped in this call
    */
  function drip() public returns (uint) {
    require(isDripAllowed,'Dripping has not been initialized by the SIGH Finance Manager');    
    dripInternal();
  }
  
  function dripInternal() internal {
    IERC20 token_ = token;
    
    address[] memory protocols = storedSupportedProtocols;
    uint length = protocols.length;
    
    if (length > 0) {
        
        for ( uint i=0; i < length; i++) {
            
            address current_protocol = protocols[i];
            
            if ( supportedProtocols[ current_protocol ] ) {
                
                uint reservoirBalance_ = token_.balanceOf(address(this)); 
                uint blockNumber_ = block.number;
                uint deltaDrip_ = mul(distributionSpeeds[ current_protocol ], blockNumber_ - lastDripBlockNumber, "dripTotal overflow");
                uint toDrip_ = min(reservoirBalance_, deltaDrip_);
            
                require(reservoirBalance_ != 0, 'Protocol Transfer: The reservoir currently does not have any SIGH tokens' );
                require(token_.transfer(current_protocol, toDrip_), 'Protocol Transfer: The transfer did not complete.' );
                
                uint prevDrippedAmount = totalDrippedAmount[current_protocol];
                totalDrippedAmount[current_protocol] = add(prevDrippedAmount,toDrip_,"Overflow");
                recentlyDrippedAmount[current_protocol] = toDrip_;
                reservoirBalance_ = token_.balanceOf(address(this)); // TODO: Verify this is a static call
            
                emit Dripped( current_protocol, reservoirBalance_, toDrip_ , totalDrippedAmount[current_protocol] ); 
            }
        }
    }
    lastDripBlockNumber = block.number;
  }


// ########################################################
// ###########   FUNCTIONS TO CHANGE THE ADMIN   ##########
// ########################################################

//  function changeAdmin(address newAdmin) external returns (bool) {
//     require(admin == msg.sender,"Stored Admin can only be changed by the current Admin");
//     address prevPendingAdmin = pendingAdmin;
//     pendingAdmin = newAdmin;
//     emit pendingAdminUpdated(prevPendingAdmin,pendingAdmin );
//     return true;
//  }

//  function acceptAdmin() external returns (bool) {
//     require(pendingAdmin == msg.sender,"Only the pending admin can call this function");
//     address prevAdmin = admin;
//     admin = pendingAdmin;
//     pendingAdmin = address(0);
//     require (admin == pendingAdmin,'Admin not assigned properly');
    
//     emit newAdminAssigned(prevAdmin, admin);
     
//  } 
 

// ###############################################################
// ###########   EXTERNAL VIEW functions TO GET STATE   ##########
// ###############################################################

  function getSIGHBalance() external view returns (uint) {
    IERC20 token_ = token;   
    uint balance = token_.balanceOf(address(this));
    return balance;
  }

  function getSighAddress() external view returns (address) {
    return address(token);
  }

  function getSupportedProtocols() external view returns (address[]) {
    return storedSupportedProtocols;
  }

  function isThisProtocolSupported(address protocolAddress) external view returns (bool) {
    return supportedProtocols[protocolAddress];
  }

  function getTotalAmountDistributedToProtocol(address protocolAddress) external view returns (uint) {
    return totalDrippedAmount[protocolAddress];
  }

  function getRecentAmountDistributedToProtocol(address protocolAddress) external view returns (uint) {
    return recentlyDrippedAmount[protocolAddress];
  }
  
  function getSIGHSpeedForProtocol(address protocolAddress) external view returns (uint) {
      return distributionSpeeds[protocolAddress];
  }
  
  function totalProtocolsSupported() external view returns (uint) {
      uint len = storedSupportedProtocols.length;
      return len;
  }

// ###############################################################
// ########### Internal helper functions for safe math ###########
// ###############################################################

  function add(uint a, uint b, string memory errorMessage) internal pure returns (uint) {
    uint c = a + b;
    require(c >= a, errorMessage);
    return c;
  }

  function sub(uint a, uint b, string memory errorMessage) internal pure returns (uint) {
    require(b <= a, errorMessage);
    uint c = a - b;
    return c;
  }

  function mul(uint a, uint b, string memory errorMessage) internal pure returns (uint) {
    if (a == 0) {
      return 0;
    }
    uint c = a * b;
    require(c / a == b, errorMessage);
    return c;
  }

  function min(uint a, uint b) internal pure returns (uint) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }
}