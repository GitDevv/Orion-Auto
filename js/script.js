$(document).ready(function(){
	$('.show_popup_service').click(function(){
        $('.modal_container , .modal_service').fadeIn(200);
    });
	
	$('.show_popup_bus').click(function(){
        $('.modal_container , .modal_bus').fadeIn(200);
    });	
	
    $('.modal_container .close, .modal_container .close_modal').click(function(){
        $('.modal_container , .modal_bus , .modal_service').fadeOut(200);
		$("#bus, #service").trigger("reset");
    });	
	
	$("#bus").submit(function() {
		$.ajax({
			type: "POST",
			url: "write.php",
			data: $("#bus").serialize()
		}).done(function() {
            $("#bus").trigger("reset");
			alert("Спасибо за Ваш заказ, наш менеджер скоро свяжется с Вами!"); 
		});
		return false;
	}); 	
	$("#service").submit(function() {
		$.ajax({
			type: "POST",
			url: "write.php",
			data: $("#bus").serialize()
		}).done(function() {
            $("#service").trigger("reset");
			alert("Спасибо за Ваш заказ, наш менеджер скоро свяжется с Вами!"); 
		});
		return false;
	});	
	
	
	
	
	$('.wr_vd button').click(function(){
		$('.wr_vd button').removeClass('btn-warning');
		$(this).addClass('btn-warning');
	});
	
	$('.bus-slider').slick({
		dots:false,  
		slidesToShow: 1,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear',        
		prevArrow:'.calculator .wraper-bus-slider .cont-slider .prev',
		nextArrow:'.calculator .wraper-bus-slider .cont-slider .next'
	}); 
	
	$('.main_page .all-bus-slider').slick({
		dots:false,  
		slidesToShow: 4,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		  centerMode: true,
		fade: false,
		cssEase: 'linear',        
		prevArrow:'.autopark .wraper-bus-slider .cont-slider .prev',
		nextArrow:'.autopark .wraper-bus-slider .cont-slider .next',
		  centerPadding: '200px',
		  responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				centerMode: true,
				centerPadding: '210px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1240,
			  settings: {
				centerMode: true,
				centerPadding: '210px',
				slidesToShow: 2
			  }
			},			  
			{
			  breakpoint: 1100,
			  settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			}
		  ]		
	}); 
	
	$('.order_park .all-bus-slider').slick({
		dots:false,  
		slidesToShow: 3,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		  centerMode: false,
		fade: false,
		asNavFor: '.info_slide_auro',
		cssEase: 'linear',      
		draggable:false,		
		prevArrow:'.order_park .wraper-bus-slider .cont-slider .prev',
		nextArrow:'.order_park .wraper-bus-slider .cont-slider .next'	
	}); 	
  
	$('.all-news-slider').slick({
		dots:false,  
		slidesToShow: 4,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		  centerMode: true,
		fade: false,
		cssEase: 'linear',        
		prevArrow:'.block_news .wraper-bus-slider .cont-slider .prev',
		nextArrow:'.block_news .wraper-bus-slider .cont-slider .next',
		  centerPadding: '150px',
		  responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				centerMode: true,
				centerPadding: '200px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1200,
			  settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			}
		  ]		
	}); 	
 
	$('.comment-slider').slick({
		dots:false,  
		slidesToShow: 1,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		  centerMode: true,
		fade: false,
		cssEase: 'linear',        
		prevArrow:'.wraper-comment-slider .cont-slider .prev',
		nextArrow:'.wraper-comment-slider .cont-slider .next',
		  centerPadding: '350px',
		  responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			}
		  ]		
	}); 		
	
	$('.tehprocces-slider').slick({
		dots:false,  
		slidesToShow: 4,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		  centerMode: true,
		fade: false,
		cssEase: 'linear',        
		prevArrow:'.block_news .wraper-bus-slider .cont-slider .prev',
		nextArrow:'.block_news .wraper-bus-slider .cont-slider .next',
		  centerPadding: '150px',
		  responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				centerMode: true,
				centerPadding: '200px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1300,
			  settings: {
				centerMode: true,
				centerPadding: '150px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1200,
			  settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			}			  
		  ]		
	}); 	
		
	$('.info_slide_auro').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.order_park .all-bus-slider',
		dots: false,
		arrows:false,
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		speed: 500,	
		draggable:false,
		cssEase: 'linear'
	});
	
	$('.team-slider').slick({
		dots:false,  
		slidesToShow: 4,
		slidesToScroll: 1,     
		infinite: true,
		speed: 500,
		  centerMode: true,
		fade: false,
		cssEase: 'linear',        
		prevArrow:'.wraper-team-slider .cont-slider .prev',
		nextArrow:'.wraper-team-slider .cont-slider .next',
		  centerPadding: '150px',
		  responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				centerMode: true,
				centerPadding: '200px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1200,
			  settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			}
		  ]		
	}); 	
	
	
	$('.line_town img').click(function(){
		$('.line_town').toggleClass('active');
	});
	
//	$('.column.first').mouseenter(function () {
//		$('.column.first').addClass('active');
//	});
//
//	$('.column.first').mouseleave(function () {
//		$('.column.first').removeClass('active');
//	});

	$('.column').hover(function () {
		if($(this).hasClass('first')){
			$('.column').removeClass('active');
			$('.column.first').addClass('active');
		};
		if($(this).hasClass('two')){
			$('.column').removeClass('active');
			$('.column.two').addClass('active');
		};
		if($(this).hasClass('three')){
			$('.column').removeClass('active');
			$('.column.three').addClass('active');
		};	
		if($(this).hasClass('four')){
			$('.column').removeClass('active');
			$('.column.four').addClass('active');
		};
		if($(this).hasClass('five')){
			$('.column').removeClass('active');
			$('.column.five').addClass('active');
		};	
		if($(this).hasClass('six')){
			$('.column').removeClass('active');
			$('.column.six').addClass('active');
		};			
	});

	$('.column').mouseleave(function () {
		$('.column').removeClass('active');
	});

	$("a.grouped_elements").fancybox();
	$("a.box").fancybox();	
	$("a.box_main").fancybox();	
	
});