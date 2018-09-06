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
	$('#map-list').html('');
	for(var i in shopList[$('#select_city').val()]){
		var shop="<li>" +shopList[$('#select_city').val()][i]+ "</li>"
		$('#map-list').append(shop);
	}	
};
$(document).on({
	'click':function(){
//		console.log($(this).text());
	var rel_shop=$(this).text();
	find_shop(rel_shop+'雷克萨斯');
	},
	'mouseover':function(){
		$(this).css({color:'black'});
	},
	'mouseout':function(){
		$(this).css({color:'#666666'});
	}
},'#map-list>li')





//创建和初始化地图函数：
function initMap() {
	createMap(); //创建地图
	setMapEvent(); //设置地图事件
	addMapControl(); //向地图添加控件
}

//创建地图函数：
function createMap() {
	var map = new BMap.Map("baidu_map"); //在百度地图容器中创建一个地图
	var point = new BMap.Point(104.114129, 37.550339); //定义一个中心点坐标
	map.centerAndZoom(point, 5); //设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
	map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
	map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE
	});
	map.addControl(ctrl_nav);
	//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({
		anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
		isOpen: 1
	});
	map.addControl(ctrl_ove);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({
		anchor: BMAP_ANCHOR_BOTTOM_LEFT
	});
	map.addControl(ctrl_sca);
}

initMap(); //创建和初始化地图
function find_shop(shop){
		var local = new BMap.LocalSearch(map, {
		renderOptions: {
			map: map
		}
	});
	local.search(shop);
}

$(document).scroll(function() {
	var height = $(this).scrollTop();
	//	console.log(height);
	if(height > 200) {
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