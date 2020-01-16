const db = require('../../db/index.js');

module.exports = {
  artWorks: {
    add: (artWork) => {
      // db.Artwork.create(
      // {
      //   title: 'Les Joueurs de Cartes',
      //   author: 'Paul Cezanne',
      //   description: 'The painting depicts Provençal peasants immersed in their pipes and playing cards. The subjects, all male, are displayed as studious within their card playing, eyes cast downward, intent on the game at hand.',
      //   classification: 'Painting',
      //   technique: 'Oil on canvas',
      //   height: 47.5,
      //   width: 57,
      //   image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Paul_C%C3%A9zanne%2C_1892-95%2C_Les_joueurs_de_carte_%28The_Card_Players%29%2C_60_x_73_cm%2C_oil_on_canvas%2C_Courtauld_Institute_of_Art%2C_London.jpg',
      //   basePrice: 200,
      //   highestBid: null,
      //   expirationDate: 2022-12-01
      // }, e => {
      //   if (e) {
      //     console.error
      //   } else {
      //     console.log('Created!')
      //   }
      // })
    }
  }
}