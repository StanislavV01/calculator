var a = 0;
var b = 0;
var c = 0;
var timer1;
var timer2;
var timer3;

$(window).on('load', function () {
	
	$('#clone').hover(
	function(){
		c = 1;
		clearTimeout(timer3);
	},
	function(){
		c = 0;
			timer3 = setTimeout(show2, 2000);
	});
	
	function show2() {
		//пауза после скролла
		var scr2 = $(this).scrollTop();
		//console.log(scr2);
		if(c == 0 && scr2 > 50){
			b = 1;
			$('#clone').animate({opacity: '0'}, 200);
			$('#clone').delay(200).animate({top: '-100px'}, 0);
		}
	}
	
	// Внизу копия
	if($('#newblocks .cont .news').text().length != 0 && $('#newblocks .cont .news').css('display') == 'block'){
	console.log(111);
	var aaa;
	var bbb;
	var l;
	$('#newblocks .cont .news ul li a').each(function() {
		aaa = 0;
		bbb = 0;
		//console.log($(this).index('#newblocks .cont .news.ver1 ul li a'));
		//console.log($(this).text());
		$(this).text($(this).attr('title'));
		while (aaa != 1) {
			var t = $(this).text();
			var aa = $(this).height();
			var bb = parseInt($(this).css('line-height'));
			var cc = aa/bb;
			//console.log(aa);
			//console.log(bb);
			//console.log(cc);
			if(cc > 2){
				t = t.slice(0, -1);
				//console.log(t);
				$(this).text(t);
				bbb = 1;
			} else {
				if(bbb == 1){
					t = t.slice(0, -3);
					l = t.slice(-1);
					if(l == ' ' || l == '.' || l == ',' || l == '?'){
						t = t.slice(0, -1);
					}
					l = t.slice(-1);
					if(l == ' ' || l == '.' || l == ',' || l == '?'){
						t = t.slice(0, -1);
					}
					t = t+'&#8230;';
					$(this).html(t);
					$(this).addClass('justify');
				} else {
					$(this).removeClass('justify');
				}
				aaa = 1;
			}
		}
		//console.log('---');
    });
	};
	//
	
//
var hhhh = 0;
var hhhh2 = 0;
if($('#content .yellow-cont table.resize').html() != '' && $('#content td.hide3').css('display') == 'none'){
	hhhh = $('#content .yellow-cont table.resize').height() - $('#content .move .prices .price').height();
	hhhh2 = $('#content .yellow-cont table.resize').height() - 3;
	hhhh = hhhh/2;
	$('#content .move .prices .price .desc').css('padding-top',hhhh+8+'px');
	$('#content .move .prices .price .desc').css('padding-bottom',hhhh+8+'px');
	$('#content .move .prices .price').height(hhhh2);
}
//

//
var h0hhh = 0;
var h0hhh2 = 0;
if($('#content .getheight').html() != '' && $('#content table.carfax tr td').css('display') != 'block'){
	h0hhh = $('#content .getheight').height() - $('#content .price.th5.new').height();
	h0hhh2 = $('#content .price.th5.new .scrollbar-inner').height();
	$('#content .price.th5.new .scrollbar-inner').height(h0hhh2 + h0hhh - 12);
}
//
	
});

$(window).scroll(function(){

	clearTimeout(timer1);
	timer1 = setTimeout(again, 200);
	function again() {
		a = 0;
	}
	if(a == 0 && b == 1){
		//видит начало скролла
		$('#clone').animate({top: '0px'}, 0);
		$('#clone').animate({opacity: '1'}, 200);
		a = 1;
		b = 0;
	}
	
	clearTimeout(timer2);
	timer2 = setTimeout(show, 2000);
	function show() {
		var scr = $(this).scrollTop();
		//console.log(scr);
		//пауза после скролла
		if(c == 0 && scr > 50){
			b = 1;
			$('#clone').animate({opacity: '0'}, 200);
			$('#clone').delay(200).animate({top: '-100px'}, 0);
			//console.log($(this).scrollTop());
		}
	}
	
	
});

$(window).resize(function() {
	
	//console.log('resize');
	//
	if($('#newblocks .cont .news').text().length != 0 && $('#newblocks .cont .news').css('display') == 'block'){
	console.log(222);
	console.log($('#newblocks .cont .news').text().length);
	console.log($('#newblocks .cont .news').css('display'));
	var aaa;
	var bbb;
	var l;
	$('#newblocks .cont .news ul li a').each(function() {
		aaa = 0;
		bbb = 0;
		//console.log($(this).index('#newblocks .cont .news.ver1 ul li a'));
		//console.log($(this).text());
		$(this).text($(this).attr('title'));
		while (aaa != 1) {
			var t = $(this).text();
			var aa = $(this).height();
			var bb = parseInt($(this).css('line-height'));
			var cc = aa/bb;
			//console.log(aa);
			//console.log(bb);
			//console.log(cc);
			if(cc > 2){
				t = t.slice(0, -1);
				//console.log(t);
				$(this).text(t);
				bbb = 1;
			} else {
				if(bbb == 1){
					t = t.slice(0, -3);
					l = t.slice(-1);
					if(l == ' ' || l == '.' || l == ',' || l == '?'){
						t = t.slice(0, -1);
					}
					l = t.slice(-1);
					if(l == ' ' || l == '.' || l == ',' || l == '?'){
						t = t.slice(0, -1);
					}
					t = t+'&#8230;';
					$(this).html(t);
					$(this).addClass('justify');
				} else {
					$(this).removeClass('justify');
				}
				aaa = 1;
			}
		}
		//console.log('---');
    });
	};
	//


//
var hhhhh = 0;
var hhhhh2 = 0;
if($('#content .yellow-cont table.resize').html() != '' && $('#content td.hide3').css('display') == 'none'){
	hhhhh = $('#content .yellow-cont table.resize').height() - $('#content .move .prices .price').height();
	hhhhh2 = $('#content .yellow-cont table.resize').height() - 3;
	hhhhh = hhhhh/2;
	$('#content .move .prices .price .desc').css('padding-top',hhhhh+8+'px');
	$('#content .move .prices .price .desc').css('padding-bottom',hhhhh+8+'px');
	$('#content .move .prices .price').height(hhhhh2);
}
//

//
var h0hhhh = 0;
var h0hhhh2 = 0;
if($('#content .getheight').html() != '' && $('#content table.carfax tr td').css('display') != 'block'){
	h0hhhh = $('#content .getheight').height() - $('#content .price.th5.new').height();
	h0hhhh2 = $('#content .price.th5.new .scrollbar-inner').height();
	$('#content .price.th5.new .scrollbar-inner').height(h0hhhh2 + h0hhhh - 12);
}
//
	
});