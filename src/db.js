const { Pool } = require('pg')

const pool = new Pool({
    onnectionString: process.env.POSTGRES_URL,
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool