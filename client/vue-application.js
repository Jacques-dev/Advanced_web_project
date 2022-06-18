const Accueil = window.httpVueLoader('./components/Accueil.vue')
const Menus = window.httpVueLoader('./components/Menus.vue')
const Commander = window.httpVueLoader('./components/Commander.vue')
const Connexion = window.httpVueLoader('./components/Connexion.vue')
const Deconnexion = window.httpVueLoader('./components/Deconnexion.vue')
const Reserver = window.httpVueLoader('./components/Reservation.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Administration = window.httpVueLoader('./components/Administration.vue')
const Statistiques = window.httpVueLoader('./components/Statistiques.vue')
const Success_paiement = window.httpVueLoader('./components/Success_paiement.vue')
const Error_paiement = window.httpVueLoader('./components/Error_paiement.vue')

const routes = [
  { path: '/', component: Accueil},
  { path: '/menus', component: Menus},
  { path: '/commander', component: Commander},
  { path: '/connexion', component: Connexion},
  { path: '/deconnexion', component: Deconnexion},
  { path: '/profil', component: Profil},
  { path: '/administration', component: Administration},
  { path: '/statistiques', component: Statistiques},
  { path: '/reserver', component: Reserver},
  { path: '/success', component: Success_paiement},
  { path: '/error', component: Error_paiement}
]

const router = new VueRouter({
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    menus: [],
    panier: {
      createdAt: null,
      updatedAt: null,
      nb_menus: 0,
      prix: 0,
      menus: []
    },
    user: {
      id: null,
      nom: null,
      prenom: null,
      email: null,
      telephone: null,
      reservations: [],
      commands: []
    },
    admin: {
      id: null,
      users: [],
      commands: []
    },
    menusTypes: ['soups', 'dumplings', 'noodles', 'sashimi', 'nigiri']
  },
  async mounted () {
    const res = await axios.get('/api/menus')
    this.menus = res.data
    const res2 = await axios.get('/api/panier')
    this.panier = res2.data

    await axios.post('/api/setdatas', 'menusTypes=' + this.menusTypes)

    const res3 = await axios.get('/api/me')
    this.admin = res3.data.admin
    this.user = res3.data.user
  },
  methods: {
    // Permet de s'enregistrer
    async register (user) {
      try {
        await axios.post('/api/register/','nom=' + user.nom + '&email=' + user.email + '&password=' + user.password +  '&prenom=' + user.prenom + '&telephone=' + user.telephone)
        router.push('/connexion')
      } catch (e) {
        new Notify({
          status: "warning",
          title: "Attention",
          text: "Cette adresse mail existe déjà",
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
      }
    },
    // Permet de se connecter en tant que client
    async login (user) {
      try {
        await axios.post('/api/login/','email=' + user.email + '&password=' + user.password)

        const res = await axios.get('/api/me')
        this.admin = res.data.admin
        this.user = res.data.user
        new Notify({
          status: "success",
          title: "Validé",
          text: "Votre êtes connecté",
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
        router.push('/')
      } catch (e) {
        new Notify({
          status: "warning",
          title: "Attention",
          text: "Votre êtes connecté",
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
      }
    },
    // Permet de se connecter en tant qu'admin
    async adminLogin (admin) {
      await axios.post('/api/adminlogin/','id=' + admin.email + '&password=' + admin.password)

      const res = await axios.get('/api/me')
      this.admin = res.data.admin

      new Notify({
        status: "success",
        title: "Validé",
        text: "Votre êtes connecté en admin",
        autoclose: true,
        autotimeout: 2000,
        position: "center"
      })
      router.push('/')
    },
    // Permet de se déconnecter
    async logout () {
      const res = await axios.post('/api/logout/')
      this.admin.id = res.data.admin
      this.admin.users = []
      this.admin.commands = []
      this.user.nom = res.data.nom
      this.user.email = res.data.email
      this.user.prenom = res.data.prenom
      this.user.telephone = res.data.telephone
      this.user.id = res.data.user
      this.panier = res.data.panier
      this.user.reservations = []
      this.user.commands = []
      
      router.push('/')
    },
    // Permet de modifier un profil
    async updateProfile (newUser) {
      await axios.put('/api/profile/', 'nom=' + newUser.nom + '&prenom=' + newUser.prenom + '&email=' + newUser.email + '&telephone=' + newUser.telephone)
      const res = await axios.get('/api/me')
      this.user.nom = res.data.user.nom
      this.user.email = res.data.user.email
      this.user.prenom = res.data.user.prenom
      this.user.telephone = res.data.user.telephone
      new Notify({
        status: "success",
        title: "Validé",
        text: "Votre profil à été modifié",
        autoclose: true,
        autotimeout: 2000
      })
    },
    // Permet d'enregistrer une réservation
    async reserver (reservation) {
      if (this.user.id) {
        const res = await axios.post('/api/reservation','date=' + reservation.date + '&heure=' + reservation.heure + '&personnes=' + reservation.personnes)
        this.user.reservations.push(res.data)
        new Notify({
          status: "success",
          title: "Validé",
          text: "Votre réservation a été prise en compte M./Mme. " + this.user.nom,
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
        router.push('/')
      } else {
        new Notify({
          status: "warning",
          title: "Attention",
          text: "Veuillez vous connecter en client pour passer une commande",
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
        router.push('/connexion')
      }
    },
    // Permet de simuler le passage d'une commande
    async commander (adresse) {
      if (this.user.id) {
        if (this.panier.menus.length != 0) {
          console.log(adresse)
          const res = await axios.post('/api/panier/commander', adresse)
          document.location.href=res.data.location
        } else {
          new Notify({
            status: "warning",
            title: "Attention",
            text: "Votre panier est vide !",
            autoclose: true,
            autotimeout: 2000,
            position: "center"
          })
        }
      } else {
        new Notify({
          status: "warning",
          title: "Attention",
          text: "Veuillez vous connecter pour passer une commande",
          autoclose: true,
          autotimeout: 2000,
          position: "center"
        })
        router.push('/connexion')
      }
    },
    async successPayment (content) {
      const res = await axios.post('/api/success', content)
      this.user.commands.push(res.data)
      this.panier = {
        createdAt: null,
        updatedAt: null,
        nb_menus: 0,
        prix: 0,
        menus: []
      }
      new Notify({
        status: "success",
        title: "Validé",
        text: "Votre commande a été prise en compte M./Mme. " + this.user.nom,
        autoclose: true,
        autotimeout: 2000,
        position: "center"
      })
      router.push('/')
    },
    // Permet d'ajouter un menu au panier
    async addToPanier (menu) {
      for (let i = 0; i != this.menusTypes.length; i++) {
        if (menu.type == this.menusTypes[i]) {
          const res = await axios.post('/api/panier','id=' + menu.id + '&type=' + menu.type + '&quantity=1' + '&prix=' + menu.prix + '&image=' + menu.image + '&name=' + menu.name)
          this.panier.menus.push(res.data)

          this.panier.nb_menus = this.panier.nb_menus + 1
          this.panier.prix = this.panier.prix + res.data.prix
        }
      }
    },
    // Permet de supprimer un menu du panier
    async removeFromPanier (menu) {
      for (let i = 0; i != this.menusTypes.length; i++) {
        if (menu.type == this.menusTypes[i]) {
          const indexMenu = await axios.delete('/api/panier/' + menu.type + '/' + menu.id)
          this.panier.menus.splice(indexMenu.data, 1)
        }
      }

      var prix = 0
      var nb = 0

      for (let i = 0; i != this.panier.menus.length; i++) {
        prix += this.panier.menus[i].prix * this.panier.menus[i].quantity
        nb += parseInt(this.panier.menus[i].quantity)
      }
      this.panier.prix = prix
      this.panier.nb_menus = nb
    },
    // Permet de modifier la quantité d'un menu dans le panier
    async updateMenuFromPanier (newMenu) {
      for (let i = 0; i != this.menusTypes.length; i++) {
        if (newMenu.type == this.menusTypes[i]) {

          await axios.put('/api/panier/' + newMenu.type + '/' + newMenu.id + '/' + newMenu.quantity)

          for (let i = 0; i != this.panier.menus.length; i++) {
            if (this.panier.menus[i].type == newMenu.type) {
              if (this.panier.menus[i].id == newMenu.id) {
                this.panier.menus[i].quantity = newMenu.quantity
              }
            }
          }

          console.log(this.panier.menus)


        }
      }

      var prix = 0
      var nb = 0

      for (let i = 0; i != this.panier.menus.length; i++) {
        prix += this.panier.menus[i].prix * this.panier.menus[i].quantity
        nb += parseInt(this.panier.menus[i].quantity)
      }
      this.panier.prix = prix
      this.panier.nb_menus = nb
    },
    // Permet d'ajouter un menu à la liste des menus du sites
    async addMenu (menu) {
      const res = await axios.post('/api/menu', menu)

      for (let i = 0; i != this.menusTypes.length; i++) {
        if (res.data.type == this.menusTypes[i]) {
          this.menus[i].push(res.data)
        }
      }
    },
    // Permet de supprimer un menu depuis la liste des menus du site
    async deleteMenu (content) {
      await axios.delete('/api/menu/' + content.type + '/' + content.id)
      for (let i = 0; i != this.menusTypes.length; i++) {
        if (content.type == this.menusTypes[i]) {
          const index = this.menus[i].findIndex(a => a.id === content.id)
          this.menus[i].splice(index, 1)
        }
      }
    },
    // Permet de modifier un des menus du site
    async updateMenu (newMenu) {
      await axios.put('/api/menu/' + newMenu.type + '/' +  newMenu.id, newMenu)
      for (let i = 0; i != this.menusTypes.length; i++) {
        if (newMenu.type == this.menusTypes[i]) {
          const menu = this.menus[i].find(a => a.id === newMenu.id)
          menu.name = newMenu.name
          menu.description = newMenu.description
          menu.image = newMenu.image
          menu.price = newMenu.price
        }
      }
    },
    // Permet de supprimer un utilisateur depuis la liste des utilisateurs sur la vue admin
    async deleteUser (content) {
      await axios.post('/api/user/', "id=" + content.id)
      const index = this.admin.users.findIndex(a => a.id === content.id)
      this.admin.users.splice(index, 1)
    },
    // Permet de modifier un des utilisateurs du site
    async updateUser (newUser) {
      console.log(newUser)
      const res = await axios.put('/api/user', newUser)
      const user = this.admin.users.find(a => a.id === newUser.id)
      user.nom = newUser.nom
      user.prenom = newUser.prenom
      user.email = newUser.email
      user.telephone = newUser.telephone
    }
  }
})
