#!/usr/bin/env node

//variables declarations
let { Builder, By, sendKeys, Key, WebDriver } = require('selenium-webdriver');
const { Keyboard } = require('selenium-webdriver/lib/input');
driver = new Builder().forBrowser('firefox').build();

(async function test() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    try {

        //Navigate to url
        await driver.get('https://www.zippia.com/project-manager-jobs/');

        //Get element top-college
        let SearchTopColleges = driver.findElement(By.css('section[id="top-colleges"] div[class="colleges-list-item-content row mx-0 justify-content-end"]:first-child'));

        //Get search button element from webElement 'button'
        await SearchTopColleges.click();

        let popupClose = driver.findElement(By.xpath('//*[@id="__next"]/header/div[3]/div/div[2]/div/div[8]/button'));
        await popupClose.click();

        //let searchButtonFullList = drive.findElement(By.xpath('//*[@id="top-colleges"]/section/button'));
        //await searchButtonFullList.click();

    } catch (error) {
        console.log(error);
    }

})();

