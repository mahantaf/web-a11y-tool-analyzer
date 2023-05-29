try { 
	webengage.onReady(function(){
webengage.notification.options({defaultRender:true});
webengage.notification.render({forcedRender : ['274eof9','2slaop']}); //make the first one forced render
webengage.notification.options({defaultRender:false,notificationId:"17304a788"});
webengage.notification.onClick(function (data) {
    webengage.notification.options({defaultRender:true});
if (data.notificationId === '~10cb57322') { //on the click of the first one
webengage.notification.render({ notificationId : '17304a788' }); //render second notif
}
});
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d4ka');
	 }
 }
