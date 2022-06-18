
<template>
  <div class="container-fluid">
    <div v-if="paiement_error()"></div>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      paiement_error() {
        this.$emit('error-payment');
      }
    }
  }
</script>

<style>
</style>