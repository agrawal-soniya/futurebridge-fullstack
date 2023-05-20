const express = require("express");
const app = express(); 
//const router = require('express').Router;
const userInfo = require("./userInfo");


app.get("/", (req, res, next) => {
    res.status(200).send(userInfo);
})

app.post("/create", (req, res, next) => {
    const data = req.body;
    data.userId = Math.random();
    userInfo.push(data);
    res.status(200).send("success");
});

app.put("/update", (req, res, next) => {
    const data = req.body;
    const dataToUpdate = userInfo.filter(() => {userId === data.userId});
    dataToUpdate = data;
    // data.userId = Math.random();
    // userInfo.push(data);
    res.status(200).send("success");
});

app.delete("/delete", (req, res, next) => {
    const data = req.userId;
    const dataToUpdate = userInfo.filter(() => {userId === data.userId});
    //delete dataToUpdate;
    // data.userId = Math.random();
    //  userInfo.de(data);
    res.status(200).send("success");
});

module.exports = app;