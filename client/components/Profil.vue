<template>
  <div id="background_infos">

    <div class="container">
      <div class="row">
        <div id="titre_page_info" class="col-sm-12">
          <h1>Mon profil</h1>
        </div>
      </div>
      <div class="row">
        <div  id="mes_infos" class="container-fluid">
          <div class=" col-sm-12">

            <div class="row titre_section">
              <p>Mes infos</p>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <form id="formulaire_modification_profil" @submit.prevent="sendEditProfil">

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Nom :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="nom" :placeholder="user.nom" type="text" v-model="editingProfile.nom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Prenom :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="prenom" :placeholder="user.prenom" type="text" v-model="editingProfile.prenom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Email :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="email" :placeholder="user.email" type="text" v-model="editingProfile.email">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Telephone :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.telephone" type="text" v-model="editingProfile.telephone">
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-sm-12" align="center">
                      <button type="submit" class="slide_page_commander">Modifier</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="res_cmd">
          <div class="row">
            <div id="mes_reservations" class="col-lg-6">
              <section class="row titre_section">
                Mes réservations
              </section>
              <section class="row chaque_reservation" v-for="reserv in user.reservations">
                <section class="col-sm-12 data_reservation">
                  Date : {{ reserv.date }}
                </section>
                <section class="col-sm-12 data_reservation">
                  Heure : {{ reserv.heure }}
                </section>
                <section class="col-sm-12 data_reservation">
                  Nombre de personnes : {{ reserv.personnes }}
                </section>
              </section>
            </div>
            <div id="mes_commandes" class="col-lg-6">
              <section class="row titre_section">
                Mes commandes
              </section>
              <section class="row chaque_commande" v-for="cmd in user.commands">
                <section class="col-sm-12 data_commande">
                  Date : {{ cmd.time }}
                </section>
                <section class="col-sm-12 data_commande">
                  Prix : {{ cmd.price }} €
                </section>
                <section class="col-sm-12 data_commande">
                  Adresse : {{ cmd.adresse }}
                </section>
              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      user: {type: Object },
    },
    data () {
      return {
        editingProfile: {
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:''
        }
      }
    },
    methods: {
      // Enregistre la veleur des champs du formulaire de modification du profil
      editProfil (profile){
        this.editingProfile.nom = profile.nom
        this.editingProfile.prenom = profile.prenom
        this.editingProfile.email = profile.email
        this.editingProfile.telephone = profile.telephone
      },
      // Envoie un nouveau profil (modifié)
      sendEditProfil(){
        this.$emit('update-profile', this.editingProfile)
        this.abortEditProfil()
      },
      // Annule la modification d'un profil
      abortEditeProfil(){
        this.editingProfile={
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:''
        }
      }
    }
  }
</script>

<style scoped>

  #res_cmd {
    padding: 0 !important;
  }

  #formulaire_modification_profil{
    margin: 10px 0;
  }

  #formulaire_modification_profil input{
    padding: 2px 0;
  }

  .chaque_reservation, .chaque_commande {
    box-shadow: 3px 3px 3px 3px var(--rouge);
    margin: 12px 0 12px 0;
    padding: 10px 0 10px 0;
  }

  .data_reservation, .data_commande {
    margin: 0 0 10px 0;
  }

  .titre_section {
    font-size: 1.7em;
    display:flex;
    justify-content: center;
    padding: 20px;
  }

  .container {
    height: 100%;
  }

  #background_infos {
    background-color: var(--rouge);
    overflow-y: scroll;
    height: auto;
  }
  #background_infos::-webkit-scrollbar {
    display: none;
}

  #titre_page_info {
    background-color: var(--beige_o);
    text-align: center;
    padding: 20px;
  }

  #mes_infos, #mes_reservations, #mes_commandes {
    background-color: var(--beige_o);
  }

  #mes_infos {
    margin-bottom: 2%;
    border-bottom: black 1px solid;
  }

  #mes_infos input {
    width: 80%;
    border: none;
    border-bottom: solid 2px var(--rouge);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #891B17 4%);
    color: var(--text);
  }

  #mes_infos input:focus, #mes_infos input:valid {
    outline: none;
  }

  #mes_infos input:focus::-webkit-input-placeholder, #mes_infos input:valid::-webkit-input-placeholder {
    color: var(--rouge);
    font-size: 15px;
  }

</style>
