const { faker } = require('@faker-js/faker');


class Address{
    constructor(){
        this.street= faker.location.street();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zip = faker.location.zipCode();
        this.country = faker.location.country();

    }
}
//console.log(new Address());


class Empresa {
    constructor() {
      this._id = faker.string.uuid();
      this.name = faker.company.name();
      this.address = new Address();
    }
  }
      
  //console.log(new Empresa());
  /*
   * La salida en consola de la línea anterior tendrá el siguiente aspecto
   * {
   *   name: 'Anime Figure',
   *   price: '$568.00
   *   department: 'Tools' 
   * }
   */
  module.exports = Empresa