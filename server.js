let http = require('http');
let fun = require('./app');
let server = http.createServer(fun);
server.listen(3000, ()=>{
    console.log("fatema run ......");
})