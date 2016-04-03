 

$(document).ready(function(){
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
			  breakpoint: 1300,
			  settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			}
		  ]		
	}); 	
	
});