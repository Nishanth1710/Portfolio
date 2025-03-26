const http=require('http');
const fs=require('fs');
const path=require('path');
let port=3000
let host='127.0.0.1'
let server=http.createServer((req,res)=>{
    let fp='.'+req.url
    if(fp==='./')
        fp='./index.html';
    const en=path.extname('index.html')
    const contentType='text/html'
    if(en==='.css'){
        contentType='text/css'
    }
    fs.readFile(fp,'utf-8',(error,data)=>{
        if(error){
            console.log('Server error:',error)
        }
        else{
            res.writeHead(200)
            res.end(data)
        }
    })
})
server.listen(port,()=>{
    console.log('Server running at http://localhost:3000')
})