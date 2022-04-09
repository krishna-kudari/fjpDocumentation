const puppeteer=require("puppeteer");
const email='wofaw25739@get2israel.com';
// const codeObj=require("./codes");

const password='Zaxdm6kd^VT7p96';

let page;
const browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
     args :['--start-maximized'],
    slowMo:true
})
browserOpenPromise.then((browser) =>{
    let allTabsPromise = browser.pages();
    return allTabsPromise;
}).then((allTabs) => {
    page = allTabs[0];
    let website = page.goto("https://www.hackerrank.com/auth/login");console.log("done");
    return website;
    
}).then((website) =>{
    let waitAndClickPromise = waitAndClick(page,"input[placeholder='Your username or email']");
    return waitAndClickPromise;
}).then((waitAndClickPromise)=>{
    emailtypedPromise = page.type("input[placeholder='Your username or email']",email,{delay:50});
    return emailtypedPromise;
}).then((emailtypedPromise)=>{
    passwordtypedPromise = page.type("input[placeholder='Your password']",password,{delay:50});
    console.log(passwordtypedPromise);
    return passwordtypedPromise;
}).then((passwordtypedPromise)=>{
    console.log(passwordtypedPromise);
    loginClickPromise = page.click("button[data-analytics='LoginPassword']");
    console.log(`${loginClickPromise}` );
    return loginClickPromise;
})

function waitAndClick(cpage , selector){
    return new Promise(function(resolve , reject){
        let waitForModulepromise = cpage.waitForSelector(selector);

        waitForModulepromise.then(()=>{
            let clickPromise = cpage.click(selector);

            return clickPromise;
        }).then(()=>{
            resolve();
        }).catch((err)=>{
            reject();
        })
    })

}