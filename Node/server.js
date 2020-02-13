const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
var ur;
var met;
var s;
const server = http.createServer((req, res) => {
    
    ur=req.url;
    console.log(ur);
    met=req.method;
    console.log(met);
    if(req.method=='POST')
    {
        let data=' ';
        req.on('data',(chunk) =>{
            s=chunk.toString();
            console.log(s);

            fs.appendFile('hello.txt',ur+" "+met+" "+s, function (err) 
            {        
                if (err) throw err;
            });

    // if(req.method=='DELETE')

    
        



    // fs.appendFile('hello.txt',met+" ", function (err) 
    // {        
    //    if (err) throw err;
    // });

    // fs.appendFile('hello.txt',s+" ", function (err) 
    // {        
    //    if (err) throw err;
    // });

    });
}
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello-World \n');
  
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});