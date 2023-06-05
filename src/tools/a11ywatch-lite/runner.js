
// import { scan, multiPageScan, crawlList } from "@a11ywatch/a11ywatch";
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var a11ywatch_1 = require("@a11ywatch/a11ywatch");

exports.run = async (url, html, transformer) => {
  const data = (await a11ywatch_1.scan({ url: url })).data
//     .then(function (data) {
//     console.log(data);
// })
//     .catch(function (e) {
//     console.error(e);
// });
//   console.log("Export Runs")

  // await A11ywatch.scan({ url: "https://jeffmendez.com" })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((e) => {
  //   console.error(e);
  // });

    // let defaultClient = A11ywatchClient.ApiClient.instance;
    // // Configure Bearer (JWT) access token for authorization: bearerAuth
    // let bearerAuth = defaultClient.authentications['bearerAuth'];
    // bearerAuth.accessToken = "YOUR ACCESS TOKEN"
    // let apiInstance = new A11ywatchClient.ReportsApi();
    // let opts = {
    //     "url": "url_example",
    //     "subdomains": false,
    //     "tld": false,
    //     "robots": false // String | The page url or domain for the report
    //   };      
    // let websiteInput = new A11ywatchClient.WebsiteInput();
    // websiteInput.url = url;
    // let report;
    // apiInstance.scanWebsite(websiteInput, (error, data, response) => {
    //     if (error) {
    //       console.error(error);
    //     } else {
    //       console.log('API called successfully. Returned data: ' + data);
    //       report = data;
    //     }
    //   });      
    //   console.log('data'+report);
    return transformer.transform(data, { url })
}