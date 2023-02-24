


const fs=require("fs");
const path=require("path");
const dirPath=path.join(__dirname,"DIR");
for( i=0;i<5;i++){

    fs.writeFileSync(`${dirPath}/profile${i}.html`,"hello nilesh")
}

