//  creating a file in a pirticular folder and add the time stamp to that file 

const sample= require("./sample")
const fs = require('fs')
const http=require('http')
fs.writeFileSync('./sample.txt',`\n${Date()}`,(err)=>{
if(err){
    console.log(err)
}else{
    console.log('file has been saved')
}
})

//  Reading all the txt files in the folder 


const path = __dirname

var filess=fs.readdirSync(__dirname)
filess.forEach((file)=>{
    if(file.split(".")[[(file.split(".")).length-1]]=='txt'){
        console.log(file)
    }
})



// creating a server 

const server= http.createServer((req,res)=>{
console.log("hello world");
if(req.url="/users"){
    res.write(JSON.stringify({a:Date()}))
}
res.end()
})
server.listen(3000)

sample.obj.name()