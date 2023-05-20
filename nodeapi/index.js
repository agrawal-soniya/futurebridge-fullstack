const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const movies = require("./movies");
const userRoutes = require("./services/users");
const cors = require("cors");

app.use(cors());
app.get("/movies", (req, res)=> {
    console.log(movies);
    res.status(200).send(movies);
})
app.use(bodyParser());
app.use("/users", userRoutes);

app.listen("4000", ()=> {
    console.log("server has been started at port 4000");
})