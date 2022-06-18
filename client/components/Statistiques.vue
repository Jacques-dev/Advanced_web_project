<template>
    <div class="container-fluid" id="background">
        <!-- code html pour front -->
        Voici la première commande : <br>
        id : {{ admin.commands[0].id }} <br>
        time : {{ admin.commands[0].time }} <br>
        price : {{ admin.commands[0].price }} <br>
        adresse : {{ admin.commands[0].adresse }} <br>
        client : {{ admin.commands[0].client }}
        <br><br>
        regardez sans modifier les autres vues pour voir comment faire des boucles sur les objets pour afficher tout ce qu'ils contiennent
    </div>
</template>

<script>
  module.exports = {
    // pas besoin de toucher à props
    props: {
      admin: {type: Object}
    },
    data () {
        return {
            variable: "hello world"
        }
    },
    methods: {

    }
  }
</script>

<style>
  #background {
    color:var(--rouge);
    height: 100vh;
  }
</style>