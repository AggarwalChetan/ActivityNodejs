const path = require("path");
let fs = require('fs');

function fun(props){
    let dirName = path.basename(props);
    let res = `  |__${dirName} \n`;

    let content = fs.readdirSync(props);
    for(let i = 0; i < content.length; ++ i){
        res += "       |-----" + content[i] + "\n";
    }
    console.log(res);
}

module.exports = {
    fun : fun
}