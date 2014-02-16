//HISTORY API SETUP


	swapContent( tHref );

	if( win.Modernizr.history ) {
		win.history.pushState({'name':tHref}, null, t.attr('href'));
	}


	win.addEventListener("popstate", function( e ) {
		swapContent( win.location.pathname.replace('/', '') );
	});