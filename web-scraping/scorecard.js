const request = require("request");
const cheerio = require("cheerio");

function getscores(url){
    // console.log(url);
    request(url, cb);
}


function cb(err, res, html) {
  if (err) {
    console.log(err);
  } else {
    handle(html);
  }
}

function handle(html) {
  let $ = cheerio.load(html);
  let content=$('.match-header-container');
  let description=$(content).find('.description').text();
  //venue ,Date
  let descarr = description.split(',');
  let venue = descarr[1];
  let date = descarr[2];

  //result
  let result = $(content).find('.status-text span').text();
  console.log(venue + " "+ date + " "+ result);

  //team names
  let teams=$('.match-info.match-info-MATCH.match-info-MATCH-half-width .teams .team')
  let winteam="";
  let losteam="";
  for (let i = 0; i < teams.length; i++) {
    if($(teams[i]).hasClass('team-gray')){
      losteam = $(teams[i]).find('p').text(); 
    }
    else{
      winteam = $(teams[i]).find('.name').text();
    }
  }
  console.log(winteam+"\t"+losteam);

  let allBatsmenRows = $(".table.batsman tbody>tr");
  for(let i=0; i<allBatsmenRows.length ;i++){
    if($(allBatsmenRows[i]).find('td').hasClass('batsman-cell')) {
      // console.log($(allBatsmenRows[i]).text());
      let cols=$(allBatsmenRows[i]).find('td');
      let batsmanName = $(cols[0]).text();
      let run = $(cols[2]).text();
      let balls = $(cols[3]).text();
      let fours = $(cols[5]).text();
      let sixes = $(cols[6]).text();
      let strikeRate = $(cols[7]).text();
      console.log(`batsmanName -> ${batsmanName}  runs ->${run}  balls ->${balls}  4s ->${fours}  6s ->${sixes}  SR ->${strikeRate}`);
    }
    break;
  }

}

module.exports = {
    getscorecard:getscores
}