/* Author:
	Sean.Kealey 11122012
*/

(function($, win, doc){
	"use strict";

	var
	resume			=	$('#resume'),
	subNavItems		=	resume.find('.sub-nav').find('a'),
	subNavContents	=	resume.find('ul');

	$('section.links').find('.resume').click(function(e){
		e.preventDefault();
		$('#intro-text').removeClass('visible');
		resume.addClass('visible');
	});

	subNavItems.click(function( e ){
		var
		t		=	$(this),
		tHref	=	t.attr('href').replace('/', '');

		e.preventDefault();
		subNavItems.removeClass('active');
		t.toggleClass('active');
		subNavContents.removeClass('visible');
		$('#' + tHref).addClass('visible');

	});

})(jQuery, window, document);