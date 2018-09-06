
function success_append(name) {
	$.each(name, function(index, data) {
		str = `<div class="new_content">
					<div class="col-xs-3 page-left">
						<a href=""><img src="../${data.src}"/></a>
					</div>
					<div class="col-xs-9 page-right">
						<p class="page-title"><a href="">${data.title}</a></p>
						<p class="page-desc">${data.content}</p>
						<p class="page-date">${data.date}</p>
					</div>
				</div>`;
		$('#rel_content').append(str);
	});
};

if($('#select_prov').val() == "all") {
	$.ajax({
		type: "get",
		url: "../news_content.json",
		async: true,
		dataType: 'json',
		success: function(msg) {
			console.log('success');
			$('#rel_content').html("");
			success_append(msg.time20181);
		},
		error: function() {
			console.log('failed');
		}
	});
	$(window).bind({
		'scroll': scrolllisten
	});

	function scrolllisten() {
		var top = $(document).scrollTop();
		var winH = $(window).height();
		var nowH = top + winH;
		var goodsH = $('.new_content:last').offset().top + 300;
		//		console.log(nowH);
		if(nowH > goodsH && nowH < 2000) {
			$.ajax({
				type: "get",
				url: "../news_content.json",
				async: true,
				dataType: 'json',
				success: function(msg) {
					console.log('success');
					success_append(msg.time20182);
				},
				error: function() {
					console.log('failed');
				}
			});
		} else if(nowH > goodsH && nowH < 3000) {
			$.ajax({
				type: "get",
				url: "../news_content.json",
				async: true,
				dataType: 'json',
				success: function(msg) {
					console.log('success');
					success_append(msg.time20183);
				},
				error: function() {
					console.log('failed');
				}
			});
		} else if(nowH > goodsH && nowH < 4000) {
			$.ajax({
				type: "get",
				url: "../news_content.json",
				async: true,
				dataType: 'json',
				success: function(msg) {
					console.log('success');
					success_append(msg.time20171);
				},
				error: function() {
					console.log('failed');
				}
			});
		} else if(nowH > goodsH && nowH < 5000) {
			$.ajax({
				type: "get",
				url: "../news_content.json",
				async: true,
				dataType: 'json',
				success: function(msg) {
					console.log('success');
					success_append(msg.time20172);
				},
				error: function() {
					console.log('failed');
				}
			});
		} else if(nowH > goodsH && nowH < 6000) {
			$.ajax({
				type: "get",
				url: "../news_content.json",
				async: true,
				dataType: 'json',
				success: function(msg) {
					console.log('success');
					success_append(msg.time20173);
				},
				error: function() {
					console.log('failed');
				}
			});
		}
	};

};

function changenews() {
	console.log($('#select_prov').val());
	if($('#select_prov').val() == 2018) {
		//			alert(2018)
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				$('#rel_content').html("");
				success_append(msg.time20181);
			},
			error: function() {
				console.log('failed');
			}
		});
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				success_append(msg.time20182);
			},
			error: function() {
				console.log('failed');
			}
		});
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				success_append(msg.time20183);
			},
			error: function() {
				console.log('failed');
			}
		});
		$(window).unbind({
			'scroll': scrolllisten
		});
	} else if($('#select_prov').val() == 2017) {
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				$('#rel_content').html("");
				success_append(msg.time20171);
			},
			error: function() {
				console.log('failed');
			}
		});
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				success_append(msg.time20172);
			},
			error: function() {
				console.log('failed');
			}
		});
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				success_append(msg.time20173);
			},
			error: function() {
				console.log('failed');
			}
		});
		$(window).unbind({
			'scroll': scrolllisten
		});
	} else if($('#select_prov').val() == "all") {
		$.ajax({
			type: "get",
			url: "../news_content.json",
			async: true,
			dataType: 'json',
			success: function(msg) {
				console.log('success');
				$('#rel_content').html("");
				success_append(msg.time20181);
			},
			error: function() {
				console.log('failed');
			}
		});
		$(window).bind({
			'scroll': scrolllisten
		});
	};

};
$(document).scroll(function() {
	var height = $(this).scrollTop();
	//	console.log(height);
	if(height > 1000) {
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
});
