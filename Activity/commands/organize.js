let fs = require('fs');
const path = require('path');

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
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
        let srcFilePath = path.join(folderPath, dirContent[i]);
        switch(extension){
            case "pdf":
                console.log("Moving " + path.basename(srcFilePath) + " to " + pdfsPath);
                let desFilePathPdf = path.join(pdfsPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathPdf);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + pdfsPath);
                break;
            case "json":
                console.log("Moving " + path.basename(srcFilePath) + " to " + filesPath);
                let desFilePathFilesJson = path.join(filesPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathFilesJson);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + filesPath);
                break;
            case "txt":
                console.log("Moving " + path.basename(srcFilePath) + " to " + filesPath);
                let desFilePathFilesTxt = path.join(filesPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathFilesTxt);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + filesPath);
                break;
            case "mkv":
                console.log("Moving " + path.basename(srcFilePath) + " to " + videosPath);
                let desFilePathVideos = path.join(videosPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathVideos);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + videosPath);
                break;
            case "PNG":
                console.log("Moving " + path.basename(srcFilePath) + " to " + picturesPath);
                let desFilePathPictures = path.join(picturesPath, path.basename(srcFilePath));
                fs.copyFileSync(srcFilePath, desFilePathPictures);
                console.log(path.basename(srcFilePath) + " is Successfully moved to ----> " + picturesPath);
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