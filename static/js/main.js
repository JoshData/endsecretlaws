$('a.smooth').click(function(e) {
	e.preventDefault();
	var target = this.hash,
	$target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top - 15
	}, 900, 'swing', function () {
		//window.location.hash = target;
	});
	return false;
});

$(function() {
	var m = parseInt($('.quote').css("margin-top").replace("px", ""));
	var h2 = $('.bigphoto').height() - 1.5*$('.quote').height() - $('.quote').offset().top;
	if (h2 < 0) h2 = 0;
	$(window).scroll(function() {
		var v = $(window).scrollTop();
		var h = $('.bigphoto').height();
		if (v > h) v = h;
		var m1 = m + (v/h)*h2;
		$('.quote').css({ "margin-top": m1 + "px" });
		$('.bigphoto').css({opacity: Math.pow(1-v/h, 2)});
	});
});
