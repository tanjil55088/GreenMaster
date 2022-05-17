jQuery( document ).ready(function($) {
    var scrollSpeed = 750;
    var scrollOffset = 50;
    var easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });
	
	

/* nice scroll */
 
	$("html").niceScroll({
	  cursorcolor:"#048240",
	  cursorwidth:"12px",
	  cursorborder:"none",
	  cursorborderradius:"none",
	  autohidemode:"false",	
	  scrollspeed: 80,
	  cursorminheight: 200,		  			  
	})


/*call wow */
wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	mobile: true,
	live:         true ,
	callback:     function(box) {
	  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();
	
/* parallux */
	$('.carousel-inner .item').parallax("50%", 0.5);
	


});
