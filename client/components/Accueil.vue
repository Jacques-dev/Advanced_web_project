<template>

  <div>

    <ul id="slider">
      <li><router-link to="/#first" title="Next Section"><img src="https://ianlunn.co.uk/plugins/jquery-parallax/images/dot.png" alt="Link" /></router-link></li>
      <li><router-link to="/#second" title="Next Section"><img src="https://ianlunn.co.uk/plugins/jquery-parallax/images/dot.png" alt="Link" /></router-link></li>
      <li><router-link to="/#third" title="Next Section"><img src="https://ianlunn.co.uk/plugins/jquery-parallax/images/dot.png" alt="Link" /></router-link></li>
      <li><router-link to="/#four" title="Next Section"><img src="https://ianlunn.co.uk/plugins/jquery-parallax/images/dot.png" alt="Link" /></router-link></li>
    </ul>

    <section id="first" class="container-fluid parallax">
      <section class="row h-75 justify-content-center align-items-center">
        <article class="h-100" id="titre_page">
          <p>Saveur d'Asie</p>
        </article>
      </section>
      <section class="row h-60 align-items-center" id="first_bordereau">
        <article class=" test col-sm-4 d-flex justify-content-center">
          <p class="titre_soupes_nouilles_dumplings">SOUPES</p>
          <p class ="description_soupes_nouilles_dumplings">Decouvrez nos delicieuses soupes</p>
          <img src="https://static.wixstatic.com/media/a84435_89b11410bc6b4875996a2f75ba5952af.png/v1/fill/w_302,h_375,al_c,q_85,usm_0.66_1.00_0.01/a84435_89b11410bc6b4875996a2f75ba5952af.webp">
        </article>
        <article class="test col-sm-4 d-flex justify-content-center">
          <p class="titre_soupes_nouilles_dumplings">NOUILLES</p>
          <p class ="description_soupes_nouilles_dumplings">Decouvrez nos noodles faites maison</p>
          <img src="https://static.wixstatic.com/media/a84435_2094235a23f7450d868fb875a24df909.png/v1/fill/w_305,h_378,al_c,q_85,usm_0.66_1.00_0.01/a84435_2094235a23f7450d868fb875a24df909.webp">
        </article>
        <article class="test col-sm-4 d-flex justify-content-center">
          <p class="titre_soupes_nouilles_dumplings">DUMPLINGS</p>
          <p class ="description_soupes_nouilles_dumplings">Savourez nos dumplings</p>
          <img src="https://static.wixstatic.com/media/a84435_4a1b27357f47440490e1d36e28015ee1.png/v1/fill/w_303,h_376,al_c,q_85,usm_0.66_1.00_0.01/a84435_4a1b27357f47440490e1d36e28015ee1.webp%22%3E">
        </article>
        <article class="col-sm-12 d-flex justify-content-center">
          <router-link id="bouton_vers_menu" class="btn" to='/menus/#titre_page'>Voir l'ensemble du menu</router-link>
        </article>
      </section>
    </section>

    <div id="second" class="container-fluid parallax">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-sm-8">

        </div>
        <div id="text_second" class="col-sm-4">
          <h2>Notre histoire commence au pays des dragons</h2><br>
          <p>Sur les côtes de la mer de Chine naît en 1951 Fang's Noodles. Attaché aux valeurs de la cuisine traditionnelle chinoise Fang's Noodles s'est rapidement imposé comme le leader de la restauration authentique asiatique.</p>
        </div>
      </div>
    </div>

    <div id="third" class="container-fluid">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-sm-1">

        </div>
        <div id="proverbe_third" class="col-sm-3">
          <p>"Lorsque tu bois l'eau, <strong>souviens-toi de la source</strong>"<p>
          <p>~Proverbe Chinois~</p>
        </div>
        <div class="col-sm-8">

        </div>
      </div>
    </div>

    <div id="four" class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <iframe id="map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2628.643756118497!2d2.3632821399505612!3d48.78869100874682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673e24e04a9c3%3A0xc55cb3e676f95321!2sEfrei%20Paris!5e0!3m2!1sfr!2sfr!4v1609373292561!5m2!1sfr!2sfr"></iframe>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

</script>

<style scoped>

  #first {
    background-image: url("../images/backgrounds/accueil_1.webp");
    height: auto !important;
    color: var(--text2);
  }

  #first .titre_soupes_nouilles_dumplings {
    padding-top: 10%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 1.4em;
    letter-spacing: 3px;
    position: absolute;
  }

  #first .description_soupes_nouilles_dumplings {
    padding-top: 19%;
    text-align:center;
    width: 40%;
    position: absolute;
  }

  #first #titre_page {
    font-size: 3em;
  }

  #first #first_bordereau {
    background-color: var(--beige_o);
    border-top: 1px solid var(--rouge);

  }
  #first #first_bordereau img {
    padding: 20px 0 0 0;
  }

  #first #first_bordereau img {
    width: 50%;
    height: 100%;
  }

  #bouton_vers_menu {
    margin: 20px 10;
    font-size: 1.3em;
    width: 400px;
    color: var(--text2);
    border-radius: 5px;
    padding: 7px 20px;
    font-weight: 500;
    background: var(--rouge);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
  }

  #second {
    background-image: url("../images/backgrounds/accueil_2.webp");
  }

  #second .col-sm-5 {
    word-wrap:break-word;
  }


  #text_second {
    padding: 0 75px 0 30px;

  }
  #text_second p {
    font-size: 1.4em;
  }
  #text_second h2 {
    font-size: 1.9em;
  }

  #third {
    background-image: url("../images/backgrounds/accueil_3.webp");
    width: 100%;
    height: 100vh;
    margin: 0;
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #proverbe_third {

    font-size: 1.8em;
  }

  #four {
    background-color: #A42321;
    padding-bottom: 20px;
  }

  #map {
    width: 100%;
    height: 300px;
    border: solid 1px black;
  }

  #slider {
    z-index: 4;
    list-style: none;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }

  #slider img {
    border: 1px var(--text) solid;
    background-color: var(--text);
    border-radius: 50%;
  }
  #slider img:hover {
    border: 1px var(--bleu) solid;
    background-color: var(--bleu);
    border-radius: 50%;
  }

  .parallax {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }


  @media only screen and (max-device-width: 1366px) {
    #first #first_bordereau {
      height: auto !important;
    }

    .titre_soupes_nouilles_dumplings, .description_soupes_nouilles_dumplings, #first #first_bordereau img {
      display: none !important;
    }
    #bouton_vers_menu {
      width:100vw;
    }

    .parallax {
      background-attachment: scroll;
    }
  }

   #second, #third .row {
    border-top: solid 1px var(--rouge);
    color: var(--text2);
  }

</style>
