	/* when user goes to a new slide focus on that slide */	
     
		$('.carouselslide').on('slid.bs.carousel', function (e) {
			$('.carousel-item').removeAttr('tabindex');
			$('.carousel-item').attr('aria-hidden', 'true');
			$('.carousel-item.active').attr('tabindex', '0');
			$('.carousel-item.active').attr('aria-hidden', 'false');
			$('.carousel-indicators li').attr('aria-checked','false');
			$('.carousel-indicators li.active').attr('aria-checked','true');
			$('.carousel-item.active').focus();
		})
		
		   
        /* Add active class so that arrow doesn't dissappear after it fades in */
       		setTimeout(function(){
				if (($(window).scrollTop()<$(window).height()*.2)) {
					$('.false-arrow.opt3').addClass('active');
				} else {
					$('.false-arrow.opt3').addClass('fadeaway');
				}
			}, 800);
		/* when user scrolls fade the arrow away */
			$(window).scroll(function(){
				if ($(this).scrollTop()) {
					if ($('.false-arrow.opt3').hasClass('active')){
						$('.false-arrow.opt3').addClass('fadeaway');
						$('.false-arrow.opt3').removeClass('active');
					};
				}
			});