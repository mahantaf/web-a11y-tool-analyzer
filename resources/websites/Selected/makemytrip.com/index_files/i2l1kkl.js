try { 
	/* Author: Raviraj | For: ~25144bc21 | Date: 10 Jan 2020 */

webengage.onReady(function () {
            webengage.notification.onOpen(function (data) {
                if (data.notificationId === '~25144bc21') {
                    webengage.util.withWeJquery(function () {
                        $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('.copy_button').click(function (e) {
                            $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('.copy_button').removeClass('offerCodeDisabled');
                            e.target.classList.add('offerCodeDisabled');
                            e.target.innerText = "CODE COPIED";
                            var parent__Element = e.target.parentElement;
                            var el = parent__Element.getElementsByClassName('dealName');
                            var dealText = el[0].innerText;
                            navigator.clipboard.writeText(dealText);

                        });
                    });
                }

            });
        });
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1kkl');
	 }
 }
