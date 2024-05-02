var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n published at 5/1/2024');
}).listen(6060,'0.0.0.0');
console.log(`Now listening on port 6060`);
