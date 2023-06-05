


// exports.run = async (url, html, transformer) => {
//   const {Given, Then, When} = require('cucumber');
//   const {Continuum} = require('@continuum/continuum-javascript-community');
//   const seleniumWebdriver = require('selenium-webdriver');
//   const chrome = require('selenium-webdriver/chrome');
//   const path = require('chromedriver').path;

//   const service = new chrome.ServiceBuilder(path).build();
//   let options = new chrome.Options();
//   chrome.setDefaultService(service);
  
//   driver = new seleniumWebdriver.Builder()
//   .withCapabilities(seleniumWebdriver.Capabilities.chrome())
//   .build();

//   await driver.get(url);
  
//   await Continuum.setUp(this.driver, require('path').resolve(__dirname, "continuum.conf.js"), null);
//   await Continuum.runAllTests();
  
//   const report = Continuum.getAccessibilityConcerns();
//   console.log(report);
  
//   return transformer.transform(report, { url })
// }



const {Given, Then, When} = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();
let options = new chrome.Options();
chrome.setDefaultService(service);

const {Continuum} = require('@continuum/continuum-javascript-community');
const { access } = require('fs');
async function setup() {
	driver = new seleniumWebdriver.Builder()
	.withCapabilities(seleniumWebdriver.Capabilities.chrome())
	.build();
  await Continuum.setUp(this.driver, require('path').resolve(__dirname, "./continuum.conf.js"), null);
}
        

exports.run = async (url,html,transformer) => {
	setup();
	await driver.get(url);

	await Continuum.runAllTests();
	const accessibilityConcerns = Continuum.getAccessibilityConcerns();
	// console.log(accessibilityConcerns);
	driver.quit();
	return transformer.transform(accessibilityConcerns, { url });

}
