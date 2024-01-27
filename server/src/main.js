const net = require("net");

const server = net.createServer();

server.listen({
    host: "localhost",
    port: 8564,
});

server.on("connection", (client) => {
    console.log("Client Connected " client);
});