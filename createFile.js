const { writeFile, readFile } = require("fs");
const { join } = require("path");

const path = join(__dirname, "/source/helloworld.txt");

const data = {
    name: "Samuel",
    age: 19,
    birthday: "Feb. 6th",
}


writeFile(path, "Hello World", (err) => {
    if(err){
        console.log(err)
    }
    console.log("File Added!!")
})