var navButton = $('.nav-toggle'),
	mainNav = $('.main-navigation'),
	faBars = $('.fa-bars'),
	faCross = $('.fa-times');


$(navButton).click(function(event) {
	mainNav.toggleClass('nav-visible');
	faBars.toggleClass('visible');
	faCross.toggleClass('visible');
	event.preventDefault();
});
