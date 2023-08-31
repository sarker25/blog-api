require("dotenv").config();
const http = require("http");
const app = require("./app");
const { setServers } = require("dns/promises");
const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
