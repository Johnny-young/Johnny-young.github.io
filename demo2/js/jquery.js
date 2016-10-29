
//jQuery制作的效果
$(document).ready(function(){
	var i = 1;
	setInterval(function() {
		
		i++;
		i > 3 && (i = 1);
		$(".ct-focus").css("background","url(./image/focus" + i + ".png) no-repeat");
	},3000);
	
	$(".map-mask").on("mouseenter",function(){
		$(this).addClass("map-mask-hover");
	}).on("mouseout",function(){
		$(this).removeClass("map-mask-hover");
	});
});
