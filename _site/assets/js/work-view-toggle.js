$(document).ready(function(){
	// Add an underline to the clicked link if it isn't active yet
	$('.work-header__toggle-option').click(function(){
		if ($(this).hasClass( "work-header__toggle-option--active" )) {
			// Do nothing
		} else {
			// Remove the active class from all the toggles
			$('.work-header__toggle-option--active').toggleClass( "work-header__toggle-option--active" );
			// Toggle the work display's class
			$('.work-display').toggleClass( "work-display--inactive", 2000 );
			// Add active class to the clicked anchor
			$(this).toggleClass( "work-header__toggle-option--active" );
		}
	});
});
