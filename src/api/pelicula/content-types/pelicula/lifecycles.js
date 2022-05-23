const slugify = require('slugify');

module.exports = {
    async beforeCreate(pelicula) {
      if (pelicula.params.data.titulo) {
        pelicula.params.data.enlaceUrl = slugify(pelicula.params.data.titulo, {lower: true});
      }
    },
    async beforeUpdate(pelicula) {
      if (pelicula.params.data.titulo) {
        pelicula.params.data.enlaceUrl = slugify(pelicula.params.data.titulo, {lower: true});
      }
    },
};