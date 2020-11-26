$(document).ready(function () {
	$('#mobile-menu').on('click', function () {
		$('.navbar').slideToggle()
	});
	var appear = false;
	var pagetop = $('#page_top');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //100pxスクロールしたら
			if (appear == false) {
				appear = true;
				pagetop.stop().animate({
					'right': '0px' //右から0pxの位置に
				}, 300); //0.3秒かけて現れる
			}
		} else {
			if (appear) {
				appear = false;
				pagetop.stop().animate({
					'right': '-100px' //右から-100pxの位置に
				}, 300); //0.3秒かけて隠れる
			}
		}
	});
	pagetop.click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 500); //0.5秒かけてトップへ戻る
		return false;
	});
});
