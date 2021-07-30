let fs = require('fs');
const path = require('path');

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz", "json"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'PNG', "deb"]
}

function fn(props){
    let folderPath = props;
    let dirContent = fs.readdirSync(folderPath);
    let organizeDirPath = path.join(folderPath, "organized_files")
    let mediaPath = path.join(organizeDirPath, "media");
    let archivesPath = path.join(organizeDirPath, "archives");
    let documentsPath = path.join(organizeDirPath, "documents");
    let appPath = path.join(organizeDirPath, "app");
    let others = path.join(organizeDirPath, "Others");

    fs.mkdirSync(organizeDirPath);
    fs.mkdirSync(mediaPath);
    fs.mkdirSync(archivesPath);
    fs.mkdirSync(documentsPath);
    fs.mkdirSync(appPath);
    fs.mkdirSync(others);

    for(let i = 0; i < dirContent.length; ++ i){
        let content = dirContent[i];
        let extension = content.split('.')[1];
        
        if(extension == undefined){
            continue;
        }

        let srcFilePath = path.join(folderPath, dirContent[i]);
        let type = "";

        for(let key in types){
            for(let j = 0; j < types[key].length; ++ j){
                if(types[key][j] == extension){
                    type = key;
                    break;
                }
            }
        }

        switch(type){
            case "documents":
                console.log("Moving " + path.basename(srcFilePath) + " to " + documentsPath);
                let desFilePathDocs = path.join(documentsPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathDocs);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + documentsPath);
                break;
            case "archives":
                console.log("Moving " + path.basename(srcFilePath) + " to " + archivesPath);
                let desFilePathFilesArc = path.join(archivesPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathFilesArc);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + archivesPath);
                break;
            case "media":
                console.log("Moving " + path.basename(srcFilePath) + " to " + mediaPath);
                let desFilePathMedia = path.join(mediaPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathMedia);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + mediaPath);
                break;
            case "app":
                console.log("Moving " + path.basename(srcFilePath) + " to " + appPath);
                let desFilePathApp = path.join(appPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathApp);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + appPath);
                break;
            default:
                console.log("Moving " + path.basename(srcFilePath) + " to " + others);
                let desFilePathOters = path.join(others, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathOters);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + others);
        }    
        

    }
}

module.exports = {
    fun : fn
}