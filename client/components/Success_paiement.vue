
<template>
  <div class="container-fluid">
    <div v-if="paiement_success()"></div>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      paiement_success() {
        let uri = window.location.href.split('&');
        
        const content = {
          paymentId: uri[0].split('?')[1].split('=')[1],
          PayerID: uri[2].split('=')[1]
        }
        
        this.$emit('success-payment', content);
      }
    }
  }
</script>

<style>
</style>