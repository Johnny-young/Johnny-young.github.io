/**
*	图片懒加载
*
*/
(function($) {
	$(document).ready(function(){
		var $imgs = $(".lazy:gt(0)");

		//var scrollTop = $(document).scrollTop();
		//初始化设置
	/*	$imgs.each(function() {
			console.log(Math.abs($(this).offset().top - scrollTop));
			if(Math.abs($(this).offset().top - scrollTop) <= 700) {
				console.log($(this));
				loadImg(scrollTop, $(this));
			}
		});
	*/
		//鼠标滚动懒加载
		$(document).scroll(function() {
			var scrollTop = $(this).scrollTop();
			$imgs.each(function() {
				var $img = $(this);
				if(!$(this).attr("src")) {
					loadImg(scrollTop, $img, 1000);
				}
			});
		});

		function loadImg(scrollTop, $img, space) {
			space = space || 0;
			if($img.offset().top <= (scrollTop + space)) {
				var src = $img.attr("data-original");
				$img.attr("src", src).fadeIn(500);
				return false;
			}
		}
	});
}($));