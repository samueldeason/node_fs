
const { readFile } = require("fs");

readFile('./source/helloworld.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})