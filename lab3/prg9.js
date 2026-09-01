import http from 'http';

const server = http.createServer((req,res)=>{
    res.end("<h1>Hello client<?h1>");
});

server.listen(3000,() => console.log("prg9"));