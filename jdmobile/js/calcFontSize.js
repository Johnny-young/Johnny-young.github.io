;(function(win, doc) {
	//获取根元素
	var html = doc.getElementsByTagName("html")[0],
	//判断是旋转还是resize事件
			evnt = "orientationchange" in window ? "orientation" : "resize",
			recalc = function() {
				var viewWidth = doc.documentElement.width;
				if(!viewWidth) return;
				html.style.fontStyle = viewWidth / 750 * 12 + "px";
			};

			if(!doc.addEventerListener) return;
			win.addEventerListener(evnt, recalc, false);
			doc.addEventerListener("DOMContentloaded", recalc, false)
}(window,document));