<template lang="html">
  <div class="component-wrapper">
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link tag="a" :to="{ name: 'Home'}" class="navbar-brand">Stock Trader</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link tag="li" :to="{ name: 'Portfolio'}" active-class="active" exact><a>Portfolio</a></router-link>
        <router-link tag="li" :to="{ name: 'Stock'}" active-class="active" exact><a>Stocks</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay()">End Day</a></li>
        <li class="dropdown">
          <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false">Save & load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData()">Save Data</a></li>
            <li><a href="#" @click="loadData()">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData () {
      this.fetchData()
    }
  }
}
</script>

<style lang="css">
</style>
