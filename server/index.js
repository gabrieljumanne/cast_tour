// const http=require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('hello world');
// });

// server.listen(3000,()=>{
//     console.log("hey server is running");
// })

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.listen(3000,()=>{
    console.log('server started in express');
})


