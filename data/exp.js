//0-卧室  1-厨房  2-户外  3-客厅
//pine-小松木 teak-沙面柚木 champagne-香槟色 silvery-银白电泳 buffing-香槟抛光 burning-氧化香槟  gold-电泳金色  wave-电泳波沙银白
var colorArr = [
	{
		'val': 'black',
		'name': '黑色'
	},
	{
		'val': 'gray',
		'name': '灰色'
	},
	{
		'val': 'silvery',
		'name': '银白电泳'
	},
	{
		'val': 'pine',
		'name': '小松木'
	},
	{
		'val': 'lightblue',
		'name': '浅蓝色'
	},
	{
		'val': 'teak',
		'name': '沙面柚木'
	},
	{
		'val': 'white',
		'name': '白色'
	},
	{
		'val': 'champagne',
		'name': '香槟色'
	},
	{
		'val': 'brown',
		'name': '棕色'
	},
	{
		'val': 'lightbrown',
		'name': '浅棕色'
	},
	{
		'val': 'gold',
		'name': '电泳金色'
	},
	{
		'val': 'yellow',
		'name': '黄色'
	},
	{
		'val': 'wave',
		'name': '电泳波沙银白'
	},
	{
		'val': 'buffing',
		'name': '香槟抛光'
	},
	{
		'val': 'burning',
		'name': '氧化香槟'
	},
	{
		'val': 'blue',
		'name': '蓝色'
	}
];
var preData = [
	{//1
		'path': 'WT90A',  //文件夹名称
		'scene': 2,  //对应场景坐标
		'structure_chart': '01.png',  //产品结构图
		'color': ['black', 'gray', 'silvery', 'pine']  //产品配色&对应的大图名称
	},
	{//2
		'path': 'WY-2001C',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['black', 'lightblue', 'teak', 'silvery']
	},
	{//3
		'path': 'wjy90',
		'scene': 3,
		'structure_chart': '01.png',
		'color': ['white', 'champagne', 'gray', 'teak']
	},
	{//4
		'path': 'WP50',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['black', 'teak', 'white', 'brown']
	},
	{//5
		'path': 'WY50',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['lightbrown', 'gray', 'pine', 'brown']
	},
	{//6
		'path': 'WY55GR',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['black', 'white', 'pine', 'gray']
	},
	{//7
		'path': 'WY86G',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['white', 'black', 'teak', 'champagne']
	},
	{//8
		'path': 'WY888A',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['black', 'gray', 'pine', 'white']
	},
	{//9
		'path': 'WY-PW70',
		'scene': 0,
		'structure_chart': '01.png',
		'color': ['white', 'gray', 'pine', 'champagne']
	},
	{//  10
		'path': '76GTM',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['white', 'gray', 'pine', 'champagne']
	},
	{//11
		'path': 'WT86',
		'scene': 0,
		'structure_chart': '01.png',
		'color': ['white', 'black', 'yellow', 'brown']
	},
	{//12
		'path': 'WTLM90',
		'scene': 1,
		'structure_chart': '01.png',
		'color': ['black', 'gray', 'teak', 'silvery']
	},
	{//13
		'path': 'WY85GT',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['silvery', 'blue', 'gray', 'black']
	},
	{//14
		'path': 'WPM70A',
		'scene': 0,
		'structure_chart': '01.png',
		'color': ['white', 'gray', 'champagne', 'pine']
	},
	{//15
		'path': 'WY46',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['white', 'gray', 'champagne', 'brown']
	},
	{//16
		'path': 'WY60GT',
		'scene': 3,
		'structure_chart': '01.png',
		'color': ['black', 'gray', 'pine', 'silvery']
	},
	{//17
		'path': 'WYGRJ55',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['black', 'brown', 'teak', 'silvery']
	},
	{//18
		'path': 'wjy50',
		'scene': 3,
		'structure_chart': '01.png',
		'color': ['white', 'black', 'champagne', 'teak']
	},
	{//19
		'path': 'wjy90b',
		'scene': 1,
		'structure_chart': '01.png',
		'color': ['yellow', 'silvery', 'gray', 'pine']
	},
	{//20
		'path': 'wjy100',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['black', 'silvery', 'pine', 'gray']
	},
	{//21
		'path': 'wy65',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['buffing', 'burning', 'teak', 'brown']
	},
	{//22
		'path': 'wy140',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['gold', 'black', 'yellow', 'wave']
	},
	{//23
		'path': 'hhm',
		'scene': 2,
		'structure_chart': '01.png',
		'color': ['champagne', 'gray', 'pine', 'teak']
	}
];