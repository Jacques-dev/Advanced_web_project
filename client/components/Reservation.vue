<template>

  <div class="container-fluid" id="background_reservation">

    <div id="header" class="row d-flex justify-content-center align-items-center">
      <p id="titre_page">Faites une réservation<p>
    </div>

    <div id="content" class="row">
      <div class="container-fluid">

        <form class="col-sm-12" @submit.prevent="reserver">

          <div class="row d-flex flex-wrap justify-content-center align-items-center">
            <div class="col-sm-3" align="center">
              <input class="col-sm-12" type="date" name="date" id="select_date" v-model="editingReservation.date">
            </div>
            <div class="col-sm-3" align="center">
              <select class="col-sm-12" id="heure_select" v-model="editingReservation.heure">
                <option value="" disabled selected>Heure de réservation</option>
                <option value="12h00">12h00</option>
                <option value="12h15">12h15</option>
                <option value="12h30">12h30</option>
                <option value="12h45">12h45</option>
                <option value="13h00">13h00</option>
                <option value="13h15">13h15</option>
                <option value="13h30">13h30</option>
                <option value="13h45">13h45</option>
                <option value="14h00">14h00</option>
                <option value="14h15">14h15</option>
                <option value="14h30">14h30</option>
                <option value="14h45">14h45</option>
                <option value="15h00">15h00</option>
                <option value="15h15">15h15</option>
                <option value="15h30">15h30</option>
                <option value="15h45">15h45</option>
                <option value="16h00">16h00</option>
                <option value="16h15">16h15</option>
                <option value="16h30">16h30</option>
                <option value="16h45">16h45</option>
                <option value="17h00">17h00</option>
                <option value="17h15">17h15</option>
                <option value="17h30">17h30</option>
                <option value="17h45">17h45</option>
                <option value="18h00">18h00</option>
                <option value="18h15">18h15</option>
                <option value="18h30">18h30</option>
                <option value="18h45">18h45</option>
                <option value="19h00">19h00</option>
                <option value="19h15">19h15</option>
                <option value="19h30">19h30</option>
                <option value="19h45">19h45</option>
                <option value="20h00">20h00</option>
                <option value="20h15">20h15</option>
                <option value="20h30">20h30</option>
                <option value="20h45">20h45</option>
                <option value="21h00">21h00</option>
                <option value="21h15">21h15</option>
                <option value="21h30">21h30</option>
                <option value="21h45">21h45</option>
                <option value="22h00">22h00</option>
                <option value="22h15">22h15</option>
                <option value="22h30">22h30</option>
                <option value="22h45">22h45</option>
                <option value="23h00">23h00</option>
                <option value="23h15">23h15</option>
                <option value="23h30">23h30</option>
              </select>
            </div>
            <div class="col-sm-3" align="center">
              <select class="col-sm-12" id="personnes_select" v-model="editingReservation.personnes">
                <option value="" disabled selected>Nombre de personnes</option>
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes</option>
                <option value="6">6 personnes</option>
              </select>
            </div>
            <div class="col-sm-3" align="center">
              <button class="col-sm-12" type="submit" id="reserver" >Reservez</button>
            </div>
          </div>

        </form>

      </div>

    </div>
  </div>

</template>

<script>
  module.exports = {
    components: {

    },
    props: {
      admin: {type: Object},
      user: {type: Object},
      reservations: {type: Array}
    },
    data () {
      return {
        editingReservation: {
          date: '',
          heure: '',
          personnes: ''
        }
      }
    },
    methods: {
      // Envoi la valeur des champs du formulaire pour enregistrer une réservation
      // (si les champ sont modifié)
      reserver () {
        var date = this.editingReservation.date
        var heure = this.editingReservation.heure
        var personnes = this.editingReservation.personnes
        if (date && heure && personnes) {
          this.$emit('reserver', this.editingReservation)
        } else {
          asAlertMsg({
            type: "warning",
            title: "Attention",
            message: "Veuillez remplir les champs de votre réservation",
            timer: 2000,
          })
        }
      }
    }
  }
</script>

<style scoped>

  #titre_page {
    text-align: center;
  }

  #background_reservation #header{
    font-size: 3em;
    color:#891B17;
    padding: 100px 0 30px 0;
  }

  #background_reservation #content {
    height:auto;
    background-color:var(--bleu_o);
    margin: 2% 5% 2% 5%;
    padding: 3%;
    display:flex;
    justify-content:center;
    align-items:center;
    border: black solid 1px;
  }

  #background_reservation {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url("../images/backgrounds/tables.jpeg");
  }

  #background_reservation{
    height: 95%;
  }

  #heure_select, #personnes_select {
    padding: 6px;
    color: var(--text);
    border: solid var(--text2) 2px;
    text-decoration: none;
    background-color: var(--beige);
  }

  [type="date"] {
    background:#fff url('https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png')  97% 50% no-repeat ;
  }

  [type="date"]::-webkit-inner-spin-button {
    display: none;
  }

  [type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  #select_date {
    padding: 5px;
    color: var(--text1);
    border: solid var(--text2) 2px;
    text-decoration: none;
    background-color: var(--beige);
  }

  #reserver {
    border: solid var(--text2) 2px;
    text-decoration: none;
    padding: 5px 15px 5px 15px;
  }

</style>
