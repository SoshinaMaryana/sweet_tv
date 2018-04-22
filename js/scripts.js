(function($){
	$(document).ready(function() {
        $(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });
        $(".section__arrow").on("click", function (event) {
        	event.preventDefault();
        	var id  = $(this).attr('href'),
           		top = $(id).offset().top;      
        	$('body,html').animate({scrollTop: top}, 1500);
    	});
    });
	
	var offset = $('#tv').offset().top + 100,
		sticky = $('.header');

	$(window).on('scroll', function(){
		var windowScroll = $(window).scrollTop();
		sticky.addClass('animated');
		if (windowScroll > offset) {
			sticky
			.removeClass('slideOutUp')
			.addClass('slideInDown')
			.addClass('sticky');
		} else if (windowScroll == 0){
			sticky.removeClass('slideOutUp');
		}
			else {
				if (sticky.hasClass('slideInDown')) {
					sticky
						.addClass('slideOutUp')
						.addClass('slideInDown');
						setTimeout(function(){
							sticky.removeClass('sticky');
						}, 300)
		}
		}
	})
	 $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
  $('[data-modal]').on('click',function(e){
  	e.preventDefault();
		var target = $(this).attr('data-modal'),
			modal  = $('#' + target),
			modalContent = modal.find('.modal__content');

		modal.addClass('opened');
		$('body').css('overflow', 'hidden');
		
		modal.addClass('fadeIn');
		setTimeout(function(){
			modalContent.addClass('slideInDown1');
	 },500);
  })
  $('.modal__btn--skip').on('click',closeModal);
   // $(document).delegate('modal', 'click', closeModal);
  	function closeModal(e){
  		e.preventDefault();

  		var modal  = $('.modal.opened'),
			modalContent = modal.find('.modal__content');	
		modalContent.addClass('slideOutUp1');
			modal.addClass('fadeOut');
			$('body').css('overflow', 'visible');
		setTimeout(function(){
			modalContent.removeClass('slideInDown1');
			modal.removeClass('fadeIn');

			modal.removeClass('fadeOut');
			modal.removeClass('fadeOut');
			modalContent.removeClass('slideOutUp1');
			modal.removeClass('opened');
		},500);
		setTimeout(function(){
		},1500)
	}

})(jQuery);

var win = $(window);

var allMods = $(".section__facility"),
	allWraps = $(".section__galery .section__wrap");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
allWraps.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  	allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
    
  });
});
win.scroll(function(event) { 
  	allWraps.each(function(i, el) {
    	var el = $(el);
    	if (el.visible(true)) {
      		el.addClass("come-in"); 
    	}
     });
});