
$(document).ready(function(){

	// Expand to show content when the "More Info" is clicked
	$('.about__show-more').click(function() {
		$('.about__container--more').slideToggle(400);
	// Hide "More Info" and display "Less Info" when "More Info" is clicked, ADD DELAYS
		$('.about__show-more').toggleClass("no-display");
		$('.about__show-less').toggleClass("no-display");
	});

	// Close Content when "Less Info" is clicked
	$('.about__show-less').click(function() {
		$('.about__container--more').slideToggle(400);
	// Scroll back to top when "Less Info is clicked"
	// Hide "Less Info" and display "More Info" when "Less Info" is clicked, ADD DELAYS
		$('.about__show-more').toggleClass("no-display");
		$('.about__show-less').toggleClass("no-display");
	});

});



