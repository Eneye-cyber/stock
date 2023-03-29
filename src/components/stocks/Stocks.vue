<template lang="html">
  <div class="component-wrapper">
    <app-stock v-for="(stock, id) in stocks" :key="id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style lang="css">
</style>
