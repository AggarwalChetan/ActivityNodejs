const path = require("path");
let fs = require('fs');

function fun2(props) {
    let dirName = path.basename(props);
    let res = `└──${dirName} \n`;

    let content = fs.readdirSync(props);
    for (let i = 0; i < content.length - 1; ++i) {
        res += "\t├──" + content[i] + "\n";
    }

    res += "\t└──" + content[content.length - 1] + "\n";
    console.log(res);
}

function fun(props) {
    fun2(props);
    let totalContent = fs.readdirSync(props);
    for(let i = 0; i < totalContent.length; ++ i){
        let content = fs.lstatSync(path.join(props, totalContent[i]));
        if(content.isDirectory()){
            fun2(path.join(props, totalContent[i]));
        }
    }
}

module.exports = {
    fun: fun
}