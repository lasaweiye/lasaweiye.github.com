var goodsPath = 'Template/Default/Skin/wy/tiyanguan/';
$(function () {
	var path = sessionStorage.getItem('path');
	var sName = sessionStorage.getItem('sName');
	$('#nav_name').text(sName);
	var src = goodsPath + path + '/0.jpg';
	$('.product_content img').attr('src', src);
});
