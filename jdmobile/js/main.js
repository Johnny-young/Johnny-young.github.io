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


};