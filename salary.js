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
        await driver.get('https://www.zippia.com/project-manager-jobs/salary/');

        //Get and store DOM element '<form>'
        let SearchButton = driver.findElement(By.css('section[class="graphic-designer-salaries-section"]'));

        //Get search button element from webElement 'form'
        await SearchButton.findElement(By.css('div[class=" zp-filter-button"]'))
            .click();

        //Get search input element from  button webElement 
        let searchInput = SearchButton.findElement(By.css('div.filter-carousel div.zp-filter-dropdown input[name="location"]'));
        await searchInput.sendKeys('New York', Key.TAB);
        searchInput.sendKeys(Key.ENTER);

        //Time wait to see the browser response
        //await sleep(1);
        let searchForm = SearchButton.findElement(By.css('form[class="w-100"] input[name="location"]'));
        await searchForm.click();
        await searchForm.sendKeys(Key.ENTER);
        //await searchForm.sendKeys(Key.ENTER);


        let SearchIndustry = driver.findElement(By.css('section[class="graphic-designer-salaries-section"] \
            div[class="filter-carousel-container"] \
            div[class=" zp-filter-button"]'));
        await sleep(2);
        await SearchIndustry.click();
        //SearchIndustry.sendKeys(Key.ENTER);

        //await sleep(2);
        let SearchOption = driver.findElement(By.css('section[class="graphic-designer-salaries-section"]  div[class="filter-carousel-container"] div[class="zp-filter-dropdown"] div[class="zp-dropdown-menu"] div[class="filter-option"]:first-child'));
        await SearchOption.click();

        //await sleep(2);
        let SearchApply = driver.findElement(By.css('section[class="graphic-designer-salaries-section"]  div[class="filter-carousel-container"] div[class="zp-filter-dropdown"] div[class="zp-dropdown-menu"] div[class="filter-footer"] div[class="filter-footer-end"]'));
        await SearchApply.click();
        //await searchForm.sendKeys(Key.ENTER)

        let searchEducation = driver.findElement(By.css('section[class="graphic-designer-salaries-section"] div[class="filter-carousel-container"] div[class="zp-filter-container"] div[class=" zp-filter-button"]'));
        await searchEducation.click();

        //await sleep(2);
        let SearchEduLevel = driver.findElement(By.css('section[class="graphic-designer-salaries-section"] div[class="filter-carousel-container"] div[class="zp-filter-dropdown"] div[class="zp-dropdown-menu"] div[class="filter-option"]:first-child'));
        await SearchEduLevel.click();

        //await sleep(2);
        let SearchEduApply = driver.findElement(By.css('section[class="graphic-designer-salaries-section"]  div[class="filter-carousel-container"] div[class="zp-filter-dropdown"] div[class="zp-dropdown-menu"] div[class="filter-footer"] div[class="filter-footer-end"]'));
        await SearchEduApply.click();

    } catch (error) {
        console.log(error);
    }

})();

