const http = require("http");
const app = require("./src/expressConfig");

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});