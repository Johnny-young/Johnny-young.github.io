window.onload = function() {


	var swiper1 = new Swiper(".swiper1", {
		autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
		autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		pagination : '.swiper-pagination',//下面的图标跟随切换
		loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
	});

	var swiper2 = new Swiper(".swiper2", {
		initialSlide: 0,
		speed: 1000,
		observer: true,
		observeParents: true,
		slidePerView: 3,
		effect: "slide",
		grabCursor: true
	});

	var swiper3 = new Swiper(".adv1,.adv2,.adv3", {
		autoplay: 1500,
		autoplayDisableOnInteraction: false,
		initialSlide: 0,
		observer: true,
		observeParents: true,
		pagination: ".swiper-pagination",
		loop: true
	});

	//滚动事件
	var search = document.getElementById("header");
	var toTop = document.getElementsByClassName("to-top")[0];
	window.onscroll = function() {
		var top = document.body.scrollTop;
		//搜索栏背景颜色改变
		search.style.background = top > 0 ? "linear-gradient(rgba(208,55,67,0.9),rgba(208,55,67,0.3))" : "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.1))";
		//回到顶部按钮出现、隐藏切换
		toTop.style.display = top > 100 ? "block" : "none";
	};

	//回到顶部
	toTop.addEventListener("touchend", function() {
		document.body.scrollTop = 0;
	});

	//倒计时
	var time = document.getElementsByClassName("time")[0],
			hour = time.getElementsByClassName("hour")[0],
			min = time.getElementsByClassName("min")[0],
			sec = time.getElementsByClassName("sec")[0];

	function countTime(num) {
		
	}

};