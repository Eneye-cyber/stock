<template lang="html">
  <div class="col-sd-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(PRICE: {{ stock.price }} | QUANTITY: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quality" v-model="quantity" :class="{danger: insufficientQuantity }">
        </div>
        <div class="pull-right">
          <button
          class="btn btn-info"
          name="button"
          @click="sellStock()"
          :disabled="insufficientQuantity || Number(quantity) <= 0 ">{{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data: function () {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity () {
      return Math.floor(this.quantity) > Math.floor(this.stock.quantity)
    }
  },
  methods: {
    ...mapActions({
      sellShares: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.sellShares(order)
    }
  }
}
</script>

<style>
.danger {
  border: 1.5px solid red !important;
}
</style>
