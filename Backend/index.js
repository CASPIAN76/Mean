const fs=require("fs");
const path=require("path");
const dirpath=path.join(__dirname,"file");
for(let i=0;i<5;i++){
    fs.writeFileSync(`${dirpath}/profile${i}.text`,"hello")
}
