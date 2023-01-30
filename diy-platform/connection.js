const { Pool} = require('pg')
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diy-platform',
  password: '=-0=-0',
  port: 5432,
  idleTimeoutMillis: 100
})
 
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

module.exports = pool;