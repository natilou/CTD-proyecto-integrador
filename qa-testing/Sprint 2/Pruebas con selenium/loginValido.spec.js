// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('LoginValido', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('LoginValido', async function() {
    await driver.get("http://s3-group-10-c6-fe.s3-website.us-east-2.amazonaws.com/")
    await driver.manage().window().setRect({ width: 1382, height: 736 })
    await driver.findElement(By.css("a:nth-child(1) > .btn_header")).click()
    await driver.findElement(By.css(".col-register:nth-child(1) .input-register")).click()
    await driver.findElement(By.css(".col-register:nth-child(1) .input-register")).sendKeys("Aniuska")
    await driver.findElement(By.css(".col-register:nth-child(2) .input-register")).sendKeys("Alvarado")
    await driver.findElement(By.css(".row-register:nth-child(3) > .input-register")).sendKeys("aniuska@mail.com")
    await driver.findElement(By.css(".row-register:nth-child(4) > .input-register")).sendKeys("1234567")
    await driver.findElement(By.css(".row-register:nth-child(5) > .input-register")).click()
    await driver.findElement(By.css(".row-register:nth-child(5) > .input-register")).sendKeys("1234567")
    await driver.findElement(By.css(".btn-register")).click()
    await driver.findElement(By.css(".swal2-confirm")).click()
    await driver.findElement(By.css(".row")).click()
    await driver.findElement(By.css(".input-login:nth-child(2)")).click()
    await driver.findElement(By.css(".input-login:nth-child(2)")).sendKeys("aniuska@mail.com")
    await driver.findElement(By.css(".input-login:nth-child(4)")).sendKeys("1234567")
    await driver.findElement(By.css(".btn-login")).click()
  })
})
