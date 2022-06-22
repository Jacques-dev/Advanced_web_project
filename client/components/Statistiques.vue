<template>
  <div class="container-fluid" id="background">
    <div class="row">
      <div id="commands" class="col-lg-6">
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
      <div id="stats">
        <!-- <button @click="convertJsonToHtmlTable(admin.commands)">Afficher le détail des commandes</button>
        <table id="display_json_data" border="1"></table>  -->
        Chiffre d'affaires : {{count(admin.commands)}} €  <br> 
        Nombre de commandes : {{ admin.commands.length }} <br> 
        Nombre de clients : {{count_clients(admin.commands)}}  <br> 
        Panier moyen : {{count(admin.commands) / admin.commands.length }} € <br> 
        Commande la plus chère : {{commande_max(admin.commands)}} €
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
            variable: "hello world"
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

//  constructTable(selector) {
             
//             // Getting the all column names
//             var cols = Headers(list, selector); 
  
//             // Traversing the JSON data
//             for (var i = 0; i < list.length; i++) {
//                 var row = $('<tr/>');  
//                 for (var colIndex = 0; colIndex < cols.length; colIndex++)
//                 {
//                     var val = list[i][cols[colIndex]];
                     
//                     // If there is any key, which is matching
//                     // with the column name
//                     if (val == null) val = ""; 
//                         row.append($('<td/>').html(val));
//                 }
                 
//                 // Adding each row to the table
//                 $(selector).append(row);
//             }
//         },

//  Headers(list, selector) {
//             var columns = [];
//             var header = $('<tr/>');
             
//             for (var i = 0; i < list.length; i++) {
//                 var row = list[i];
                 
//                 for (var k in row) {
//                     if ($.inArray(k, columns) == -1) {
//                         columns.push(k);
                         
//                         // Creating the header
//                         header.append($('<th/>').html(k));
//                     }
//                 }
//             }
             
//             // Appending the header to the table
//             $(selector).append(header);
//                 return columns;
//         }   ,
        
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
    
        
  //   components: {
  //       apexchart: VueApexCharts,
  //   },
  //       data: {
  //         series: [44, 55, 13, 43, 22],
  //         chartOptions: {
  //           chart: {
  //             width: 380,
  //             type: 'pie',
  //           },
  //           labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  //           responsive: [{
  //             breakpoint: 480,
  //             options: {
  //               chart: {
  //                 width: 200
  //               },
  //               legend: {
  //                 position: 'bottom'
  //               }
  //             }
  //           }]
  //         },

  //       }
  // }

  





// var list = admin.commands

// var c = admin.commands
//     totalPrice = c.reduce(function (sum, p) { return sum + p.amount; }, 0);

// var list = admin.commands






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

</style>