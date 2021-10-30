#!/usr/bin/env node

//variables declarations
let { Builder, By, sendKeys, Key } = require('selenium-webdriver');
const { Keyboard } = require('selenium-webdriver/lib/input');
driver = new Builder().forBrowser('firefox').build();

(async function test() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    try {

        //Navigate to url
        await driver.get('https://www.zippia.com/project-manager-jobs/');

        //Get and store DOM element '<form>'
        let SearchButton = driver.findElement(By.id('cmp-demographics-section'));

        //Get search button element from webElement 'form'
        await SearchButton.findElement(By.css('div[class=" zp-filter-button"]'))
            .click();

        //Get search input element from  button webElement 
        let searchInput = SearchButton.findElement(By.css('div.filter-carousel div.zp-filter-dropdown input[name="jobTitle"]'));
        await searchInput.sendKeys('Quality Assurance Analyst', Key.TAB);

        //Time wait to see the browser response
        //await sleep(60);

        //Making click in the web element
        await searchInput.click();
        await searchInput.sendKeys(Key.ENTER);

    } catch (error) {
        console.log(error);
    }

})();

