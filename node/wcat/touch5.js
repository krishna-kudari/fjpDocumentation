const fs=require("fs");
exports.writehtml5public=help;

function writehtml5(){
    const html5=fs.readFileSync(`${__dirname}/index.html`)
    let filename=process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`,html5)
}

// writehtml5();
function help() {
    console.log(
        `these are my help commands
        
        node main tree <filepath>
        node main organize<filepath>
        node main help<filepath>`
    );
}
help();