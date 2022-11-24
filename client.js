const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
   host: IP,
   port: PORT
  }); 
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });

  conn.on("connect", () => {
    conn.write("Name: SK")
  });

  conn.on("data", (data) => {
    console.log(data)
  });
  // interprest incoming data as text
  conn.setEncoding("utf8");

  return conn;

};

module.exports = {
  connect
}