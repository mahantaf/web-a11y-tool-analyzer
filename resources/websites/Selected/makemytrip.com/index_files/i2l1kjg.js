try { 
	webengage.onReady(function(data) {

    var pageTypes = [
        {
            pattern   : '/air', // pathName look-up string internal flight search
            name      : '(internal)flights', // name used for feedback routing
            condition : 'contains'
        }, {
            pattern   : '/hotels',
            name      : 'hotels',
            condition : 'contains'
        }, {
            pattern   : '/flights', // flight
            name      : 'flights',
            condition : 'contains'
        }, {
            pattern   : '/',        // makemytrip homepage
            name      : 'HomePage',
            condition : 'equal'
        },{
            pattern   : '/holidays-india',    
            name      : 'holiday-india',
            condition : 'equal1'
        },{
            pattern   : '/holidays-international',    
            name      : 'holiday-india',
            condition : 'equal2'
        }
    ],
        pathname  = window.location.pathname;

    for (var i = 0; i < pageTypes.length; i++) {
        var pageType = pageTypes[i];
        var condition = pageType.condition;
        var pageTypeName = '';
        switch (condition) {
            case 'contains' :
                if (pathname.indexOf(pageType.pattern) > -1) {
                    pageTypeName = pageType.name;
                }
                break;
            case 'equal' :
                if (pathname === pageType.pattern) {
                    pageTypeName = pageType.name;
                }
                break;
            case 'equal1' :
                if (pathname === pageType.pattern) {
                    pageTypeName = pageType.name;
                }
                break;
            case 'equal2' :
                if (pathname === pageType.pattern) {
                    pageTypeName = pageType.name;
                }
                break;
            
        }
        if (pageTypeName) {
            webengage.screen ({
                'pageType' : pageType.name
            });
            break;
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1kjg');
	 }
 }
