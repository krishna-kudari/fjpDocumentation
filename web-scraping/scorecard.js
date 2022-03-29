const request = require("request");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
function getscores(url) {
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
  let content = $(".match-header-container");
  let description = $(content).find(".description").text();
  //venue ,Date
  let descarr = description.split(",");
  let venue = descarr[1];
  let date = descarr[2];

  //result
  let result = $(content).find(".status-text span").text();
  // console.log(venue + " " + date + " " + result);

  //team names
  let teams = $(
    ".match-info.match-info-MATCH.match-info-MATCH-half-width .teams .team"
  );
  let winteam = "";
  let losteam = "";
  for (let i = 0; i < teams.length; i++) {
    if ($(teams[i]).hasClass("team-gray")) {
      losteam = $(teams[i]).find("p").text();
    } else {
      winteam = $(teams[i]).find(".name").text();
    }
  }
  // console.log(winteam + "\t" + losteam);
  // let teamNamePath1 = path.join(__dirname, "IPL", winteam);
  // let teamNamePath2 = path.join(__dirname, "IPL", losteam);
  // if (!fs.existsSync(teamNamePath1)) {
  //   fs.mkdirSync(teamNamePath1);
  // }
  // if (!fs.existsSync(teamNamePath2)) {
  //   fs.mkdirSync(teamNamePath2);
  // }
  let teamNameArr = $(".name-detail>.name-link");
  // console.log(teamNames.text());
  let team1 = $(teamNameArr[0]).text();
  let team2 = $(teamNameArr[1]).text();
  // console.log(team1);
  // console.log(team2);
  let allBatsmenRows = $(".table.batsman tbody>tr");
  for (let i = 0; i < allBatsmenRows.length; i++) {
    if ($(allBatsmenRows[i]).hasClass("extras")) {
      let temp = team1;
      team1 = team2;
      team2 = temp;
    }
    if ($(allBatsmenRows[i]).find("td").hasClass("batsman-cell")) {
      // console.log($(allBatsmenRows[i]).text());
      let cols = $(allBatsmenRows[i]).find("td");
      let batsmanName = $(cols[0]).text().replace('(c)',"").replace("†","");
      let run = $(cols[2]).text();
      let balls = $(cols[3]).text();
      let fours = $(cols[5]).text();
      let sixes = $(cols[6]).text();
      let strikeRate = $(cols[7]).text();
      // console.log(
      //   `batsmanName -> ${batsmanName}  runs ->${run}  balls ->${balls}  4s ->${fours}  6s ->${sixes}  SR ->${strikeRate}`
      // );
      // if()
      processInformation(
        date,
        venue,
        result,
        team1,
        team2,
        batsmanName,
        run,
        balls,
        fours,
        sixes,
        strikeRate
      );
    }
    // break;
  }

  function processInformation(
    dateOfMatch,
    venueOfMatch,
    matchResult,
    team1,
    team2,
    playerName,
    runs,
    balls,
    numberOf4,
    numberOf6,
    sr
  ) {
    let teamNamePath = path.join(__dirname, "IPL", team1);
    if (!fs.existsSync(teamNamePath)) {
      fs.mkdirSync(teamNamePath);
    }

    let playerPath = path.join(teamNamePath,playerName+".xlsx");
    let content = excelReader(playerPath, playerName);

    let playerObj = {
      dateOfMatch,
      venueOfMatch,
      matchResult,
      team1,
      team2,
      playerName,
      runs,
      balls,
      numberOf4,
      numberOf6,
      sr,
    };

    content.push(playerObj);
    excelWriter(playerPath, content, playerName);
  }

  // console.log(htmlString);
}

function excelReader(playerPath, sheetName) {
  if (!fs.existsSync(playerPath)) {
    return [];
  }
  let workbook = xlsx.readFile(playerPath);
  let excelData = workbook.Sheets[sheetName];
  // console.log(excelData+"\n"+sheetName+"\n"+playerPath);
  let playerObj = xlsx.utils.sheet_to_json(excelData);
  return playerObj;
}

function excelWriter(playerPath, jsObject, sheetName) {
  //Creates a new workbook
  let newWorkBook = xlsx.utils.book_new();
  //Converts an array of JS objects to a worksheet.
  let newWorkSheet = xlsx.utils.json_to_sheet(jsObject);
  //it appends a worksheet to a workbook
  xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, sheetName);
  // Attempts to write or download workbook data to file
  xlsx.writeFile(newWorkBook, playerPath);
}

module.exports = {
  getscorecard: getscores,
};
