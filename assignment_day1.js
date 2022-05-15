const http = require("http")
const fs = require('fs')
let filesList=""

const path = __dirname
const server= http.createServer(  (req,res)=>{
    if(req.url=="/createFile"){
         fs.appendFileSync('timeStamp.txt',("URL Visited At :"+ Date().toString() +'\n' ))
         res.write("Time stamp has been appended to the timestamps file")
    }
    else if(req.url=='/readFiles'){

        files=fs.readdirSync(path)
        files.forEach((f)=>{
            (f.split('.')[(f.split('.')).length-1]=="txt")?filesList+=`${f} `:""
        })
    res.write("Total text files in the current folder:  "+filesList)
    }
    res.end()
})


server.listen(3000)