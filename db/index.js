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

// write a function that saves to the db
const saveImages = async (title, url, caption) => {
  try {
    await client.query(`INSERT INTO artpics (id, title, url, caption) VALUES (DEFAULT, '${title}', '${url}', '${caption}')`)
    return 'Success';
  }
  catch(error) {
    console.log('Unable to save to db', error);
    return error;
  }
}


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
    saveImages,
    findImages
}
