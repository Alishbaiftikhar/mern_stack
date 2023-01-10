const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { By } = require("selenium-webdriver");

const test = async () => {
  const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
  await driver.get("http://localhost:3000");
  console.log("Test 1: If app starts successfully");
  const title = await driver.getTitle();
  console.log(title === "React Redux App" ? "PASS" : "FAIL");
  //.............................................................................
  console.log("Test 2: If register successfully");
  const register = await driver.findElement(By.css(".register"));
  await register.click();
  const form = await driver.findElement(By.css(".form"));
  console.log(form ? "PASS" : "FAIL");
  //.............................................................................
  console.log("Test 3: If login successfully");
  const login = await driver.findElement(By.css(".login"));
  await login.click();
  const loginform = await driver.findElement(By.css(".form"));
  console.log(loginform ? "PASS" : "FAIL");
  //..............................................................................
  console.log("Test 4: If take Input successfully");
  const inputEmail = await driver.findElement(By.css("#email"));
  await inputEmail.sendKeys("alishba12@gmail.com");
  const inputPassword = await driver.findElement(By.css("#password"));
  await inputPassword.sendKeys("alishba12@");
  const submit = await driver.findElement(By.css(".btn"));
  await submit.click();
  //   const Dashboard = await driver.findElement(By.css(".dashboard"));
  console.log(submit ? "PASS" : "FAIL");
  //.............................................................................
  console.log("Test 5: Logout successfully");

  const logout = await driver.findElement(By.css(".logout"));
  await logout.click();
  const navElms = await driver.findElements(By.css("ul li"));
  console.log(navElms.length === 2 ? "PASS" : "FAIL");

  await driver.quit();
};
test();
