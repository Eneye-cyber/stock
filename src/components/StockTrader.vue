<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h3>You may Save & Load your Data</h3>
    <h4>Click on 'End Day' to begin a New Day</h4>
    <hr>
    <p>Youur Funds: {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
