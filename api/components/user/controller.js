const TABLA = 'user';
const { nanoid } = require('nanoid');
const auth = require('../auth');

const add = async (data) => {
  const response = {
    id: data.id || nanoid()
  }

  if (!data) return 'data is not defined'
  else {
    if (!data.name) return 'fields are missing'
    else response.name = data.name
    if (data.password && data.userName) {
      response.password = data.password
      response.userName = data.userName
      await auth.add(TABLE, response)
        .then((res) => {
          console.log(res)
        })
    }
  }
}


module.exports = (injectedStore = require('../../../store/dummy')) => {
  return {
    list: () => injectedStore.list(TABLA),
    get: (id) => injectedStore.get(TABLA, id),
    remove: (id) => injectedStore.remove(TABLA, id),
    add: add(data)
  }
}