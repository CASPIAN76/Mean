const fs= require('fs');

const  file= process.argv;

if(file[2]==="add"){
    fs.writeFileSync(file[3],file[4])

    }else if(file[2]==="remove"){
        fs.unlinkSync(file[3])
    }
    else{
        console.log("invalid format")
    }
