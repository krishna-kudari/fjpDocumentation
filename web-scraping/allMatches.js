const request = require("request");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const { getscorecard } = require('./scorecard');
function getAllMatch(url) {
  request(url, cb2);
}
function cb2(err, res, html) {
  if (err) {
    console.log(err);
  } else {
    //   handle2(html);
    handle(html);
  }
}

function handle(html) {
  let $ = cheerio.load(html);
  let anchorElement = $('[data-hover="Scorecard"]');
  for (let i = 0; i < anchorElement.length; i++) {
    let scorelinks = $(anchorElement[i]).attr("href");
    let fulllink = "https://www.espncricinfo.com" + scorelinks;
    getscorecard(fulllink);
    // break;
  }
}

function handle2(html) {
  let $ = cheerio.load(html);
  let anchorElementarr = $(".match-info.match-info-FIXTURES");
  console.log(anchorElementarr.length);
  for (let i = 0; i < anchorElementarr.length; i++) {
    let description = $(anchorElementarr[i]).find('.description').text();
    let result = $(anchorElementarr[i]).find('.status-text span').text();

    console.log(description);
    console.log(result);
  }
}

module.exports = {
  getAllMatch: getAllMatch,
};
