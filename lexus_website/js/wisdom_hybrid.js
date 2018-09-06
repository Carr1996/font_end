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

$(window).load(function() {
	$(document).scroll(function() {
		//吸顶效果
		var top = $(this).scrollTop();
		if(top >= 60) {
			$('nav').css({
				backgroundColor: 'rgba(255,255,255,1)',
				position: 'fixed',
				top: '0px',
			});
			$('nav ul li a').css({
				color: 'rgb(95,95,95)'
			})
		} else {
			$('nav').css({
				backgroundColor: 'rgba(255,255,255,0)',
				position: 'absolute',
				top: '60px',
			});
			$('nav ul li a').css({
				color: 'rgb(255,255,255)'
			})
		}
	})

	$(document).on({
		'mouseout': function() {
			$('#dot_1').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_1').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_1');
	$(document).on({
		'mouseout': function() {
			$('#dot_2').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_2').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_2');
	$(document).on({
		'mouseout': function() {
			$('#dot_3').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_3').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_3');
	$(document).on({
		'mouseout': function() {
			$('#dot_4').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_4').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_4');

	$('#component-img>.dot').click(function() {
		var i = $(this).index() - 1;
		var str = '#show_dot_' + i + '';
		$('#show_dots_1').show();
		$('#show_dot_1').css({
			display: 'none'
		});
		$('#show_dot_2').css({
			display: 'none'
		});
		$('#show_dot_3').css({
			display: 'none'
		});
		$('#show_dot_4').css({
			display: 'none'
		});
		$(str).show(1000);
	});
	$('#close_dots_1').click(function() {
		$('#show_dots_1').hide(500);
	});

	$(document).on({
		'mouseout': function() {
			$('#dot_2_1').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_2_1').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_2_1');
	$(document).on({
		'mouseout': function() {
			$('#dot_2_2').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_2_2').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_2_2');
	$(document).on({
		'mouseout': function() {
			$('#dot_2_3').animate({
				width: '30px',
				height: '30px'
			}, 'slow', 'linear')
		},
		'mouseover': function() {
			$('#dot_2_3').animate({
				width: '80px',
				height: '80px'
			}, 'slow', 'linear')
		}
	}, '#dot_2_3');

	$('#component2-img>.dot').click(function() {
		var i = $(this).index() - 1;
		var str = '#show_dot_2_' + i + '';
		$('#show_dots_2').show();
		$('#show_dot_2_1').css({
			display: 'none'
		});
		$('#show_dot_2_2').css({
			display: 'none'
		});
		$('#show_dot_2_3').css({
			display: 'none'
		});
		$(str).show(1000);
	})
	$('#close_dots_2').click(function() {
		$('#show_dots_2').hide(500);
	});

	$(document).scroll(function() {
		var height = $(this).scrollTop();
		//	console.log(height);
		if(height > 800) {
			$('#top_share').show(800);
		} else {
			$('#top_share').hide(500);
		};

		$('#top').click(function() {
			$('html,body').scrollTop('0');
		});
	})
	$('#share').bind({
		mouseover: function() {
			$('#erweima').show(500);
		},
		mouseout: function() {
			$('#erweima').hide(500);
		}
	})
})