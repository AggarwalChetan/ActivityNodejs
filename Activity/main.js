let treeObj = require('./commands/tree');
let organizeObj = require('./commands/organize');
let helpObj = require('./commands/help');

let inputArr = process.argv.slice(2);
let fileName = inputArr[0];
let path = inputArr[1];

switch(fileName){
    case "tree":
        treeObj.fun(path);
        break;
    case "organize":
        organizeObj.fun(path);
        break;
    case "help":
        helpObj.fn(path);
        break;
    default:
        console.log("Please try again");
}