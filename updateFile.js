
const {appendFile} = require("fs");

appendFile('./source/helloworld.txt', "\nUpdate to File", (err) => {
    if(err){
        console.log(err)
    }
    console.log("File Updated")
})