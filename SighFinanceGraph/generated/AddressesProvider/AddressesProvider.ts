// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FeeProviderUpdated extends ethereum.Event {
  get params(): FeeProviderUpdated__Params {
    return new FeeProviderUpdated__Params(this);
  }
}

export class FeeProviderUpdated__Params {
  _event: FeeProviderUpdated;

  constructor(event: FeeProviderUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolConfiguratorUpdated extends ethereum.Event {
  get params(): LendingPoolConfiguratorUpdated__Params {
    return new LendingPoolConfiguratorUpdated__Params(this);
  }
}

export class LendingPoolConfiguratorUpdated__Params {
  _event: LendingPoolConfiguratorUpdated;

  constructor(event: LendingPoolConfiguratorUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolCoreUpdated extends ethereum.Event {
  get params(): LendingPoolCoreUpdated__Params {
    return new LendingPoolCoreUpdated__Params(this);
  }
}

export class LendingPoolCoreUpdated__Params {
  _event: LendingPoolCoreUpdated;

  constructor(event: LendingPoolCoreUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolDataProviderUpdated extends ethereum.Event {
  get params(): LendingPoolDataProviderUpdated__Params {
    return new LendingPoolDataProviderUpdated__Params(this);
  }
}

export class LendingPoolDataProviderUpdated__Params {
  _event: LendingPoolDataProviderUpdated;

  constructor(event: LendingPoolDataProviderUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolLiquidationManagerUpdated extends ethereum.Event {
  get params(): LendingPoolLiquidationManagerUpdated__Params {
    return new LendingPoolLiquidationManagerUpdated__Params(this);
  }
}

export class LendingPoolLiquidationManagerUpdated__Params {
  _event: LendingPoolLiquidationManagerUpdated;

  constructor(event: LendingPoolLiquidationManagerUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolManagerUpdated extends ethereum.Event {
  get params(): LendingPoolManagerUpdated__Params {
    return new LendingPoolManagerUpdated__Params(this);
  }
}

export class LendingPoolManagerUpdated__Params {
  _event: LendingPoolManagerUpdated;

  constructor(event: LendingPoolManagerUpdated) {
    this._event = event;
  }

  get _lendingPoolManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolParametersProviderUpdated extends ethereum.Event {
  get params(): LendingPoolParametersProviderUpdated__Params {
    return new LendingPoolParametersProviderUpdated__Params(this);
  }
}

export class LendingPoolParametersProviderUpdated__Params {
  _event: LendingPoolParametersProviderUpdated;

  constructor(event: LendingPoolParametersProviderUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingPoolUpdated extends ethereum.Event {
  get params(): LendingPoolUpdated__Params {
    return new LendingPoolUpdated__Params(this);
  }
}

export class LendingPoolUpdated__Params {
  _event: LendingPoolUpdated;

  constructor(event: LendingPoolUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LendingRateOracleUpdated extends ethereum.Event {
  get params(): LendingRateOracleUpdated__Params {
    return new LendingRateOracleUpdated__Params(this);
  }
}

export class LendingRateOracleUpdated__Params {
  _event: LendingRateOracleUpdated;

  constructor(event: LendingRateOracleUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PendingLendingPoolManagerUpdated extends ethereum.Event {
  get params(): PendingLendingPoolManagerUpdated__Params {
    return new PendingLendingPoolManagerUpdated__Params(this);
  }
}

export class PendingLendingPoolManagerUpdated__Params {
  _event: PendingLendingPoolManagerUpdated;

  constructor(event: PendingLendingPoolManagerUpdated) {
    this._event = event;
  }

  get _pendingLendingPoolManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PendingSIGHFinanceManagerUpdated extends ethereum.Event {
  get params(): PendingSIGHFinanceManagerUpdated__Params {
    return new PendingSIGHFinanceManagerUpdated__Params(this);
  }
}

export class PendingSIGHFinanceManagerUpdated__Params {
  _event: PendingSIGHFinanceManagerUpdated;

  constructor(event: PendingSIGHFinanceManagerUpdated) {
    this._event = event;
  }

  get _pendingSighFinanceManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PriceOracleUpdated extends ethereum.Event {
  get params(): PriceOracleUpdated__Params {
    return new PriceOracleUpdated__Params(this);
  }
}

export class PriceOracleUpdated__Params {
  _event: PriceOracleUpdated;

  constructor(event: PriceOracleUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ProxyCreated extends ethereum.Event {
  get params(): ProxyCreated__Params {
    return new ProxyCreated__Params(this);
  }
}

export class ProxyCreated__Params {
  _event: ProxyCreated;

  constructor(event: ProxyCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SIGHAddressUpdated extends ethereum.Event {
  get params(): SIGHAddressUpdated__Params {
    return new SIGHAddressUpdated__Params(this);
  }
}

export class SIGHAddressUpdated__Params {
  _event: SIGHAddressUpdated;

  constructor(event: SIGHAddressUpdated) {
    this._event = event;
  }

  get sighAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHFinanceConfiguratorUpdated extends ethereum.Event {
  get params(): SIGHFinanceConfiguratorUpdated__Params {
    return new SIGHFinanceConfiguratorUpdated__Params(this);
  }
}

export class SIGHFinanceConfiguratorUpdated__Params {
  _event: SIGHFinanceConfiguratorUpdated;

  constructor(event: SIGHFinanceConfiguratorUpdated) {
    this._event = event;
  }

  get sighFinanceConfigAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHFinanceFeeCollectorUpdated extends ethereum.Event {
  get params(): SIGHFinanceFeeCollectorUpdated__Params {
    return new SIGHFinanceFeeCollectorUpdated__Params(this);
  }
}

export class SIGHFinanceFeeCollectorUpdated__Params {
  _event: SIGHFinanceFeeCollectorUpdated;

  constructor(event: SIGHFinanceFeeCollectorUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHFinanceManagerUpdated extends ethereum.Event {
  get params(): SIGHFinanceManagerUpdated__Params {
    return new SIGHFinanceManagerUpdated__Params(this);
  }
}

export class SIGHFinanceManagerUpdated__Params {
  _event: SIGHFinanceManagerUpdated;

  constructor(event: SIGHFinanceManagerUpdated) {
    this._event = event;
  }

  get _sighFinanceManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHMechanismHandlerImplUpdated extends ethereum.Event {
  get params(): SIGHMechanismHandlerImplUpdated__Params {
    return new SIGHMechanismHandlerImplUpdated__Params(this);
  }
}

export class SIGHMechanismHandlerImplUpdated__Params {
  _event: SIGHMechanismHandlerImplUpdated;

  constructor(event: SIGHMechanismHandlerImplUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHSpeedControllerUpdated extends ethereum.Event {
  get params(): SIGHSpeedControllerUpdated__Params {
    return new SIGHSpeedControllerUpdated__Params(this);
  }
}

export class SIGHSpeedControllerUpdated__Params {
  _event: SIGHSpeedControllerUpdated;

  constructor(event: SIGHSpeedControllerUpdated) {
    this._event = event;
  }

  get speedControllerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHStakingImplUpdated extends ethereum.Event {
  get params(): SIGHStakingImplUpdated__Params {
    return new SIGHStakingImplUpdated__Params(this);
  }
}

export class SIGHStakingImplUpdated__Params {
  _event: SIGHStakingImplUpdated;

  constructor(event: SIGHStakingImplUpdated) {
    this._event = event;
  }

  get SIGHStakingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SIGHTreasuryImplUpdated extends ethereum.Event {
  get params(): SIGHTreasuryImplUpdated__Params {
    return new SIGHTreasuryImplUpdated__Params(this);
  }
}

export class SIGHTreasuryImplUpdated__Params {
  _event: SIGHTreasuryImplUpdated;

  constructor(event: SIGHTreasuryImplUpdated) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AddressesProvider extends ethereum.SmartContract {
  static bind(address: Address): AddressesProvider {
    return new AddressesProvider("AddressesProvider", address);
  }

  getAddress(_key: Bytes): Address {
    let result = super.call("getAddress", "getAddress(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(_key)
    ]);

    return result[0].toAddress();
  }

  try_getAddress(_key: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("getAddress", "getAddress(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(_key)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getFeeProvider(): Address {
    let result = super.call("getFeeProvider", "getFeeProvider():(address)", []);

    return result[0].toAddress();
  }

  try_getFeeProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getFeeProvider",
      "getFeeProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPool(): Address {
    let result = super.call("getLendingPool", "getLendingPool():(address)", []);

    return result[0].toAddress();
  }

  try_getLendingPool(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPool",
      "getLendingPool():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPoolConfigurator(): Address {
    let result = super.call(
      "getLendingPoolConfigurator",
      "getLendingPoolConfigurator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingPoolConfigurator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPoolConfigurator",
      "getLendingPoolConfigurator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPoolCore(): Address {
    let result = super.call(
      "getLendingPoolCore",
      "getLendingPoolCore():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingPoolCore(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPoolCore",
      "getLendingPoolCore():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPoolDataProvider(): Address {
    let result = super.call(
      "getLendingPoolDataProvider",
      "getLendingPoolDataProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingPoolDataProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPoolDataProvider",
      "getLendingPoolDataProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPoolLiquidationManager(): Address {
    let result = super.call(
      "getLendingPoolLiquidationManager",
      "getLendingPoolLiquidationManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingPoolLiquidationManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPoolLiquidationManager",
      "getLendingPoolLiquidationManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPoolManager(): Address {
    let result = super.call(
      "getLendingPoolManager",
      "getLendingPoolManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingPoolManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPoolManager",
      "getLendingPoolManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingPoolParametersProvider(): Address {
    let result = super.call(
      "getLendingPoolParametersProvider",
      "getLendingPoolParametersProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingPoolParametersProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingPoolParametersProvider",
      "getLendingPoolParametersProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLendingRateOracle(): Address {
    let result = super.call(
      "getLendingRateOracle",
      "getLendingRateOracle():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getLendingRateOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLendingRateOracle",
      "getLendingRateOracle():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPendingLendingPoolManager(): Address {
    let result = super.call(
      "getPendingLendingPoolManager",
      "getPendingLendingPoolManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getPendingLendingPoolManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPendingLendingPoolManager",
      "getPendingLendingPoolManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPendingSIGHFinanceManager(): Address {
    let result = super.call(
      "getPendingSIGHFinanceManager",
      "getPendingSIGHFinanceManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getPendingSIGHFinanceManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPendingSIGHFinanceManager",
      "getPendingSIGHFinanceManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPriceOracle(): Address {
    let result = super.call("getPriceOracle", "getPriceOracle():(address)", []);

    return result[0].toAddress();
  }

  try_getPriceOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPriceOracle",
      "getPriceOracle():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHAddress(): Address {
    let result = super.call("getSIGHAddress", "getSIGHAddress():(address)", []);

    return result[0].toAddress();
  }

  try_getSIGHAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHAddress",
      "getSIGHAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHFinanceConfigurator(): Address {
    let result = super.call(
      "getSIGHFinanceConfigurator",
      "getSIGHFinanceConfigurator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSIGHFinanceConfigurator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHFinanceConfigurator",
      "getSIGHFinanceConfigurator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHFinanceFeeCollector(): Address {
    let result = super.call(
      "getSIGHFinanceFeeCollector",
      "getSIGHFinanceFeeCollector():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSIGHFinanceFeeCollector(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHFinanceFeeCollector",
      "getSIGHFinanceFeeCollector():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHFinanceManager(): Address {
    let result = super.call(
      "getSIGHFinanceManager",
      "getSIGHFinanceManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSIGHFinanceManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHFinanceManager",
      "getSIGHFinanceManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHMechanismHandler(): Address {
    let result = super.call(
      "getSIGHMechanismHandler",
      "getSIGHMechanismHandler():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSIGHMechanismHandler(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHMechanismHandler",
      "getSIGHMechanismHandler():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHSpeedController(): Address {
    let result = super.call(
      "getSIGHSpeedController",
      "getSIGHSpeedController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSIGHSpeedController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHSpeedController",
      "getSIGHSpeedController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHStaking(): Address {
    let result = super.call("getSIGHStaking", "getSIGHStaking():(address)", []);

    return result[0].toAddress();
  }

  try_getSIGHStaking(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHStaking",
      "getSIGHStaking():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSIGHTreasury(): Address {
    let result = super.call(
      "getSIGHTreasury",
      "getSIGHTreasury():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSIGHTreasury(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSIGHTreasury",
      "getSIGHTreasury():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get SIGHFinanceManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get LendingPoolManagerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptLendingPoolManagerCall extends ethereum.Call {
  get inputs(): AcceptLendingPoolManagerCall__Inputs {
    return new AcceptLendingPoolManagerCall__Inputs(this);
  }

  get outputs(): AcceptLendingPoolManagerCall__Outputs {
    return new AcceptLendingPoolManagerCall__Outputs(this);
  }
}

export class AcceptLendingPoolManagerCall__Inputs {
  _call: AcceptLendingPoolManagerCall;

  constructor(call: AcceptLendingPoolManagerCall) {
    this._call = call;
  }
}

export class AcceptLendingPoolManagerCall__Outputs {
  _call: AcceptLendingPoolManagerCall;

  constructor(call: AcceptLendingPoolManagerCall) {
    this._call = call;
  }
}

export class AcceptSIGHFinanceManagerCall extends ethereum.Call {
  get inputs(): AcceptSIGHFinanceManagerCall__Inputs {
    return new AcceptSIGHFinanceManagerCall__Inputs(this);
  }

  get outputs(): AcceptSIGHFinanceManagerCall__Outputs {
    return new AcceptSIGHFinanceManagerCall__Outputs(this);
  }
}

export class AcceptSIGHFinanceManagerCall__Inputs {
  _call: AcceptSIGHFinanceManagerCall;

  constructor(call: AcceptSIGHFinanceManagerCall) {
    this._call = call;
  }
}

export class AcceptSIGHFinanceManagerCall__Outputs {
  _call: AcceptSIGHFinanceManagerCall;

  constructor(call: AcceptSIGHFinanceManagerCall) {
    this._call = call;
  }
}

export class SetFeeProviderImplCall extends ethereum.Call {
  get inputs(): SetFeeProviderImplCall__Inputs {
    return new SetFeeProviderImplCall__Inputs(this);
  }

  get outputs(): SetFeeProviderImplCall__Outputs {
    return new SetFeeProviderImplCall__Outputs(this);
  }
}

export class SetFeeProviderImplCall__Inputs {
  _call: SetFeeProviderImplCall;

  constructor(call: SetFeeProviderImplCall) {
    this._call = call;
  }

  get _feeProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeProviderImplCall__Outputs {
  _call: SetFeeProviderImplCall;

  constructor(call: SetFeeProviderImplCall) {
    this._call = call;
  }
}

export class SetLendingPoolConfiguratorImplCall extends ethereum.Call {
  get inputs(): SetLendingPoolConfiguratorImplCall__Inputs {
    return new SetLendingPoolConfiguratorImplCall__Inputs(this);
  }

  get outputs(): SetLendingPoolConfiguratorImplCall__Outputs {
    return new SetLendingPoolConfiguratorImplCall__Outputs(this);
  }
}

export class SetLendingPoolConfiguratorImplCall__Inputs {
  _call: SetLendingPoolConfiguratorImplCall;

  constructor(call: SetLendingPoolConfiguratorImplCall) {
    this._call = call;
  }

  get _configurator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingPoolConfiguratorImplCall__Outputs {
  _call: SetLendingPoolConfiguratorImplCall;

  constructor(call: SetLendingPoolConfiguratorImplCall) {
    this._call = call;
  }
}

export class SetLendingPoolCoreImplCall extends ethereum.Call {
  get inputs(): SetLendingPoolCoreImplCall__Inputs {
    return new SetLendingPoolCoreImplCall__Inputs(this);
  }

  get outputs(): SetLendingPoolCoreImplCall__Outputs {
    return new SetLendingPoolCoreImplCall__Outputs(this);
  }
}

export class SetLendingPoolCoreImplCall__Inputs {
  _call: SetLendingPoolCoreImplCall;

  constructor(call: SetLendingPoolCoreImplCall) {
    this._call = call;
  }

  get _lendingPoolCore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingPoolCoreImplCall__Outputs {
  _call: SetLendingPoolCoreImplCall;

  constructor(call: SetLendingPoolCoreImplCall) {
    this._call = call;
  }
}

export class SetLendingPoolDataProviderImplCall extends ethereum.Call {
  get inputs(): SetLendingPoolDataProviderImplCall__Inputs {
    return new SetLendingPoolDataProviderImplCall__Inputs(this);
  }

  get outputs(): SetLendingPoolDataProviderImplCall__Outputs {
    return new SetLendingPoolDataProviderImplCall__Outputs(this);
  }
}

export class SetLendingPoolDataProviderImplCall__Inputs {
  _call: SetLendingPoolDataProviderImplCall;

  constructor(call: SetLendingPoolDataProviderImplCall) {
    this._call = call;
  }

  get _provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingPoolDataProviderImplCall__Outputs {
  _call: SetLendingPoolDataProviderImplCall;

  constructor(call: SetLendingPoolDataProviderImplCall) {
    this._call = call;
  }
}

export class SetLendingPoolImplCall extends ethereum.Call {
  get inputs(): SetLendingPoolImplCall__Inputs {
    return new SetLendingPoolImplCall__Inputs(this);
  }

  get outputs(): SetLendingPoolImplCall__Outputs {
    return new SetLendingPoolImplCall__Outputs(this);
  }
}

export class SetLendingPoolImplCall__Inputs {
  _call: SetLendingPoolImplCall;

  constructor(call: SetLendingPoolImplCall) {
    this._call = call;
  }

  get _pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingPoolImplCall__Outputs {
  _call: SetLendingPoolImplCall;

  constructor(call: SetLendingPoolImplCall) {
    this._call = call;
  }
}

export class SetLendingPoolLiquidationManagerCall extends ethereum.Call {
  get inputs(): SetLendingPoolLiquidationManagerCall__Inputs {
    return new SetLendingPoolLiquidationManagerCall__Inputs(this);
  }

  get outputs(): SetLendingPoolLiquidationManagerCall__Outputs {
    return new SetLendingPoolLiquidationManagerCall__Outputs(this);
  }
}

export class SetLendingPoolLiquidationManagerCall__Inputs {
  _call: SetLendingPoolLiquidationManagerCall;

  constructor(call: SetLendingPoolLiquidationManagerCall) {
    this._call = call;
  }

  get _manager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingPoolLiquidationManagerCall__Outputs {
  _call: SetLendingPoolLiquidationManagerCall;

  constructor(call: SetLendingPoolLiquidationManagerCall) {
    this._call = call;
  }
}

export class SetLendingPoolParametersProviderImplCall extends ethereum.Call {
  get inputs(): SetLendingPoolParametersProviderImplCall__Inputs {
    return new SetLendingPoolParametersProviderImplCall__Inputs(this);
  }

  get outputs(): SetLendingPoolParametersProviderImplCall__Outputs {
    return new SetLendingPoolParametersProviderImplCall__Outputs(this);
  }
}

export class SetLendingPoolParametersProviderImplCall__Inputs {
  _call: SetLendingPoolParametersProviderImplCall;

  constructor(call: SetLendingPoolParametersProviderImplCall) {
    this._call = call;
  }

  get _parametersProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingPoolParametersProviderImplCall__Outputs {
  _call: SetLendingPoolParametersProviderImplCall;

  constructor(call: SetLendingPoolParametersProviderImplCall) {
    this._call = call;
  }
}

export class SetLendingRateOracleCall extends ethereum.Call {
  get inputs(): SetLendingRateOracleCall__Inputs {
    return new SetLendingRateOracleCall__Inputs(this);
  }

  get outputs(): SetLendingRateOracleCall__Outputs {
    return new SetLendingRateOracleCall__Outputs(this);
  }
}

export class SetLendingRateOracleCall__Inputs {
  _call: SetLendingRateOracleCall;

  constructor(call: SetLendingRateOracleCall) {
    this._call = call;
  }

  get _lendingRateOracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLendingRateOracleCall__Outputs {
  _call: SetLendingRateOracleCall;

  constructor(call: SetLendingRateOracleCall) {
    this._call = call;
  }
}

export class SetPendingLendingPoolManagerCall extends ethereum.Call {
  get inputs(): SetPendingLendingPoolManagerCall__Inputs {
    return new SetPendingLendingPoolManagerCall__Inputs(this);
  }

  get outputs(): SetPendingLendingPoolManagerCall__Outputs {
    return new SetPendingLendingPoolManagerCall__Outputs(this);
  }
}

export class SetPendingLendingPoolManagerCall__Inputs {
  _call: SetPendingLendingPoolManagerCall;

  constructor(call: SetPendingLendingPoolManagerCall) {
    this._call = call;
  }

  get _pendinglendingPoolManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPendingLendingPoolManagerCall__Outputs {
  _call: SetPendingLendingPoolManagerCall;

  constructor(call: SetPendingLendingPoolManagerCall) {
    this._call = call;
  }
}

export class SetPendingSIGHFinanceManagerCall extends ethereum.Call {
  get inputs(): SetPendingSIGHFinanceManagerCall__Inputs {
    return new SetPendingSIGHFinanceManagerCall__Inputs(this);
  }

  get outputs(): SetPendingSIGHFinanceManagerCall__Outputs {
    return new SetPendingSIGHFinanceManagerCall__Outputs(this);
  }
}

export class SetPendingSIGHFinanceManagerCall__Inputs {
  _call: SetPendingSIGHFinanceManagerCall;

  constructor(call: SetPendingSIGHFinanceManagerCall) {
    this._call = call;
  }

  get _PendingSIGHFinanceManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPendingSIGHFinanceManagerCall__Outputs {
  _call: SetPendingSIGHFinanceManagerCall;

  constructor(call: SetPendingSIGHFinanceManagerCall) {
    this._call = call;
  }
}

export class SetPriceOracleCall extends ethereum.Call {
  get inputs(): SetPriceOracleCall__Inputs {
    return new SetPriceOracleCall__Inputs(this);
  }

  get outputs(): SetPriceOracleCall__Outputs {
    return new SetPriceOracleCall__Outputs(this);
  }
}

export class SetPriceOracleCall__Inputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }

  get _priceOracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPriceOracleCall__Outputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }
}

export class SetSIGHAddressCall extends ethereum.Call {
  get inputs(): SetSIGHAddressCall__Inputs {
    return new SetSIGHAddressCall__Inputs(this);
  }

  get outputs(): SetSIGHAddressCall__Outputs {
    return new SetSIGHAddressCall__Outputs(this);
  }
}

export class SetSIGHAddressCall__Inputs {
  _call: SetSIGHAddressCall;

  constructor(call: SetSIGHAddressCall) {
    this._call = call;
  }

  get sighAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHAddressCall__Outputs {
  _call: SetSIGHAddressCall;

  constructor(call: SetSIGHAddressCall) {
    this._call = call;
  }
}

export class SetSIGHFinanceConfiguratorImplCall extends ethereum.Call {
  get inputs(): SetSIGHFinanceConfiguratorImplCall__Inputs {
    return new SetSIGHFinanceConfiguratorImplCall__Inputs(this);
  }

  get outputs(): SetSIGHFinanceConfiguratorImplCall__Outputs {
    return new SetSIGHFinanceConfiguratorImplCall__Outputs(this);
  }
}

export class SetSIGHFinanceConfiguratorImplCall__Inputs {
  _call: SetSIGHFinanceConfiguratorImplCall;

  constructor(call: SetSIGHFinanceConfiguratorImplCall) {
    this._call = call;
  }

  get _configurator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHFinanceConfiguratorImplCall__Outputs {
  _call: SetSIGHFinanceConfiguratorImplCall;

  constructor(call: SetSIGHFinanceConfiguratorImplCall) {
    this._call = call;
  }
}

export class SetSIGHFinanceFeeCollectorCall extends ethereum.Call {
  get inputs(): SetSIGHFinanceFeeCollectorCall__Inputs {
    return new SetSIGHFinanceFeeCollectorCall__Inputs(this);
  }

  get outputs(): SetSIGHFinanceFeeCollectorCall__Outputs {
    return new SetSIGHFinanceFeeCollectorCall__Outputs(this);
  }
}

export class SetSIGHFinanceFeeCollectorCall__Inputs {
  _call: SetSIGHFinanceFeeCollectorCall;

  constructor(call: SetSIGHFinanceFeeCollectorCall) {
    this._call = call;
  }

  get _feeCollector(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHFinanceFeeCollectorCall__Outputs {
  _call: SetSIGHFinanceFeeCollectorCall;

  constructor(call: SetSIGHFinanceFeeCollectorCall) {
    this._call = call;
  }
}

export class SetSIGHMechanismHandlerImplCall extends ethereum.Call {
  get inputs(): SetSIGHMechanismHandlerImplCall__Inputs {
    return new SetSIGHMechanismHandlerImplCall__Inputs(this);
  }

  get outputs(): SetSIGHMechanismHandlerImplCall__Outputs {
    return new SetSIGHMechanismHandlerImplCall__Outputs(this);
  }
}

export class SetSIGHMechanismHandlerImplCall__Inputs {
  _call: SetSIGHMechanismHandlerImplCall;

  constructor(call: SetSIGHMechanismHandlerImplCall) {
    this._call = call;
  }

  get _SIGHMechanismHandler(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHMechanismHandlerImplCall__Outputs {
  _call: SetSIGHMechanismHandlerImplCall;

  constructor(call: SetSIGHMechanismHandlerImplCall) {
    this._call = call;
  }
}

export class SetSIGHSpeedControllerCall extends ethereum.Call {
  get inputs(): SetSIGHSpeedControllerCall__Inputs {
    return new SetSIGHSpeedControllerCall__Inputs(this);
  }

  get outputs(): SetSIGHSpeedControllerCall__Outputs {
    return new SetSIGHSpeedControllerCall__Outputs(this);
  }
}

export class SetSIGHSpeedControllerCall__Inputs {
  _call: SetSIGHSpeedControllerCall;

  constructor(call: SetSIGHSpeedControllerCall) {
    this._call = call;
  }

  get _SIGHSpeedController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHSpeedControllerCall__Outputs {
  _call: SetSIGHSpeedControllerCall;

  constructor(call: SetSIGHSpeedControllerCall) {
    this._call = call;
  }
}

export class SetSIGHStakingCall extends ethereum.Call {
  get inputs(): SetSIGHStakingCall__Inputs {
    return new SetSIGHStakingCall__Inputs(this);
  }

  get outputs(): SetSIGHStakingCall__Outputs {
    return new SetSIGHStakingCall__Outputs(this);
  }
}

export class SetSIGHStakingCall__Inputs {
  _call: SetSIGHStakingCall;

  constructor(call: SetSIGHStakingCall) {
    this._call = call;
  }

  get _SIGHStaking(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHStakingCall__Outputs {
  _call: SetSIGHStakingCall;

  constructor(call: SetSIGHStakingCall) {
    this._call = call;
  }
}

export class SetSIGHTreasuryImplCall extends ethereum.Call {
  get inputs(): SetSIGHTreasuryImplCall__Inputs {
    return new SetSIGHTreasuryImplCall__Inputs(this);
  }

  get outputs(): SetSIGHTreasuryImplCall__Outputs {
    return new SetSIGHTreasuryImplCall__Outputs(this);
  }
}

export class SetSIGHTreasuryImplCall__Inputs {
  _call: SetSIGHTreasuryImplCall;

  constructor(call: SetSIGHTreasuryImplCall) {
    this._call = call;
  }

  get _SIGHTreasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSIGHTreasuryImplCall__Outputs {
  _call: SetSIGHTreasuryImplCall;

  constructor(call: SetSIGHTreasuryImplCall) {
    this._call = call;
  }
}
