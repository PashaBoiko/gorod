function renderSlider(){
	var slider = $('#slider');
	var slider_content = slider.find('.slider-content');
	var slider_image = slider.find('.slider-image');
	var upArrow = slider.find('.slider-up-arrow');
	var downArrow = slider.find('.slider-down-arrow');
	var items = slider.find('.slider-item');
	var n_items = items.length;
	var item = items.eq(0);
	var slide_one = parseInt(item.outerHeight()) + parseInt(item.css('margin-bottom').slice(0,-2));
	
	var topp = 0;
	var current = 0;

	upArrow.on('click', function(e){
		if(current != 0){
			current--;
			topp = topp  + slide_one;
			slider_content.css('top', topp+'px')
		}
	})

	downArrow.on('click', function(e){
		if(current != (n_items-2)){
			current++;
			topp = topp  - slide_one;
			slider_content.css('top', topp+'px')
		}
	})

	slider_content.on('click', function(e){
		var bgurl = $(e.target).css('background-image');
		var reg_expr = /^url\("(.*)"\)/;
		var url = reg_expr.exec(bgurl)[1];
		
		slider_image.css('background-image', bgurl);
		slider_image.attr('data-lightbox', url);
		slider_image.attr('href', url);
	})
}

function itemCounter(){
	$('.col-block .left-button').click(function(){
		var value = $('.col').val();
		$('.col').val(parseInt(value)+1);
	})
	
	$('.col-block .right-button').click(function(){
		var value = $('.col').val();
		if(value==0)
			return;
		$('.col').val(parseInt(value)-1);
	})

}


$(document).ready(function(){

	$(".filter a").click(function(event){
		event.preventDefault();
		$(".sidebar").toggleClass("show-sidebar");
	});


	if($(window).width()<992){
			$('.filter-catalog').click(function(event){
				event.preventDefault();
          		$('.sidebar').toggleClass('active');
        	})
		}

	$(window).resize(function() {
		if($(window).width()<992){
			$('.filter-catalog').click(function(event){
				event.preventDefault();
          		$('.sidebar').toggleClass('active');
        	})
		}
	});

});