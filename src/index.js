require("dotenv").config();
const http = require("http");
const app = require("./app");
const { connectDB } = require("./db/connect");

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

(async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
