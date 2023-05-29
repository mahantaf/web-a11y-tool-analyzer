/**
*	Rainmatter Tech (http://rainmatter.com)
*
*	The account opening form should be having an ID: zlm_add_lead
*	It will create a hidden input field under the form with ID zlm_partner_id. Its value will be partner ID from the URL
*	You can post this to the ZLM API link.
*	If a cookie is set with a partner id, it will have a validaity of 24 hours. It will remain the same even if the user is entering a different partner id.
*	Uses: https://github.com/js-cookie/js-cookie for cookie management. 
*/

!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(s){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var m=f[0].replace(u,decodeURIComponent);if(l=t.read?t.read(l,m):t(l,m)||l.replace(u,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(s){}if(n===m){c=l;break}n||(c[m]=l)}catch(s){}}return c}}return o.set=o,o.get=function(e){return o(e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

/**
* Function to get the value of a given variable in the URL 
* @param {String} variable name 
* @return {String} variable value
*/
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");

	//Iterate through the URL string to split variable and value
	for (var i=0; i<vars.length; i++) {
		var pair = vars[i].split("=");

		if (pair[0] == variable) {
			decode_uri = decodeURIComponent(pair[1]);
			replaced_partnerid = decode_uri.replace(/[^\x00-\x7F]/g, "");
			return replaced_partnerid;
		}
	}
}

/**
* Validate the given partner ID with the pattern of Zerodha partner IDs 
* @param {String} partner_id 
* @return {Boolean} true / false
*/
function validate_partnerid(partner_id) {
	if((/^[a-z0-9]+$/i).test(partner_id) && partner_id.length <= 8) {
		return true;
	} else {
		return false;
	}
}

/**
* If cookie_value argument is not passed, it will set it as RAINMT 
* @param {String} cookie_value 
*/
function set_cookie(cookie_value) {

	// If cookie_value is not set, use default as RAINMT
	if(document.location.hostname == "zerodha.com") {
		cookie_value = typeof cookie_value !== "undefined" ? cookie_value : "zerodha";
	} else {
		cookie_value = typeof cookie_value !== "undefined" ? cookie_value : "RAINMT";
	}
	

	// If cookie is not already set, set it as whatever the cookie value is.
	if(Cookies.get("ref") == undefined) {
		Cookies.set("ref", cookie_value, { expires: 1 });

	} else {

		// If cookie is already set, validate it
		current_ref = Cookies.get("ref");

		//Check if the set cookie is valid, if yes leave it, otherwise replace it with RAINMT
		if(!validate_partnerid(current_ref)) {
			Cookies.remove("ref");
			Cookies.set("ref", cookie_value, { expires: 1 });
		} else if (current_ref == "RAINMT" || current_ref == "zerodha") {
			Cookies.remove("ref");
			Cookies.set("ref", cookie_value, { expires: 1 });
		}
	}
}

/**
* Main function to be executed after the DOM is loaded completely. 
* Creates a hidden field in account opening form with referral id and also sets cookie with a duration of 1 day.
*/
window.onload = function(){

	var ref = getQueryVariable("c");

	//Check if there is a partner ID in the URL or not
	if(ref != null && ref != undefined) {
		
		// Validate the ref id to Zerodha partner ID pattern
		if(validate_partnerid(ref)) {
			set_cookie(ref);			
		}
		else {
			//if an invalid partner ID is given, set it to default as RAINMT if there is no existing cookie
			set_cookie();
		}

	} else {
		//If no referral parameter is in the URL set it as RAINMT if there is no cookie set already
		set_cookie();
	}

	// Get the partner id that is set in cookie finally
	zlm_partner_id = Cookies.get("ref");

	// Create a hidden input element inside a form having ID zlm_add_lead with value as the partner id from cookie.
	var acc_open_form = document.getElementById("zlm_add_lead");

	// See if the account opening form with ID zlm_add_lead is there in the DOM or not.
	if(acc_open_form !== null) {
		var zlm_partner_hidden_field = document.createElement("div");
		zlm_partner_hidden_field.innerHTML = "<input type='hidden' name='zlm_partner_id' id='zlm_partner_id' value='" + zlm_partner_id + "'>";
		document.getElementById("zlm_add_lead").appendChild(zlm_partner_hidden_field);
	}

	return true;
}
