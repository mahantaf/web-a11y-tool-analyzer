try { 
	webengage.notification.onOpen(function(data) {
  webengage.util.withWeJquery(function() {
   	var wrapper = $weJQuery("#webklipper-publisher-widget-container-notification-frame").contents().find(".wrapper");
    console.log('wrapper', wrapper);
		$weJQuery(wrapper).css('left', '-5px');
    	$weJQuery(wrapper).css('bottom', '0px');
 
  });
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1l04');
	 }
 }
