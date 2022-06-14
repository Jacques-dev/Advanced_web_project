<template>
  <div id="background_infos">

    <div id="nos_utilisateurs" class="container-fluid">
      <section class="row titre_section">
          Nos utilisateurs
      </section>
      <article class="row chaque_utilisateur" v-for="user in admin.users" :key="user.id">
      
        <div class="container-fluid">
      
          <div class="row">
            <div class="col-sm-12 data_user">
              Nom : {{ user.nom }}
            </div>
            <div class="col-sm-12 data_user">
              Prénom : {{ user.prenom }}
            </div>
            <div class="col-sm-12 data_user">
              Email : {{ user.email }}
            </div>
            <div class="col-sm-12 data_user">
              Téléphone : {{ user.telephone }}
            </div>
          </div>

          <div class="row" v-if="editingUser.id !== user.id">
            <button class="col-sm-6 bouton_supprimer" v-if="admin.id" @click="deleteUser(user.id)">Supprimer</button>
            <button class="col-sm-6 bouton_modifier" v-if="admin.id" @click="editUser(user)">Modifier</button>
          </div>

          <div id="modification_users" class="container" v-else>

                <div class="row">
                  <div class="col-sm-6">
                    <p> Nom utilisateur : </p>
                    <input type="text" v-model="editingUser.nom">
                  </div>
                  <div class="col-sm-6">
                    <p> Prénom utilisateur : </p>
                     <input class="col-sm-4" type="text" v-model="editingUser.prenom">
                  </div>
                </div>

                <div  class="row">
                  <div class="col-sm-6">
                    <p> email : </p>
                    <input class="col-sm-4" type="text" v-model="editingUser.email">
                  </div>
                  <div class="col-sm-6">
                    <p> telephone : </p>
                    <input class="col-sm-12" type="text" placeholder="xxxxxxxxxx" v-model="editingUser.telephone">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <button class="col-sm-12 bouton_valider" @click="sendEditUser()">Valider</button>
                  </div>
                  <div class="col-sm-6">
                    <button class="col-sm-12 bouton_annuler" @click="abortEditUser()">Annuler</button>
                  </div>
                </div>

              </div>

        </div>

      </article>
    </div>

  </div>
</template>

<script>
  module.exports = {
    props: {
      admin: {type: Object}
    },
    data () {
      return {
        editingUser: {
          id: -1,
          nom:'',
          prenom:'',
          email:'',
          telephone:''
        },
        showForm: false
      }
    },
    methods: {
      deleteUser (userId) {
        let content = {
          id: userId
        }
        this.$emit('delete-user', content)
      },
      // Enregistre la veleur des champs du formulaire de modification du user
      editUser (user){
        this.editingUser.id = user.id
        this.editingUser.nom = user.nom
        this.editingUser.prenom = user.prenom
        this.editingUser.email = user.email
        this.editingUser.telephone = user.telephone
      },
      // Envoie un nouveau user (modifié)
      sendEditUser(){
        this.$emit('update-user', this.editingUser)
        this.abortEditUser()
      },
      // Annule la modification d'un profil
      abortEditUser(){
        this.editingUser={
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

  .chaque_utilisateur {
    background-color: var(--beige);
    margin: 10px 0;
  }

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

  #modification_users {
    margin: 15px 0 0 0;
    background-color: var(--beige);
    padding: 15px;
  }

  #modification_users .row {
    color:black;
    padding: 0 0 15px 0;
  }

  #modification_users p {
    font-weight:bold;
  }

</style>