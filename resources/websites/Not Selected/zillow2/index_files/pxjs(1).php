(function jvxPixelWrapper() {

    var isDebug = false;
    var pixelParams = {"rev":"0","px":"15eacd6e08ac9a","cOpt":"home"};
    var addnlPixelData = function getConversionData(){
	var cObj = {
		rev  : (pixelParams.hasOwnProperty('rev')  ?  pixelParams.rev : 0),
		cOpt : (pixelParams.hasOwnProperty('cOpt')  ?  pixelParams.cOpt  : ''),
		cPxlUrl : ''
	};
	return cObj;
// refer to help link for more options
};;
    var _jvxid = "twCIC00EB1YM";
    var domain = "generic";
    var gdprParams = "";
    var partnerSyncPixels = {};

    function firePixel(pixelId, pixelValObj) {
        debugLog(pixelValObj)
        var uniqueId = Math.floor(Math.random() * (10000)),
            cPxlURL = "https://pxl.jivox.com/tags/conv/pxre.php",
            cPxlRev = (pixelValObj.hasOwnProperty('rev')) ? pixelValObj['rev'] : "",
            cOptVal = null;

        var fData = "px=" + pixelId + "" + gdprParams;
        fData += "&_jvxuserId=" + _jvxid;

        for (var key in pixelValObj) {
            if (pixelValObj.hasOwnProperty(key)) {
                if (key == "cPxlUrl") {
                    // URL: if cPxlUrl comes in the object, then use that
                    if (pixelValObj['cPxlUrl'] !== null && pixelValObj['cPxlUrl'] !== "") {
                        cPxlURL = pixelValObj['cPxlUrl'];
                    }
                }
                else {
                    if (key == 'cOpt') {
                        cOptVal = pixelValObj['cOpt'];
                        if (Object.prototype.toString.call(cOptVal) === '[object Array]') {
                            cOptVal = cOptVal.join();
                        } else if (Object.prototype.toString.call(cOptVal) === '[object Object]') {
                            cOptVal = JSON.stringify(cOptVal);
                        }
                        fData += "&cOpt=" + cOptVal;

                    } else {
                        fData += "&" + key + "=" + pixelValObj[key]
                    }
                }
            }
        }


        /* COM: Since iFrame form post is adding new entry to browser history, simple xmlhttp call is being used to stop it. */

        /************* xmlhttp call *************/

        var xmlhttp = new XMLHttpRequest();
        if ("withCredentials" in xmlhttp) {
            // for Chrome, Firefox, Opera
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200 || xmlhttp.status == 304) {
                        debugLog("post successfull");
                    } else {
                        debugLog("post failed!");
                    }
                }
            }

            xmlhttp.open("POST", cPxlURL, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.withCredentials = true;
            xmlhttp.send(fData);
        } else {
            // for IE < 10 - sending data through GET, because cannot set headers in case of xDomainRequest
            var xdr = new XDomainRequest();
            xdr.onerror = function () {
                debugLog("IE get failed!");
            };
            xdr.ontimeout = function () {
                debugLog("IE get failed!");
            };
            xdr.onload = function () {
                debugLog("IE get successfull!");
            };
            xdr.open("GET", cPxlURL + "?" + fData);
            xdr.send();
        }

        /************* End *****************/
    }
    function firePartnerSyncCookiePixel(){
        for (var key in partnerSyncPixels){
            debugLog("PartnerSyncCookiePixel : "+key+" :"+ partnerSyncPixels[key]);
            var imgEl = document.createElement('img');
            var URL = partnerSyncPixels[key];
            if(URL.indexOf("?") == -1){
                URL += "?r=" + Math.random();
            }else{
                URL += "&r=" + Math.random();
            }
            imgEl.src = URL;
        }
    }

    function debugLog(val) {
        if (isDebug) {
            console.log(val);
        }
    }

    var cData = addnlPixelData();
    if (Object.prototype.toString.call(cData) === '[object Object]') {
        var cDataParams = {}, param;
        if (domain === "ecom") {
            for (param in pixelParams) {
                cDataParams[param] = pixelParams[param];
            }
        }
        for (param in cData) {
            cDataParams[param] = cData[param];
        }
        firePixel("15eacd6e08ac9a", cDataParams);
    }
    if(Object.prototype.toString.call(partnerSyncPixels) === '[object Object]'){
        firePartnerSyncCookiePixel();
    }

})();
