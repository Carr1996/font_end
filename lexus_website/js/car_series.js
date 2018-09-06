$(window).load(function(){
	$(document).scroll(function() {
		var height = $(this).scrollTop();
//		console.log(height);
		if(height > 540) {
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
})
