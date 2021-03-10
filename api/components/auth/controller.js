const TABLE = 'auth';

module.exports = (injectedStore = require('../../../store/dummy')) => {
  return {
    add: async (table, data) => {
      let response = {
        id: data.id
      }
      if (!data) return 'Data is not defined'
      else {
        if (!data.userName) return 'fields are missing'
        else response.userName = data.userName
        if (!data.password) return 'fields are missing'
        else response.password = data.password
        return injectedStore.add(TABLE, response)
      }
    }
  }
}
