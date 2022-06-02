<template>

  <div v-if="checkIfLogged(admin.id, user.id)"></div>

</template>

<script>
  module.exports = {
    props: {
      admin:{type: Object },
      user: {type: Object }
    },
    data () {
      return {

      }
    },
    methods: {
      // Si un admin ou un client lambda du site est connecté
      // alors on exécute la route logout pour déconnecter l'utilisateur
      checkIfLogged(admin, user) {
        if (admin != '' || user  != '') {
          this.$emit('logout');
        }
      }
    }
  }
</script>

<style scoped></style>
