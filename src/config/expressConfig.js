const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.json({
        message: "Hello World"
    });
});

app.use(express.json());
app.use("/api/users", require("../routers/userRouters"));

module.exports = app