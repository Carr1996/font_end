$(window).load(function() {
	$('#seriers_content ul li').click(function() {
		$('#seriers_content ul li').css({
			background: '',
			border: '1px solid rgb(235,235,235)'
		});
		$(this).css({
			background: 'rgb(240,240,240)',
			border: '1px solid rgb(161, 210, 207)'
		});
		$('html,body').animate({
			scrollTop: '918px'
		}, 500, 'swing');
		//		console.log($(this).index());
		i = $(this).index();
		address = '#type_content ul:eq(' + i + ')';
		//		console.log($(address).text());
		$('#type_content ul').hide(0);
		$(address).slideToggle(800);
	});
	$('#type_content ul li').click(function() {
		$('#type_content ul li').css({
			background: '',
			border: '1px solid rgb(235,235,235)'
		});
		$(this).css({
			background: 'rgb(240,240,240)',
			border: '1px solid rgb(161, 210, 207)'
		});
	});
	$(document).scroll(function() {
		var height = $(this).scrollTop();
//		console.log(height);
		if(height > 920) {
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
});


var regionList = [];
regionList['北京'] = ['北京'];
regionList['广东'] = ['广州', '深圳', '佛山', '东莞', '中山', '珠海', '惠州'];
regionList['重庆'] = ['重庆'];
regionList['黑龙江'] = ['哈尔滨', '大庆'];
regionList['江苏']=['南京','苏州','无锡','南通']
var shopList=[];
shopList['北京']=['北京广通','北京博瑞','北京英华','北京花园桥','北京庞大','北京和凌','北京博瑞翔腾'];
shopList['广州']=['广州中升','广州鸿粤','广州骏佳','广州长悦','广州永佳','广州中升增悦','广州科城骏佳'];
shopList['深圳']=['深圳大兴','深圳中升','深圳深业','深圳潮峰','深圳宝安中升','深圳深业卫星展厅','深圳观澜中升','深圳晨兴'];
shopList['佛山']=['佛山骏领','顺德中升','佛山汇恒','佛山美兴','佛山中升','佛山海八骏领'];
shopList['东莞']=['东莞美东','东莞中升','东莞虎门中升','东莞常平中升'];
shopList['中山']=['中山益华','中山中裕'];
shopList['珠海']=['珠海美东'];
shopList['惠州']=['惠州中升'];
shopList['重庆']=['重庆和凌','重庆中升'];
shopList['哈尔滨']=['哈尔滨龙晟'];
shopList['大庆']=['大庆庞大庆鸿'];
shopList['南京']=['江苏中佳','南京协众','南京中升'];
shopList['苏州']=['苏州常隆','苏州中升','昆山中升','吴江庆丰','常熟伟杰','张家港伟杰'];
shopList['无锡']=['无锡常隆','江阴中进','无锡中升','宜兴伟杰'];
shopList['南通']=['南通东方嘉宇','南通文峰'];
function add_prov() {
	for(var i in regionList) {
		var prov = "<option value=" + i + ">" + i + "</option>";
		$('#select_prov').append(prov);
	}
};
add_prov();

function changecity() {
	$('#select_city').html('<option>请选择城市</option>')
	for(var i in regionList[$('#select_prov').val()]){
		var city="<option value=" +regionList[$('#select_prov').val()][i]+ ">" +regionList[$('#select_prov').val()][i]+ "</option>";
		$('#select_city').append(city);
	}
};
function changeshop(){
	$('#select_shop').html('<option>请选择经销商</option>');
	for(var i in shopList[$('#select_city').val()]){
		var shop="<option value=" +shopList[$('#select_city').val()][i]+ ">" +shopList[$('#select_city').val()][i]+ "</option>"
		$('#select_shop').append(shop);
	}
	
}
