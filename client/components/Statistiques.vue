<template>
  <div class="container-fluid" id="background">
    <div class="row">

      <div id="commands" class="col-lg-6">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2><u>Historique des commandes</u></h2>
          </div>
        </div>
        <section class="row chaque_commande" v-for="command in admin.commands">
          <section class="col-sm-12 data_commande">
            Date : {{ command.time.split("T")[0] }}
          </section>
          <section class="col-sm-12 data_commande">
            Heure : {{ command.time.split("T")[1].split(".")[0] }}
          </section>
          <section class="col-sm-12 data_commande">
            Prix : {{ command.price }} €
          </section>
          <section class="col-sm-12 data_commande">
            Adresse : {{ command.adresse }}
          </section>
        </section>
      </div>

      <div id="stats" class="col-lg-6">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2><u>Nos chiffres du mois</u></h2>
          </div>
        </div>
        <div class="row detail">
          Chiffre d'affaires : {{count(admin.commands)}} €  <br> 
          Nombre de commandes : {{ admin.commands.length }} <br> 
          Nombre de clients : {{count_clients(admin.commands)}}  <br> 
          Panier moyen : {{ count(admin.commands) / admin.commands.length }} € <br> 
          Commande la plus chère : {{commande_max(admin.commands)}} €
        </div>
        <div class="row detail">
          
        </div>
      </div>

    </div>
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

      }
    },
    methods: {
      count(c) {
        var sum = 0;
        for (var i = 0; i < c.length; i++) {
          sum += +c[i].price; // <=== change is here
        }
        return sum;
      },
        
      convertJsonToHtmlTable(list){
        //Get the headers from JSON data
        var headers = Object.keys(list[0]);

        //Prepare html header
        var headerRowHTML='<tr>';
        for(var i=0;i<headers.length;i++){
          headerRowHTML+='<th>'+headers[i]+'</th>';
        }
        headerRowHTML+='</tr>';

        //Prepare all the employee records as HTML
        var allRecordsHTML='';
        for(var i=0;i<list.length;i++){

          //Prepare html row
          allRecordsHTML+='<tr>';
          for(var j=0;j<headers.length;j++){
            var header=headers[j];
            allRecordsHTML+='<td>'+list[i][header]+'</td>';
          }
          allRecordsHTML+='</tr>';

        }

        //Append the table header and all records
        var table=document.getElementById("display_json_data");
        table.innerHTML=headerRowHTML + allRecordsHTML;
      },

      count_clients(c) {
        var nb_clients = 0;
        var id_precedent = -1;
        for (var i = 0; i < c.length; i++) {
          if (c[i].client != id_precedent) {
              nb_clients += 1;
          }
          id_precedent = c[i].client;
        }
        return nb_clients;
      },

      commande_max(c){
        var max = 0
        for (var i = 0; i < c.length; i++) {
          if (max <  c[i].price) {
            max =  c[i].price 
          }
        }
        return max
      }

    }
  }

</script>

<style>
  #background {
    color:var(--rouge);
    height: 74vh;
  }

  #commands {
    height: 74vh;
    overflow-y: scroll;
  }

  .chaque_commande {
    box-shadow: 3px 3px 3px 3px var(--rouge);
    margin: 12px 0 12px 0;
    padding: 10px 0 10px 0;
  }

  .data_commande {
    margin: 0 0 10px 0;
  }

  #stats {
    margin: 0;
  }

  .detail {
    margin: 0 0 15px 0;
    padding: 0 0 15px 0;
  }

</style>