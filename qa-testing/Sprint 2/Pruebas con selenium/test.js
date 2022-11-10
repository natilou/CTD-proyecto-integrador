const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');
const firefoxCapabilities = Capabilities.firefox();
const assert = require('assert');
const should = require("chai").should();
const { syncBuiltinESMExports } = require("module");




// Caso de prueba TC_001: Validación de buscador seleccionando ciudad y fecha.
async function TC_001(){
    //firefoxCapabilities.set('firefoxOptions', {args:['--headless']})
    const today = new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const months = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ]

    const days = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado'
    ]
    const parsed_first_date = `Choose ${days[today.getDay()]}, ${today.getDate()} de ${months[today.getMonth()]} de ${today.getFullYear()}`
    const parsed_second_date = `Choose ${days[tomorrow.getDay()]}, ${tomorrow.getDate()} de ${months[tomorrow.getMonth()]} de ${tomorrow.getFullYear()}`
    const today_formated = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    const tomorrow_formated = tomorrow.getFullYear() + '/' + (tomorrow.getMonth() + 1) + '/' + tomorrow.getDate();
    const match = today_formated + ' - ' +  tomorrow_formated;
    let driver = await new Builder().forBrowser('firefox').build();

    await driver.get('http://s3-group-10-c6-fe.s3-website.us-east-2.amazonaws.com/');
    await driver.manage().window().maximize();
    await driver.wait(until.elementLocated(By.className('city-name')));
    await driver.findElement(By.className('city-name')).click();
    await driver.wait(until.elementLocated(By.xpath('//ul[@class=\'select\']//li[@value=\'Mendoza\']')));
    await driver.findElement(By.xpath('//ul[@class=\'select\']//li[@value=\'Mendoza\']')).click();
    await driver.wait(until.elementLocated(By.className('date-picker-container')));
    await driver.findElement(By.className('date-picker-container')).click();  
    await driver.wait(until.elementLocated(By.xpath('//div[@class=\'react-datepicker__week\']//div[@aria-label=\''+parsed_first_date+'\']')));
    
    
    await driver.findElement(By.xpath('//div[@class=\'react-datepicker__week\']//div[@aria-label=\''+parsed_first_date+'\']')).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath('//div[@class=\'react-datepicker__week\']//div[@aria-label=\''+parsed_first_date+'\']')));
    await driver.findElement(By.xpath('//div[@class=\'react-datepicker__week\']//div[@aria-label=\''+parsed_second_date+'\']')).click();
    await driver.wait(until.elementLocated(By.xpath('//div[@class=\'react-datepicker__input-container\']//input[@placeholder=\'Check in - Check out\']')));
    let selected_dates = await driver.findElement(By.xpath('//div[@class=\'react-datepicker__input-container\']//input[@placeholder=\'Check in - Check out\']')).getAttribute("value");
    await driver.sleep(3000);
    
    //assert.strictEqual(selected_dates, match);

    selected_dates.should.equal(match)
    console.log('#### TC_001 -> TEST PASS ###')

    await driver.close();


}

// Caso de prueba TC_002: Validación de titulo del home.
async function TC_002(){
    //firefoxCapabilities.set('firefoxOptions', {args:['--headless']})

    let driver = await new Builder().forBrowser('firefox').build();

    await driver.get('http://s3-group-10-c6-fe.s3-website.us-east-2.amazonaws.com/');
    await driver.manage().window().maximize();
    
    let title = await driver.getTitle().then(function(value) {return value});

    title.should.equal('Digital Booking')
    console.log('#### TC_002 -> TEST PASS ###')
    await driver.close();


}

TC_001();
TC_002();