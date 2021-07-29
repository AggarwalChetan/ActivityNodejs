let fs = require('fs');
const path = require('path');


function fn(props){
    let folderPath = props;
    let dirContent = fs.readdirSync(folderPath);
    let organizeDirPath = path.join(folderPath, "organized_files")
    let pdfsPath = path.join(organizeDirPath, "Pdfs");
    let picturesPath = path.join(organizeDirPath, "Pictures");
    let videosPath = path.join(organizeDirPath, "Videos");
    let filesPath = path.join(organizeDirPath, "Files");
    let others = path.join(organizeDirPath, "Others");

    fs.mkdirSync(organizeDirPath);
    fs.mkdirSync(pdfsPath);
    fs.mkdirSync(picturesPath);
    fs.mkdirSync(videosPath);
    fs.mkdirSync(filesPath);
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