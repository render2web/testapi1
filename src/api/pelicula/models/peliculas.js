const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.titulo) {
        data.enlaceUrl = slugify(data.titulo, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.titulo) {
        data.enlaceUrl = slugify(data.titulo, {lower: true});
      }
    },
  },  
};