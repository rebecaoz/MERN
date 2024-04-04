// CJS
const { faker } = require('@faker-js/faker');

class User {
    constructor() {
      this._id = faker.string.uuid();
      this.firstName = faker.person.firstName();
      this.lastName = faker.person.lastName();
      this.phone =  faker.phone.number();
      this.email= faker.internet.email(),
      this.password= faker.internet.password()
    }
  }
      
  console.log(new User());
  /*
   * 
   */

  module.exports = User