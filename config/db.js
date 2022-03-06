const mysql = require('mysql2/promise');

let pool;

export function connect() {
  if(pool) return pool;

  const config = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  };

  pool = mysql.createPool(config);

  return pool;
}

// export const connection = mysql.createPool({
//   host     : process.env.DB_HOST,
//   user     : process.env.DB_USER,
//   password : process.env.DB_PASSWORD,
//   database : process.env.DB_DATABASE
// });