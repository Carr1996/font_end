var mySwiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	direction: 'horizontal',
	loop: true,
	//分页器
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true',
	},
	//前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})


$(document).scroll(function() {
	var height = $(this).scrollTop();
	//	console.log(height);
	if(height > 800) {
		$('#top_share').show(800);
	} else {
		$('#top_share').hide(500);
	}

	$('#top').click(function() {
		$('html,body').scrollTop('0');
	})
})
$('#share').bind({
	mouseover: function() {
		$('#erweima').show(500);
	},
	mouseout: function() {
		$('#erweima').hide(500);
	}
})