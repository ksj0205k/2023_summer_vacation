const mongoclient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://ksj0205k:rlatjdwo0205@ksj0205k.wdjsa59.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const app = express();

let mydb;
mongoclient
  .connect(url)
  .then((client) => {
    console.log("몽고DB 접속 성공");
     mydb = client.db("myborad");
    // mydb.collection('post').find().toArray().then(result =>{ // 풀스캔 명령어 -> 모든 데이터를 들고올수 있는 명령어 
    //    console.log(result);
    // })

    app.listen(8080, function () {
      console.log("포트 8080으로 서버 대기중 ... ");
    });
  })
  .catch((err) => {
    console.log(err);
  })

  app.get("/list", function ( req, res) {
    mydb
    .collection("post")
    .find()
    .toArray()
    .then((result) => {
      res.send(result)}); // 여기 다시 한번 살펴보기
  })