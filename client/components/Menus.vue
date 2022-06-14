<template>
  <section id="background">

    <section v-if="admin.id" class="container-fluid" id="balise_admin">
      <div class="row">
        <button id="bouton_ajouter_menus" @click="showForm = true">Ajouter un plat</button>
      </div>
      <div class="row">
        <button id="bouton_fermer_menus" v-if="showForm" @click="showForm = false">Fermer</button>
      </div>
      <div class="row">
        <div id ="colonne_admin" class="col-sm-12">
          <add-menu v-if="showForm" @add-menu="addMenu"></add-menu>
        </div>
      </div>

    </section>

    <section id="colonne_principale" class="container">

      <article class="row d-flex justify-content-center">
        <p id="titre_page">Decouvrez nos variétés de plats</p>
      </article>

      <article class="row">
        <article class="col-sm-12">

          <article v-for="(type, index) in menusTypes">

            <div class="type_plat row">
              <router-link :id="nav(type)" :to="nav('/menus/#' + menusTypes[0])">soupes</router-link>
              <router-link :id="nav(type)" :to="nav('/menus/#' + menusTypes[1])">Dumplings</router-link>
              <router-link :id="nav(type)" :to="nav('/menus/#' + menusTypes[2])">Nouilles</router-link>
              <router-link :id="nav(type)" :to="nav('/menus/#' + menusTypes[3])">Sashimi</router-link>
              <router-link :id="nav(type)" :to="nav('/menus/#' + menusTypes[4])">Nigiri</router-link>
            </div>

            <div class="row balise_current_type_menu">
              <div class="current_type_menu">
                {{ type }}
              </div>
            </div>

            <article class ="ligne_plat row" v-for="menu in menus[index]" :key="menu.id">

              <div class="row">
                <div class="menu-img col-sm-3">
                  <img v-bind:src="menu.image">
                </div>
                <div class=" col-sm-9 menu-description">
                  <p>{{ menu.description }}</p>
                </div>
              </div>

              <div class="nom_prix_spicy_plat row" v-if="editingMenu.id !== menu.id">
                <div class="menu-title row">
                  <p>{{ menu.name }} - {{ menu.price }}€</p>
                </div>
                <div class="row" v-if="isSpicy(menu.spicy)">
                  <p class="spicy">Epicé</p>
                </div>
                <div class="bouton-menus row">
                  <button class="col-sm-6 bouton_supprimer" v-if="admin.id" @click="deleteMenu(menu.id, menu.type)">Supprimer</button>
                  <button class="col-sm-6 bouton_modifier" v-if="admin.id" @click="editMenu(menu, menu.type)">Modifier</button>
                </div>
              </div>

              <div id="modification_plats" class="container" v-else>

                <div class="row">
                  <div class="col-sm-6">
                    <p> nom du plat : </p>
                    <input type="text" v-model="editingMenu.name">
                  </div>
                  <div class="col-sm-6">
                    <p> prix du plat : </p>
                     <input class="col-sm-4" type="number" v-model="editingMenu.price">
                  </div>
                </div>

                <div  class="row">
                  <div class="col-sm-6">
                    <p> description du plat : </p>
                    <textarea class="col-sm-12" v-model="editingMenu.description"></textarea>
                  </div>
                  <div class="col-sm-6">
                    <p> image du plat : </p>
                    <input class="col-sm-12" type="text" v-model="editingMenu.image" placeholder="Lien vers l'image">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <button class="col-sm-12 bouton_valider" @click="sendEditMenu()">Valider</button>
                  </div>
                  <div class="col-sm-6">
                    <button class="col-sm-12 bouton_annuler" @click="abortEditMenu()">Annuler</button>
                  </div>
                </div>

              </div>

            </article>
          </article>

        </article>
      </article>

    </section>

  </section>
</template>

<script>
  const AddMenu = window.httpVueLoader('./components/AddMenu.vue');
  module.exports = {
    components: {
      AddMenu,
    },
    props: {
      menus: { type: Array, default: [] },
      admin:{type: Object },
      user: {type: Object }
    },
    data () {
      return {
        editingMenu: {
          id: -1,
          name: '',
          description: '',
          image: '',
          price: 0,
          spicy: false,
          type: ''
        },
        menusTypes: ['soups', 'dumplings', 'noodles', 'sashimi', 'nigiri'],
        showForm: false
      }
    },
    methods: {
      // Permet de donner un id a une balise dans une boucle
      nav(type) {
        return type
      },
      // Affiche "Spicy" sur le site si le champ spicy du menu est "true"
      isSpicy(boolean) {
        return boolean
      },
      // Ajoute un menu à la liste des menus du site
      addMenu (menu) {
        this.$emit('add-menu', menu)
      },
      // Supprime un menu depuis la liste des menus du site
      deleteMenu (menuId, menuType) {
        let content = {
          id: menuId,
          type: menuType
        }
        this.$emit('delete-menu', content)
      },
      // Enregistre la valeur des champ du formulaire de modification d'un menu
      editMenu (menu, menuType) {
        this.editingMenu.id = menu.id
        this.editingMenu.name = menu.name
        this.editingMenu.description = menu.description
        this.editingMenu.image = menu.image
        this.editingMenu.price = menu.price
        this.editingMenu.spicy = menu.spicy
        this.editingMenu.type = menuType
      },
      // Envoie un menu modifié
      sendEditMenu () {
        this.$emit('update-menu', this.editingMenu)
        this.abortEditMenu()
      },
      // Annule la modification d'un menu
      abortEditMenu () {
        this.editingMenu = {
          id: -1,
          name: '',
          description: '',
          image: '',
          price: 0,
          spicy: false,
          type: ''
        }
      }
    }
  }
</script>

<style scoped>

  .bouton_valider:hover {
    background-color: var(--bleu) !important;
    color: var(--text) !important;
    font-weight: bold;
  }

  .bouton_annuler:hover,.bouton_supprimer:hover {
    background-color: var(--rouge) !important;
    color: var(--text2) !important;
    font-weight: bold;
  }

  .bouton_modifier:hover {
    background-color: var(--bleu) !important;
    color: var(--text) !important;
    font-weight: bold;
  }

  .balise_current_type_menu {
    display: flex;
    justify-content: center;
  }

  .current_type_menu {
    font-size: 2em;
    background-color: var(--rouge);
    color: var(--beige);
    width: auto;
    padding: 0 25px 5px 25px;
    text-align: center;
  }

  #colonne_admin {
    padding: 0;
    margin: 0;
  }

  #modification_plats {
    margin: 15px 0 0 0;
    background-color: var(--beige);
    padding: 15px;
  }

  #modification_plats .row {
    color:black;
    padding: 0 0 15px 0;
  }

  #modification_plats p {
    font-weight:bold;
  }

  #titre_page {
    font-size: 2.6em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 3%;
  }

  #background {
    color:var(--rouge);
    height: auto;
    background-size: contain;
    background-repeat: repeat;
    background-image: url("../images/backgrounds/epices.jpg");
  }

  .menu-img img {
    width: 100px;
    height: 100px;
  }

  #colonne_principale {
    background-color:var(--bleu_o);
    padding: 2%;
    width: 100%;
  }

  .spicy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    font-size: 1.2em;
    min-width: 100px;
    color: var(--text2);
    background-color: var(--rouge);
  }

  .type_plat {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 2%;
    margin-bottom: 5%;
    border-top: 2px solid var(--rouge_o);
    border-bottom: 2px solid var(--rouge_o);
  }

  .type_plat a {
    margin-left: 3%;
    margin-right: 3%;
    color: var(--rouge);
  }

  .ligne_plat {
    border-bottom: 2px solid var(--rouge_o);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 5%;
    padding: 0 0 2% 0;
  }

  .menu-img, .nom_prix_spicy_plat {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .menu-title, .spicy, .menu-description, .bouton-menus {
    padding:10px;
  }

  .menu-description {
    background-color: var(--beige_o);
    color: var(--rouge);
    margin-top: 10px;
    font-size: 1.2em;
  }

  .menu-title {
    font-size: 1.5em;
    margin-left: 10px;
  }

  #colonne_principale button {
    padding:  5px;
    border-radius: 20px 20px;
    font-size: 1.4em;
    margin: 10px 0 0 0 ;
  }

  #balise_admin {
    position: fixed;
    z-index: 2;
  }

  @media only screen and (max-device-width: 1000px) {
    #bouton_ajouter_menus, #bouton_fermer_menus{
      width: 100vw !important;
    }
  }

  #bouton_ajouter_menus, #bouton_fermer_menus {
    background-color: var(--rouge);
    color: var(--beige);
    padding: 10px;
    border: none;
    width: 17%;
    min-width: 120px;
  }

  #bouton_fermer_menus:hover,#bouton_ajouter_menus:hover {
    background-color: var(--beige);
    color:var(--rouge);
    font-weight: bold;
    border: none;
  }

</style>
