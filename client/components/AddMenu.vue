<template>
  <div id="formulaire_ajouter_plat">

      <div class="container-fluid">
        <form @submit.prevent="addMenu">
        <div id="nouveau_menu" class="row">
          <div class="col-sm-12">Nouveau menu à ajouter</div>
        </div>
        <div class="row">
          <select class="col-sm-12" v-model="newMenu.type">
            <option value="" disabled selected> Type de plat </option>
            <option value="soups">Soup</option>
            <option value="dumplings">Dumpling</option>
            <option value="noodles">Noodle</option>
            <option value="sashimi">Sashimi</option>
            <option value="nigiri">Nigiri</option>
          </select>
        </div>
        <div class="row">
          <input class="col-sm-12" type="text" v-model="newMenu.name" placeholder="Nom du menu" required>
        </div>
        <div class="row">
          <input class="col-sm-12" type="number" v-model="newMenu.price" placeholder="Prix" required>
        </div>
        <div class="row">
          <textarea placeholder="description du plat" class="col-sm-12" type="text" v-model="newMenu.description" required></textarea>
        </div>
        <div class="row">
          <select class="col-sm-12" v-model="newMenu.spicy">
            <option value="" disabled selected> Spicy or not </option>
            <option value="false">not spicy</option>
            <option value="true">spicy</option>
          </select>
        </div>
        <div class="row">
          <input class="col-sm-12" type="text" v-model="newMenu.image" placeholder="Lien vers l'image">
        </div>
        <div class="row">
          <button class="col-sm-12" type="submit">Ajouter</button>
        </div>
        </form>
      </div>


  </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        newMenu: {
          type: '',
          name: '',
          description: '',
          image: '',
          price: '',
          spicy: null
        }
      }
    },
    methods: {
      // Envoie la valeur des champs du formulaire
      addMenu () {
        this.$emit('add-menu', this.newMenu)
      }
    }
  }
</script>

<style>

  #nouveau_menu {
    font-size: 1.3em;
    text-align:center;
    color: var(--beige);
  }

  @media only screen and (max-device-width: 1000px) {
    #formulaire_ajouter_plat {
      width: 70vw !important;
      margin: 0 15vw 0 15vw;
    }
  }

  #formulaire_ajouter_plat {
    position: fixed;
    z-index: 4;
    background-color: #891B17;
    width: 20%;
  }

  #formulaire_ajouter_plat .row {
    margin: 20px 5px 20px 5px;
  }

</style>
