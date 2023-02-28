const http = require('http')
const server = http.createServer((req,res)=>{
 if(req.url == '/')
    res.end(' hii this is my first node server ');
 else if ( req.url === "/download")
     res.end(' this is downloads page') 
       
 else 
    console.log(' 404 page error ');
})
.listen(3000,()=>{ console.log(" port active on port : 3000");}) 