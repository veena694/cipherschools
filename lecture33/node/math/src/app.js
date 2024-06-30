// const http = require("http");

// const server = http.createServer((req, res)=>{
//   res.write("This is some response from your first Node.js server");
//   res.end();
// });

// server.listen(8080,() => {
//  console.log("Server is running");
// });
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  res.send("This is some response from your first Node.js server")
})

app.get("/add", (req, res)=>{
  let{a: firstNumber,b:SecondNumber} = req.query;
  let sum = parseInt(firstNumber) + parseInt(SecondNumber);
  res.send({sum});
}) 

app.listen(8080, ()=>{
  console.log("Sever is running");
})