let db = {
  'user': [
    {
      id: '1',
      name: 'Carlos'
    },
    {
      id: '2',
      name: 'Nicolas'
    }
  ]
};

const list = async (table) => {
  return db[table]
}
async function get(table, id) {
  let collection = await list(table)
  return collection.filter(item => item.id === id)[0] || null
}

const add = async (table, data) => {
  if (!table) return 'Table is not defined'
  if (!data) return 'Data is not defined'
  else {
    if (!data.name) return 'fields are missing'
    if (!data.userName) return 'fields are missing'
    if (!data.password) return 'fields are missing'
    if (!db[table]) db[table] = []
    db[table].push(data)
    return 'user created successful'
  }
}
const remove = async (table, idDelete) => {

  const ref = db[table].findIndex(item => item.id === idDelete)
  if (ref >= 0) db[table].splice(ref, 1)

  console.log(db)

  return `Element is delete`;

}


module.exports = {
  list,
  get,
  add,
  remove
}