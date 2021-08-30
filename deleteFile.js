
const { unlink } = require("fs");


unlink('./source/helloworld.txt', (err) => {
    if(err){
        console.log(err);
    }
})