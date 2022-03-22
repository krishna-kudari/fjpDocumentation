// 1] node wcat.js <filepath> =>display the contents of file
// let input=process.argv;
const { slice } = require("cheerio/lib/api/traversing");
const fs = require("fs");
// console.log(input[2])

// // 2] node wcat.js <filepath1> <filepath2> <filepath3> .......     =>reads and displays content of all the files

// input =input.slice(2);

// for(let i=0;i<input.length;i++){
//     let filepath=input[i];
//     if(fs.existsSync(filepath)){
//     // console.log(fs.readFileSync(filepath,'utf-8'))
//     }else{
//         // console.log("no such path exists");
//     }
// }

// console.log(input);
// console.log(process.argv)

let userinput = process.argv.slice(2);
let filearr = [];
for (let i = 0; i < userinput.length; i++) {
  if(fs.existsSync(userinput[i])) filearr.push(userinput[i]);
 
  // console.log(fs.readFileSync(userinput[i]))
}

let optionarr=[];
let i=0;
while(!fs.existsSync(userinput[i])){
  optionarr[i]=userinput[i];
  i++;
}
for(let i=0;i<optionarr.length;i++){
  let resultstring="";
  if (optionarr[i] == "-s") {
    processBlankSpaces(filearr);
  } else if (optionarr[i] == "-n") {
    numberingall(filearr);
  } else if (optionarr[i] == "-b") {
    numberingValidlines(filearr);
  }
}
// console.log(optionarr);
// console.log(filearr);



if (filearr[0] == "-s") {
  processBlankSpaces(filearr.slice(1));
} else if (filearr[0] == "-n") {
  numberingall(filearr.slice(1));
} else if (filearr[0] == "-b") {
  numberingValidlines(filearr.slice(1));
} else {
  // console.log("k")
  for (let j = 0; j < filearr.length; j++) {
    if (!fs.existsSync(filearr[j])) {
      console.log(`${filearr[j]} path does not exist`);
      filearr.splice(j, 1);
      continue;
    }
  }
  let content = "";
  for (let k = 0; k < filearr.length; k++) {
    let file = filearr[k];
    content += fs.readFileSync(file, "utf-8") + "\n";
  }

  console.log(content);
}

function processBlankSpaces(filearr) {
  for (let j = 0; j < filearr.length; j++) {
    if (!fs.existsSync(filearr[j])) {
      console.log(`${filearr[j]} path does not exist`);
      filearr.splice(j, 1);
      continue;
    }
  }
  for (let i = 0; i < filearr.length; i++) {
    let filecon = fs.readFileSync(filearr[i], "utf-8");
    // fileconarr=filecon.split(' ');
    let processedetring = "\n";
    let fileconarr=filecon.split('\n');
    processedetring+=fileconarr[0];
    // console.log(fileconarr);
    for (let i = 1; i < fileconarr.length; i++) {
      if (fileconarr[i] == "\r" ) {
        fileconarr.splice(i,1);
      }
        processedetring += fileconarr[i]+'\n';
        
      
    }
    // console.log(fileconarr);
    console.log(processedetring);
  }
}
function numberingValidlines(filearr) {
  for (let j = 0; j < filearr.length; j++) {
    if (!fs.existsSync(filearr[j])) {
      console.log(`${filearr[j]} path does not exist`);
      filearr.splice(j, 1);
      continue;
    }
  }
  for (let i = 0; i < filearr.length; i++) {
    let filecon = fs.readFileSync(filearr[i], "utf-8");

    let fileconarr = filecon.split("\n");
    // console.log(fileconarr)
    // for (let i = 0; i < fileconarr.length; i++) {
    //   if (fileconarr[i] == "\r" || fileconarr[i] == "") fileconarr.splice(i, 1);
    // }
    // for (let i = 0; i < fileconarr.length; i++) {
    //   if (fileconarr[i] == "\r" || fileconarr[i] == "") fileconarr.splice(i, 1);
    // }
    // for (let i = 0; i < fileconarr.length; i++) {
    //   if (fileconarr[i] == "\r" || fileconarr[i] == "") fileconarr.splice(i, 1);
    // }
    // console.log("\r");
    // console.log(fileconarr);
    // console.log(processedetring);
    processedetring = "";
    let val = 1;
    for (let i = 0; i < fileconarr.length; i++) {
      // if(fileconarr[i].charAt(0)=='\n'){
      //     string=fileconarr[i];

      // }
      if (fileconarr[i] != "\r") {
        
        // console.log(fileconarr[i]);
        processedetring += val + "\t" + fileconarr[i] + "\n";
        val++;
      }
    }
    console.log(processedetring);
  }
}

function numberingall(filearr) {
  for (let j = 0; j < filearr.length; j++) {
    if (!fs.existsSync(filearr[j])) {
      console.log(`${filearr[j]} path does not exist`);
      filearr.splice(j, 1);
      continue;
    }
  }
  for (let i = 0; i < filearr.length; i++) {
    let filecon = fs.readFileSync(filearr[i], "utf-8");
    // fileconarr=filecon.split(' ');
    let processedetring = "1\t";
    let val = 1;
    for (let i = 0; i < filecon.length; i++) {
      if (filecon[i] == "\n" && i != filecon.length - 1) {
        val++;
        processedetring += filecon[i] + val + "\t";
      } else {
        processedetring += filecon[i];
      }
    }
    console.log(processedetring);
  }
}
