


$(window).on('scroll', function() {
	var ST = $(window).scrollTop();
	var HH = $('header').innerHeight();

	if( ST > HH ) {
		$('.nav').addClass('fixed-top');
	}else {
		$('.nav').removeClass('fixed-top');
	}

});




$('.show-search').on('click', function() {
	$('.search-form').addClass('search-form-active');
});





$('.close-search-form').on('click', function() {
	$('.search-form').removeClass('search-form-active');
});




$('.cat').each(function() {
	$(this).css("background", $(this).data('color'));
})
AOS.init();

// our auto slider code    
    $(function autoslider() {
            
        $('.logo .active').each(function () {
                
            if (!$(this).is(':last-Child')) {
                    
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoslider();
                        
                });
                    
            } else {
                    
                
                $(this).delay(3000).fadeOut(1000, function () {
                
                
                    $(this).removeClass('active');
                
                
                    $('.logo div').eq(0).addClass('active').fadeIn();
                
                    autoslider();
            
                });
        
            }
    
        });

    });