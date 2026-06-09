const http = require("http");
const app = require("./src/config/expressConfig");
const connectDB = require("./src/config/mongoConfig");


const PORT = 5000;
connectDB();
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});