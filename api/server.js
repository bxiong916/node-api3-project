const express = require("express");

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

const UserRouter = require("./users/userRouter");

server.use(express.json());

server.use("/api/users", UserRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// function logger(req, res, next) {}

module.exports = server;
