var colorPath = 'Template/Default/Skin/wy/image/';
var goodsPath = 'Template/Default/Skin/wy/tiyanguan/';
var path = '';
var sName = '';
var TYG = {
	init: function () {
		this.events();
		$('.left_nav li').eq(0).trigger('click');
		
	},
	events:function () {
		var _this = this;
		//点击“体验产品”的导航栏
		$('.left_nav li').click(function () {
			$('.left_nav li a').removeClass('active');
			$(this).find('a').addClass('active');
			var index = $(this).index();
			//名称
			sName = $(this).find('span').text();
			$('#nav_name').text(sName);
			//产品配色
			var data = preData[index];
			path = data.path;
			for (var i = 0; i < data.color.length; i++) {
				var imgUrl = colorPath + data.color[i]+'_01.png';
				var col = data.color[i];
				$('.color_list img').eq(i).attr({
					'src': imgUrl,
					'data-color': col
				});
				//配色名称
				for (var j = 0; j < colorArr.length; j++) {
					var tmp = colorArr[j];
					if (col === tmp.val) {
						var name = tmp.name;
						$('.color_name li').eq(i).text(name);
					}
				}
			}
			//场景
			var scene = data.scene;
			$('.product_cj li').removeClass('active');
			$('.product_cj li').eq(scene).addClass('active');
			//产品结构图
			var structure = goodsPath + path + '/01.png';
			$('#structure_chart img').attr('src', structure);
			//默认展示第一张大图
			$('.color_list li').eq(0).trigger('click');
		});
		//选择产品配色
		$('.color_list li').click(function () {
			var aImg = $('.color_list li img');
			var oImg = $(this).find('img');
			var preSrc = oImg.attr('src');
			
			for (var i = 0; i < aImg.length; i++) {
				var src = aImg.eq(i).attr('src');
				src = src.replace(/2/, '1');
				aImg.eq(i).attr('src', src);
			}
			preSrc = preSrc.replace(/1/, '2');
			oImg.attr('src', preSrc);
			//展示产品大图
			var color = oImg.attr('data-color');
			var imgSrc = goodsPath + path + '/' + color + '.jpg';
			$('.tiyanchuang img').attr('src', imgSrc);
		});
		//点击场景
		$('.product_cj li').click(function () {
			var str= $(this).attr('data-index');
			var arr = str.split(',');
			var num = _this.GetRandomNum(0,arr.length-1);
			var num2 = arr[num];
			$('.left_nav li').eq(num2).trigger('click');
		});
		//点击产品结构图
		$('#structure_chart').click(function () {
			sessionStorage.setItem('path', path);
			sessionStorage.setItem('sName', sName);
			var href = window.location.href;
			href = href.replace(/tiyanguan/, 'detail');
			window.open(href);
		});
	},
	GetRandomNum: function (Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}  
}
$(function () {
	TYG.init();
});
