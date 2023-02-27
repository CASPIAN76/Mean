const  fs= require('fs');
const { dirname } = require('path');

const path=require("path");
const dirPath= path.join(__dirname,"file");
 const filename=`${dirPath}/profile.txt`;


//  fs.writeFileSync(filename," hello Nilesh");

// fs.readFile(filename,(err, mas)=>{
//     console.log(mas)
// })
// fs.readFile(filename, "utf8",(err,msa)=>{
//     console.log(msa)
// });

// fs.appendFile(filename, " hou are u", (err)=>{
//     console.log(err)
// })

fs.rename(filename, `${dirPath}/page.html`, (err)=>{
    console.log(err, "err")
} )