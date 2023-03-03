
const { Pool, Client } = require("pg");

const credentials = {
  user: "root",
  host: "localhost",
  database: "vignesh",
  password: "Vignesh@2858",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("select * from demo");
  await pool.end();
  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();
  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0].id,poolResult.rows[0].name);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();