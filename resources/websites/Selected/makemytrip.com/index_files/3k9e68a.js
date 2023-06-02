try { 
	function getCustomData(s, customData) {
    for(var k in s) {
        if(s.hasOwnProperty(k) && (k.indexOf("prop") === 0 || k.indexOf("hier") === 0 || k === "pageName" || k === "channel")) {
            customData[k] = s[k];
        }
    }
    return customData;
}
_weqDataLayer = getCustomData(typeof s === "undefined" ? {} : s || {}, {});
_weq['webengage.ruleData'] = webengage.util.copy(_weq['webengage.ruleData'] || {}, _weqDataLayer, true);
_weq['webengage.customData'] = webengage.util.copy(_weq['webengage.customData'] || {}, _weqDataLayer, true);

webengage.feedback.render();
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e68a');
	 }
 }
