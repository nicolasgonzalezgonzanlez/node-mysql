const TABLE = 'user';
const { nanoid } = require('nanoid');
const auth = require('../auth');

const add = async (data, injectedStore) => {
  let response = {
    id: data.id || nanoid()
  }
  console.log(data)
  if (Object.keys(data).length === 0) return 'data is not defined'
  else {
    if (!data.name) return 'name is missing'
    else response.name = data.name
    if (!data.userName) return 'username is missing'
    else response.userName = data.userName
    if (data.password) {
      await auth.add({
        id: response.id,
        userName: data.userName,
        password: data.password
      })
    }
    return injectedStore.add(TABLE, response)
  }
}


module.exports = (injectedStore = require('../../../store/dummy')) => {
  return {
    list: () => injectedStore.list(TABLE),
    get: (id) => injectedStore.get(TABLE, id),
    remove: (id) => injectedStore.remove(TABLE, id),
    add: (data) => add(data, injectedStore)
  }
}