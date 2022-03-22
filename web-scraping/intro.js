const cheerio = require("cheerio");
const request =require("request");

request('https://www.worldometers.info/coronavirus/',cb);

function cb(err,res,html) {
     if(err){
         console.log(err);
     }else{
        handle(html);
     }
}

function handle(html) {
    let $=cheerio.load(html);
    let dataArr=$('#maincounter-wrap');
    // console.log(dataArr);
    for (let index = 0; index < dataArr.length; index++) {
        const element = dataArr[index];
        let head=$(element).find('h1').text();
        let number = $(element).find('span').text();
        console.log(head+" "+ number);
    }
}