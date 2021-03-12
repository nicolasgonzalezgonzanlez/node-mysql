const TABLE = 'auth';

module.exports = (injectedStore = require('../../../store/dummy')) => {
  return {
    add: async (data) => {
      return injectedStore.add(TABLE, data)
    },
    login: (userName, password) //finish 
  }
}
