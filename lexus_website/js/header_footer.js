$(document).on({
	'mouseover': function() {
		$(this).find('.header-nav').css({
			display: 'block'
		});
	},
	'mouseout': function() {
		$(this).find('.header-nav').css({
			display: 'none'
		});
	},
},'#header_ul>li')
$(document).on({
	'mouseover': function() {
		var index = $(this).index();
		var rel_id = "li-2-2-" + (parseInt(index) + 1);
		$("#" + rel_id).css({display:'block'});
		if(index>0){
				$("#li-2-2-1").css({display:'none'});}
	},
	'mouseout': function() {
		var index = $(this).index();
		var rel_id = "li-2-2-" + (parseInt(index) + 1);
		$("#" + rel_id).css({display:'none'});
		$("#li-2-2-1").css({display:'block'});

	},
},'#li-2 #li-2-1 p');

$(document).on({
	'mouseover': function() {
		var index = $(this).index();
		var rel_id = "li-5-2-" + (parseInt(index) + 1);
		$("#" + rel_id).css({display:'block'});
		if(index>0){
				$("#li-5-2-1").css({display:'none'});}
	},
	'mouseout': function() {
		var index = $(this).index();
		var rel_id = "li-5-2-" + (parseInt(index) + 1);
		$("#" + rel_id).css({display:'none'});
		$("#li-5-2-1").css({display:'block'});
	},
},'#li-5 #li-5-1 p');