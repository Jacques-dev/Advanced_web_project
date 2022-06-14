<template>

  <section id="background">
    <section id="colonne_principale" class="container d-flex flex-column" >
<!-- 
      <section class="row">
        <h1>Paiement avec Paypal</h1>
        <h3>{{ panier.prix }}€</h3>
        <button></button>
      </section> -->

      <section id="ligne_resume_commande" class="row">

        <article class="col-sm-5 taille_2">
          <p>Nombre de menus : {{ panier.nb_menus }} </p>
        </article>
        <article class="col-sm-3 taille_2">
          <p>Total : {{ panier.prix }}€ </p>
        </article>
        <article class="col-sm-4">
          <button class="col-sm-12 effet_bouton_commander taille_1" id="bouton_commander" @click="commander()">
            Commander
          </button>
          <input type="text" placeholder="adress" class="col-sm-12" v-model="adresse">
        </article>

      </section>
      <section id="ligne_commande" class="row">

        <section id="colonne_gauche" class="col-sm-2 colonne">

          <section class="container-fluid d-flex flex-column">
            <div class="row type_menu">
              <button class="effet_bouton" @click="changeTypeMenu('soups')">Soupes</button>
            </div>
            <div class="row type_menu">
              <button class="effet_bouton" @click="changeTypeMenu('dumplings')">Dumplings</button>
            </div>
            <div class="row type_menu">
              <button class="effet_bouton" @click="changeTypeMenu('noodles')">Nouilles</button>
            </div>
            <div class="row type_menu">
              <button class="effet_bouton" @click="changeTypeMenu('sashimi')">Sashimi</button>
            </div>
            <div class="row type_menu">
              <button class="effet_bouton" @click="changeTypeMenu('nigiri')">Nigiri</button>
            </div>
          </section>

        </section>
        <section id="colonne_centrale" class="col-sm-6 colonne">

          <section class="container-fluid" v-for="menuType in menus">
            <section class="row">
              <article class="col-sm-6 chaque_plat" v-for="menu in menuType" v-if="checkMenuType(menu.type)">
                <article class="container-fluid">

                  <div class="row image_plat">
                    <img v-bind:src="menu.image" class="image">
                    <div class="affichage_bouton_ajout_panier">
                      <button type="button" name="button" class="ajouter_panier_bouton" @click="addToPanier(menu.id, menu.type, menu.price, menu.image, menu.name)" v-if="user.id">Ajouter au panier</button>
                    </div>
                  </div>

                  <div class="row description-plat taille_1">
                    <p>{{ menu.name }} - {{ menu.price }}€ </p>
                  </div>

                  <div class="row spicy taille_1" v-if="isSpicy(menu.spicy)">
                    <p>Epicé</p>
                  </div>

                </article>
              </article>
            </section>
          </section>
        </section>
        <section id="colonne_droite" class="col-sm-4 colonne">

          <article class="row">
            <section class="container-fluid">
              <article class="row">
                <div id="titre_colonne_droite" class="col-sm-12" align="center">
                  <h3>Panier</h3>
                </div>
              </article>
              <article class="chaque_plat_panier" v-for="menu in panier.menus" :key="menu.id" class="col-sm-12 plat">
                <section class="container-fluid">

                  <article class="row">
                    <div class="image_plat col-sm-8">
                      <div>
                        <img :src="menu.image" class="image">
                      </div>
                    </div>
                    <div class="col-sm-4 colonne_prix_quantite">
                      <div class="prix_quantite_plat_panier container-fluid">
                        <p class="row">Prix : {{menu.prix}} </p>
                        <p class="row">Quantité : {{menu.quantity}} </p>
                      </div>
                    </div>
                  </article>

                  <article class="row ligne_boutons_panier">
                    <article class="col-sm-6">
                      <select class="col-sm-12 mySelect" @change="edit(menu.id, menu.type, menu.prix)" v-model="editMenu.quantity">
                        <option value="" disabled selected>quantité</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </article>

                    <article class="col-sm-6 bouton_supprimer_panier">
                      <button class="effet_bouton col-sm-12" @click="removeFromPanier(menu.id, menu.type, menu.prix)">Supprimer</button>
                    </article>
                  </article>

                </section>
              </article>

            </section>
          </article>

        </section>

      </section>

    </section>
  </section>

</template>

<script>
  module.exports = {
    props: {
      menus: { type: Array, default: [] },
      panier: { type: Object },
      user: { type: Object }
    },
    data () {
      return {
        editMenu: {
          id: '',
          quantity: '',
          prix: '',
          image: '',
          type: ''
        },
        menuType: "soups",
        adresse: ""
      }
    },
    methods: {
      // Affiche les menus du type donné en argument
      checkMenuType(type) {
        let bool = false
        if(this.menuType == type) {
          bool = true
        }
        return bool
      },
      // Modifie le type de menu à afficher
      changeTypeMenu(newType) {
        this.menuType = newType
      },
      // Envoie la valeur des champs du formulaire de modification d'un menu dans le panier
      edit(id, type, prix) {
        this.editMenu.id = id
        this.editMenu.type = type
        this.editMenu.prix = prix
        let content = {
          id: this.editMenu.id,
          quantity: this.editMenu.quantity,
          prix: this.editMenu.prix,
          type: this.editMenu.type
        }
        this.$emit('update-menu-from-panier', content)
      },
      // Simule le passage d'une commande
      commander() {
        if (this.adresse != "") {
          this.$emit('commander', {adresse: this.adresse})
        } else {
          new Notify({
          status: "warning",
          title: "Attention",
          text: "Veuillez inscrire l'adresse de livraison",
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
        }
        
      },
      // Affiche "Spicy" sur le site si le champ spicy du menu est "true"
      isSpicy(boolean) {
        return boolean
      },
      // Ajoute un menu au panier
      addToPanier (menuId, menuType, menuPrix, menuImage, menuName) {
        let content = {
          id: menuId,
          type: menuType,
          prix: menuPrix,
          image: menuImage,
          name: menuName
        }
        this.$emit('add-to-panier', content)
      },
      // Supprime un menu du panier
      removeFromPanier(menuId, menuType, menuPrix) {
        let content = {
          id: menuId,
          type: menuType,
          prix: menuPrix
        }
        this.$emit('remove-from-panier', content)
      }
    }
  }
</script>

<style scoped>

  #background {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url("../images/backgrounds/commander.webp");
  }

  #ligne_resume_commande {
    padding: 20px;
    background-color: var(--bleu_o);
  }

  #ligne_resume_commande button {
    padding: 5px;
    width: 100%;
  }

  #ligne_commande {
    background-color: var(--bleu_o);
    border-top: 1px solid black;
  }

  @media only screen and (min-device-width: 1000px) {
    .effet_bouton:hover,
    .effet_bouton:focus {
      box-shadow: inset 9em 0 0 0 var(--hover);
    }

    .effet_bouton_commander:hover,
    .effet_bouton_commander:focus {
      box-shadow: inset 21em 0 0 0 var(--hover);
    }

    .effet_bouton, .effet_bouton_commander {
    --color: var(--beige) ;
    --hover: var(--rouge) ;
    background-color: var(--beige);
    }

    #colonne_principale{
      border: 1px solid black;
    }

    #colonne_principale .effet_bouton, .effet_bouton_commander {
    transition: 0.90s;
    }

    #colonne_principale button:hover, button:focus {
    border-color: var(--hover);
    color: var(--color);
    }


  }

  @media only screen and (min-device-width: 575px){
    #colonne_droite{
      border-left: 1px solid black;
    }
  }

  @media only screen and (max-device-width: 575px) {
    #colonne_principale {
      max-height: 100%;
      overflow-y: scroll;
    }

    #ligne_resume_commande, #colonne_gauche, #colonne_centrale {
      margin-bottom: 21px;
    }

    #colonne_droite {
      border-top: 4px double black;
    }
  }

  #colonne_gauche {
    padding-top: 20px;
  }

  #colonne_centrale {
    overflow-y: scroll;
    height: 600px;
  }

  #colonne_centrale::-webkit-scrollbar {
      display: none;
  }

  #colonne_centrale img {
    max-width: 245px;
    max-height: 185px;
    margin: 15px 0 0 0;
  }

  #colonne_centrale .image_plat:hover .image {
    opacity: 0.50;
  }

  #colonne_centrale .image_plat:hover .affichage_bouton_ajout_panier {
    opacity: 1;
  }

  #colonne_centrale .chaque_plat {
    padding-bottom: 1vh;
    margin-top: 2vh;
    border-bottom: 1px solid black;
  }

  #colonne_droite {
    overflow-y: scroll;
    max-height: 600px;
    word-break: break-all;

  }

  #colonne_droite .chaque_plat_panier {
    margin-bottom: 20px;
    padding: 10px 20px 15px 10px ;
    border-bottom: 1px solid black;
  }

  #colonne_droite h3{
    margin: 18px 0 18px 0;
  }

  #colonne_droite::-webkit-scrollbar {
      display: none;
  }

  #titre_colonne_droite{
    border-bottom: 1px solid black;
  }

  .ligne_boutons_panier select{
    margin-bottom: 10px;
  }

  .chaque_plat_panier {
    margin: 10px 0 10px 0;
    padding: 10px 0 10px 0;
  }

  .prix_quantite_plat_panier{
    padding-top: 15px;
  }
  .colonne_prix_quantite{
    padding: 0 0 0 5px !important;
  }

  .bouton_supprimer_panier{
    padding-right: 0 !important;
  }

  .ligne_boutons_panier {
    margin-top: 15px;
  }

  .effet_bouton {
    word-break: break-word;
    min-width: 70px;
  }

  .type_menu {
    margin: 10px 0 10px 0;
  }

  .type_menu button {
    width: 100%;
  }

  .affichage_bouton_ajout_panier {
    transition: .6s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .ajouter_panier_bouton {
    background-color: var(--bleu);
    padding: 2% 5%;
  }

  .image_plat {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .image {
    border: black 1px solid;
    width: 100%;
    height: auto;
    transition: 1s ease;
  }

  .description-plat {
    padding: 15px 0 0 0;
  }

  .spicy {
    color:red;
  }

</style>
