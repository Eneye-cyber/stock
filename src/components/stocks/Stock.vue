<template lang="html">
  <div class="col-sd-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(PRICE: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quality" v-model="quantity" :class="{danger: insufficientFunds}">
        </div>
        <div class="pull-right">
          <button
          class="btn btn-primary"
          name="button"
          @click="buyStock()"
          :disabled="insufficientFunds || quantity <= 0 ">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data: function () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style >
.danger {
  border: 1.5px solid red !important;
}
</style>
