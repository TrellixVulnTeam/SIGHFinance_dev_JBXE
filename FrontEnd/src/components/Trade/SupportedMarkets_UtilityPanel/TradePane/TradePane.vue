<template src="./template.html"></template>

<script>
import Vue from 'vue';

import TabBar from '@/components/TabBar/TabBar.vue';
import EventBus, { EventNames, } from '@/eventBuses/default';

// INDIVIDUAL TABS 
import WalletPortfolio from './WalletPortfolio/WalletPortfolio.vue';
import Lending from './Lending/Lending.vue';
import Streaming from './Streaming/Streaming.vue';
import InterestRates from './InterestRates/InterestRates.vue';
import StakeSIGH from './StakeSIGH/StakeSIGH.vue';

export default {
  
  name: 'trade-pane',

  components: {
    TabBar,           // TAB-BAR : We emit events on tabBarEventBus (defined as vue component below in data() ) to change the tab
    WalletPortfolio,
    Lending,         
    Streaming,
    InterestRates,
    StakeSIGH
  },

  data() {
    return {
      activeTab: 'Lending',
      tabs: {
        walletNotConnectedTabs: ['Lending','Streaming','Stake SIGH','Portfolio'], // ,'Interest Rates'
        walletConnectedTabs: ['Lending','Streaming','Stake SIGH','Portfolio'],    // ,'Interest Rates'
      },
      height: 0,
      tabBarEventBus: new Vue(),
    };
  },

  created() {
    console.log(" IN trade-pane Created Function");
  },

  updated() {
    this.height = this.$refs.tradePane.clientHeight;
  },

  mounted() {
    // We emit an event for Tab Bar event Bus, to change the Tab
    EventBus.$on(EventNames.userWalletConnected, () => this.tabBarEventBus.$emit('change-active-tab', 'Lending'));
    EventBus.$on(EventNames.userWalletDisconnected, this.userWalletDisconnectedListener);
    this.height = this.$refs.tradePane.clientHeight;
  },

  methods: {
    activeTabChange(activeTab) {
      this.activeTab = activeTab;
      let el = document.getElementsByClassName('trade-pane-content')[0];
      if (activeTab === 'Portfolio') {
        el.style.height = 'calc(100%)';
      } 
      else {
        el.style.height = 'calc(100%)';
      }
    },

    // userWalletDisconnectedListener() {
    //   this.activeTab = 'Lending';
    //   this.tabBarEventBus.$emit('change-active-tab', 'Lending');
    // },    

  },

};
</script>


<style lang="scss" src="./style.scss" scoped></style>
