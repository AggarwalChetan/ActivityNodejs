const path = require("path");
let fs = require('fs');

function fun(props){
    let dirName = path.basename(props);
    let res = `└──${dirName} \n`;

    let content = fs.readdirSync(props);
    for(let i = 0; i < content.length - 1; ++ i){
        res += "\t├──" + content[i] + "\n";
    }

    res += "\t└──" + content[content.length - 1] + "\n";
    console.log(res);
}

module.exports = {
    fun : fun
}