const { Client } = require('pg')

const client = new Client({
  user: 'daphnedang',
  host: 'localhost',
  database: 'images',
  password: '',
  port: 5432
})
client.connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack))

const findImages = async () => {
  const result = await client.query('SELECT * FROM artpics')
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log('Error getting artpics')
    throw err;
  })
  return result;
}

module.exports = {
    findImages
}
