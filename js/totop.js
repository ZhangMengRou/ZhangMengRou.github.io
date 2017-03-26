(function($) {
	// When to show the scroll link
	// higher number = scroll link appears further down the page
	var upperLimit = 1000;

	// Our scroll link element
	var scrollElem = $('#totop');

	// Scroll to top speed
	var scrollSpeed = 500;

	// Show and hide the scroll to top link based on scroll position
	scrollElem.hide();
	$(window).scroll(function () {
		var scrollTop = $(document).scrollTop();
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in
		}else{
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1261582497'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1261582497' type='text/javascript'%3E%3C/script%3E"));