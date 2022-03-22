const fs=require('fs');
const path=require('path');
let types = {
    media: ['mp4','mkv','mp3'],
    archives: ['zip','7s','rar','tar','gz','ar','iso','xz'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg','deb'],
    images:['png','jpg','jpeg']
}

let srcPath='C:/Users/k/Desktop/fjp5docn/node/fileOrganizer/downloads';
function organize(srcPath){
    if(srcPath==undefined){
        srcPath=process.cwd();
        console.log(srcPath);
        
    }

    let organizedFiles=path.join(srcPath,"organized_Files")
    // console.log(organizedFiles);
    if(fs.existsSync(organizedFiles)==false){
        fs.mkdirSync(organizedFiles)
    }
    else{
        console.log(`${organizedFiles}  exists`);
    }

    //3. scan the entire srcPath(downloads folder)//
    let allFiles=fs.readdirSync(srcPath);
    console.log(allFiles);

    //4. traverse and classify on basis of their extension
    for(let i=0;i<allFiles.length;i++){
        let ext=path.extname(allFiles[i]);
        console.log(ext);
    }
    
}


organize(srcPath)
console.log(process.cwd())
module.exports={organizepublic:organize}