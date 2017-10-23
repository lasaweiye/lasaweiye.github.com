var navArr = ['','summary.html','tiyanguan.html','aluminum.html','contact.html'];
var href = 'http://lasaweiye.coding.me';
$(function () {
	$('.nav li').click(function () {
		var index = $(this).index();
		var newHref = href + '/' + navArr[index];
		window.location.href = newHref;
	});
});
