const menus = [

  soups = [
    {
      id: 1,
      name: 'Chicken Noodle Soup',
      description: 'Poulet et nouilles en soupe',
      image: '../images/soups/chicken_noodle.jpg',
      price: 9,
      spicy: false,
      type: 'soups'
    },
    {
      id: 2,
      name: 'Beef Noodle Soup',
      description: 'Bœuf et nouilles en soupe',
      image: '../images/soups/beef_noodle.jpg',
      price: 9,
      spicy: false,
      type: 'soups'
    },
    {
      id: 3,
      name: 'Chicken & Corn Noodle Soup',
      description: 'Poulet, maïs et nouilles en soupe',
      image: '../images/soups/chicken_and_corn_noodle.jpg',
      price: 11,
      spicy: true,
      type: 'soups'
    },
    {
      id: 4,
      name: 'Won Ton Noodle Soup',
      description: 'Ravioli et nouilles en soupe',
      image: '../images/soups/won_ton_noodle.jpg',
      price: 25,
      spicy: true,
      type: 'soups'
    }
  ],
  dumplings = [
    {
      id: 1,
      name: 'Gow Choy Gao',
      description: 'Boulette poêlée composée de ciboulette et de dés de crevettes',
      image: '../images/dumplings/gow_choy_gao.jpg',
      price: 9,
      spicy: false,
      type: 'dumplings'
    },
    {
      id: 2,
      name: 'Siu Mai',
      description: 'Boulettes de porc et crevettes',
      image: '../images/dumplings/siu_mai.jpg',
      price: 9,
      spicy: false,
      type: 'dumplings'
    },
    {
      id: 3,
      name: 'Xiao Long Bao',
      description: 'Gelée soit avec de la peau de porc, soit avec des pattes de poulet et des aromates',
      image: '../images/dumplings/xiao_long_bao.jpg',
      price: 12,
      spicy: false,
      type: 'dumplings'
    },
    {
      id: 4,
      name: 'Jiu Cai Bao',
      description: 'Petits pains taïwanais frits à la poêle, fourrés de poireaux et de crevettes séchées',
      image: '../images/dumplings/jiu_cai_bao.jpg',
      price: 20,
      spicy: false,
      type: 'dumplings'
    }
  ],
  noodles = [
    {
      id: 1,
      name: 'Ramen sautée au porc haché',
      description: 'Ramen sautée au porc haché',
      image: '../images/noodles/ramen_porc_hache.jpg',
      price: 9,
      spicy: true,
      type: 'noodles'
    },
    {
      id: 2,
      name: 'Vermicelles de riz sautées au boeuf',
      description: 'Vermicelles de riz sautés au boeuf',
      image: '../images/noodles/vermicelles_riz_boeuf.jpg',
      price: 9,
      spicy: true,
      type: 'noodles'
    },
    {
      id: 3,
      name: 'Ramen sautée au poulet',
      description: 'Ramen sautée au poulet',
      image: '../images/noodles/ramen_poulet.jpg',
      price: 13,
      spicy: false,
      type: 'noodles'
    },
    {
      id: 4,
      name: 'Ramen sautée aux légumes',
      description: 'Ramen sautée aux légumes',
      image: '../images/noodles/ramen_legumes.jpg',
      price: 18,
      spicy: false,
      type: 'noodles'
    }
  ],
  sashimi = [
    {
      id: 1,
      name: 'Shellfish Sashimi',
      description: 'description',
      image: '../images/sashimi/black.jpg',
      price: 9,
      spicy: false,
      type: 'sashimi'
    },
    {
      id: 2,
      name: 'Katsuo Tataki',
      description: "Thon rose légèrement grillé, puis découpée en tranches. Accompagnée de ciboulette, de gingembre et d'ail",
      image: '../images/sashimi/katsuo_tataki.jpg',
      price: 9,
      spicy: false,
      type: 'sashimi'
    },
    {
      id: 3,
      name: 'Aji',
      description: 'description',
      image: '../images/sashimi/sashimi_aji.jpg',
      price: 25,
      spicy: true,
      type: 'sashimi'
    },
    {
      id: 4,
      name: 'Hirame',
      description: 'Texture légèrement croquante et moelleuse, ce qui fait ressortir la douceur du poisson à chaque bouchée.',
      image: '../images/sashimi/black.jpg',
      price: 9,
      spicy: false,
      type: 'sashimi'
    },
    {
      id: 5,
      name: 'Albacore Tataki',
      description: 'Un morceau assez épais, mariné et pané aux graines de sésame puis cuit à feu vif, très rapidement, sur les deux faces.',
      image: '../images/sashimi/black.jpg',
      price: 9,
      spicy: false,
      type: 'sashimi'
    }
  ],
  nigiri =[
    {
      id: 1,
      name: 'Maguro',
      description: 'Poisson frais ou fruit de mer tranché et délicatement placé sur du riz vinaigré. Une combinaison de texture et saveurs rafraichissantes servie en 2 morceaux.',
      image: '../images/nigiri/black.jpg',
      price: 9,
      spicy: false,
      type: 'nigiri'
    },
    {
      id: 2,
      name: 'Hamachi',
      description: 'Le chef utilise un chalumeau pour carboniser légèrement le poisson et lui donner un merveilleux goût fumé et une texture délicate et feuilletée.',
      image: '../images/nigiri/black.jpg',
      price: 9,
      spicy: false,
      type: 'nigiri'
    },
    {
      id: 3,
      name: 'Saba',
      description: 'Fait à base de Maquereau',
      image: '../images/nigiri/black.jpg',
      price: 11,
      spicy: true,
      type: 'nigiri'
    },
    {
      id: 4,
      name: 'Hirame',
      description: "L'Hirame d'été a tendance à être plus gras et plus mou, l'antithèse de la saveur légère et propre et de la texture ferme de l'Hirame d'hiver.",
      image: '../images/nigiri/black.jpg',
      price: 25,
      spicy: true,
      type: 'nigiri'
    },
    {
      id: 5,
      name: 'Sunazuri',
      description: 'description',
      image: '../images/nigiri/black.jpg',
      price: 9,
      spicy: false,
      type: 'nigiri'
    },
    {
      id: 6,
      name: 'Sake',
      description: 'description',
      image: '../images/nigiri/black.jpg',
      price: 9,
      spicy: false,
      type: 'nigiri'
    },
    {
      id: 7,
      name: 'Hotate',
      description: 'description',
      image: '../images/nigiri/black.jpg',
      price: 11,
      spicy: true,
      type: 'nigiri'
    },
    {
      id: 8,
      name: 'Ebi',
      description: 'description',
      image: '../images/nigiri/black.jpg',
      price: 25,
      spicy: true,
      type: 'nigiri'
    }
  ]
]


module.exports = menus
