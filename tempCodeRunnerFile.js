const http = require('node:http');
// const url = require('node:url');
const r = require('./src/routers/router.js')

let server = http.createServer((req,res)=>{
    
    r.router(req,res);
})

const port = 8080;
const host = 'localhost';

server.listen(port , host , ()=>{
  console.log(`server is on http://${host}:${port}`);
  
})