<template>
  <div id="bouton_connexion_register">

    <div class="interface_connexion" v-if="afficher_login">
      <div class="affichage_formulaire" id="popupForm_login">
        <form class="formulaire-container" @submit.prevent="login">
          <h2>Veuillez vous connecter</h2>
          <label for="email">
            <p class="titre_formulaire">E-mail</p>
          </label>
          <input type="text" v-model="editLogin.email" id="email" placeholder="Votre Email" name="email" required>
          <label for="psw">
            <p class="titre_formulaire">Mot de passe</p>
          </label>
          <input type="password" v-model="editLogin.password" placeholder="Votre mot de passe" name="psw" required>

          <button type="submit" class="btn_connexion">Connexion</button>
          <button class="btn_connexion other" @click="switchForm()">Pas encore de compte ?</button>
        </form>
      </div>
    </div>

    <div class="interface_inscription" v-else>
      <div class="affichage_formulaire" id="affichage_register">
        <form class="formulaire-container" @submit.prevent="register">
          <h2>Inscription</h2>
          <label for="email">
            <p class="titre_formulaire">E-mail</p>
          </label>
          <input type="text" v-model="editRegister.email" id="email_register" placeholder="Entrez votre Email" name="email" required>

          <label for="psw">
            <p class="titre_formulaire">Mot de passe</p>
          </label>
          <input type="text" v-model="editRegister.password" placeholder="Entrez votre mot de passe" name="psw" required>

          <label for="nom">
            <p class="titre_formulaire">Nom</p>
          </label>
          <input type="text" v-model="editRegister.nom" placeholder="Entrez votre nom" name="nom" required>

          <label for="prenom">
            <p class="titre_formulaire">Prenom</p>
          </label>
          <input type="text" v-model="editRegister.prenom" placeholder="Entrez votre Prenom" name="prenom" required>

          <label for="telephone">
            <p class="titre_formulaire">Telephone</p>
          </label>
          <input type="text" v-model="editRegister.telephone" placeholder="Entrez votre numéro de Telephone" name="telephone" required>

          <button type="submit" class="btn_connexion">Je m'inscris</button>
          <button class="btn_connexion other" @click="switchForm()">J'ai déjà un compte</button>

        </form>
      </div>
    </div>
  </div>

</template>

<script>
  module.exports = {
    data () {
      return {
        editRegister:{
          email:'',
          password:'',
          nom:'',
          prenom:'',
          telephone:''
        },
        editLogin:{
          email:'',
          password:''
        },
        afficher_login: true
      }
    },
    methods: {
      // Permet d'afficher soit le formulaire de connexion soit d'enregistrement
      switchForm() {
        if (this.afficher_login == true) {
          this.afficher_login = false
        } else {
          this.afficher_login = true
        }
      },
      // Envoie les valeurs des champs du du formulaire d'enregistrement
      register () {
        var email = document.getElementById("email_register").value
        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
          if (this.afficher_login == true) {
            this.afficher_login = false
          } else {
            this.afficher_login = true
          }
          this.$emit('register', this.editRegister)
        }
      },
      // Envoie les valeurs des champs du du formulaire de connexion
      login () {
        var email = document.getElementById("email").value
        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) ) {
          this.$emit('login', this.editLogin)
        } else if (email.match(/(admin-)+[a-z]+(-)+[a-z]+(-efrei_2023)/gm)) {// admin-jacques-tellier-efrei_2023
          this.$emit('admin-login', this.editLogin)
        }
      }

    }
  }

</script>

<style>

  #bouton_connexion_register{
    background-color: var(--beige);
    height: 100%;
  }

  .interface_inscription{
    position: relative;
  }

  .open-button {
    background-color: var(--bleu);
    color: white;
    border: none;
    cursor: pointer;
  }

  .interface_connexion, .interface_inscription {
    position: relative;
    text-align: center;
    width: 100%;
  }

  #bouton_connexion_register .other {
    background-color: blue !important;
  }

  .affichage_formulaire {
    display: flex;
    justify-content: center;
    padding-top:2%;
  }

  .formulaire-container {
    border: solid black 2px;
    max-width: 500px;
    padding: 20px;
    background-color: #fff;
  }

  .formulaire-container input[type=text], .formulaire-container input[type=password] {
    width: 100%;
    padding: 10px;
    margin: 5px 0 22px 0;
    border: none;
    background: #eee;
  }

  .formulaire-container .btn_connexion {
    background-color: var(--rouge);
    color: #fff;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom:10px;
    opacity: 0.8;
  }

  .formulaire-container .btn_connexion:hover, .open-button:hover {
    opacity: 1;
    color:var(--text2);
  }

</style>
