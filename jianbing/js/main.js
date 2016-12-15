

$(document).ready(function(){
	$("img.lazy").lazyload({
		effect: "fadeIn",
		threshold: "100px",
		failurelimit: 5
	});
	
	/**
		1: 300px
		2: 1100px;
		3: 1900px;
		4: 2700px;
		5: 3700px;
		6: 4500px;
		7: 5300px;
		8: 6100px;
		9: 7000px;
	*/
	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 100 )
		{
			$(".img1-title").css({
				"transition" : "1s",
				"left" : "20%",
				"font-size" : "70px",
				"opacity" : "1"
			});
			$(".img1-line").css({
				"transition" : "1s",
				"opacity" : "1",
				"top" : "250px"
			});
			$(".en-name").css({
				"transition" : "all 1s 1s",
				"opacity" : "1",
				"top" : "260px"
			});
			$(".cn-name").css({
				"transition" : "all 1s 1s",
				"opacity" : "1",
				"top" : "300px"
			});
			$(".img1-price").css({
				"transition" : "all 1s 2s",
				"opacity" : "1",
				top: "450px"
			});
		}
		
		if(scrollTop > 1100)
		{
			$(".img2-title").css({
				"transition" : "all 1s",
				opacity : "1",
				top : 	"300px"
			});
			
			$(".img2-txt1").css({
				"transition" : "all 1s 1s",
				opacity : "1",
				top : "430px"
			});
			
			$(".img2-txt2").css({
				transition : "all 1s 2s",
				opacity : "1",
				top : "500px"
			});
		}
		
		if(scrollTop > 1900)
		{
			$(".img3-title").css({
				"transition" : "all 1s",
				opacity : "1",
				top : "200px"
			});
			$(".img3-para").css({
				transition : "all 1s 1s",
				opacity : "1"
			});
		}
		
		if(scrollTop > 2700)
		{
			$(".img4-title").css({
				transition : "all 1s",
				opacity : "1",
				top: "120px"
			});
			$(".list1").css({
				transition : "all 1s 1s",
				opacity : "1",
				left: "70%"
			});
			$(".list2").css({
				transition : "all 1s 2s",
				opacity : "1",
				left: "60%"
			});
			$(".list3").css({
				transition : "all 1s 3s",
				opacity : "1",
				left : "80%"
			});
			$(".list4").css({
				transition : "all 1s 4s",
				opacity : "1",
				left : "70%"
			});
		}
		
		if(scrollTop > 3700)
		{
			$(".img5-title").css({
				transition : "all 1s",
				opacity : "1"
			});
			$(".img5-txt").css({
				transition : "all 1s 1s",
				opacity : "1"
			});
		}
		
		if(scrollTop > 4500)
		{
			$(".quote").css({
				transition : "all 1s",
				opacity : "1",
				top : "300px"
			});
			$(".img6-title1").css({
				transition : "all 1s .5s",
				opacity : "1",
				left: "50%"
			});
			$(".img6-title2").css({
				transition : "all 1s .5s",
				opacity : "1",
				left: "70%"
			});
			$(".long-line").css({
				transition : "all 1s 1s",
				width : "600px",
				opacity : "1",
				top : "560px",
				left : "47%"
			});
			$(".brand").css({
				transition : "all 1s 1.5s",
				top : "600px",
				opacity : "1",
				left : "60%"
			});
		}
		
		if(scrollTop > 5300)
		{
			$(".frame").css({
				transition : "all .5s",
				opacity : "1"
			});
			$(".img7-title").css({
				transition : "all 1s",
				opacity : "1",
				top : "660px"
			});
			$(".search").css({
				transition : "1s .5s",
				opacity : "1"
			});
			$(".version1").css({
				transition : "all 1s 1s",
				opacity : "1",
				top : "780px"
			});
			$(".version2").css({
				transition : "all 1s 2s",
				opacity : "1",
				top : "780px"
			});
			$(".version3").css({
				transition : "all 1s 3s",
				opacity : "1",
				top : "780px"
			});
		}
		
		if(scrollTop > 6100)
		{
			$(".img8-title").css({
				transition : "1s",
				opacity : "1"
			});
			$(".history").css({
				transition : "1s .5s",
				opacity : "1"
			});
			$(".jb-title").css({
				transition : "1s 1s",
				opacity : "1",
				top : "350px"
			});
			$(".jb-intro").css({
				transition : "1s 2s",
				opacity : "1",
				top : "400px"
			});
			$(".jb-txt").css({
				transition : "1s 3s",
				opacity : "1",
				top : "550px"
			});
			
		}
		
		if(scrollTop > 7000)
		{
			$(".img9-title").css({
				transition : ".5s",
				top : "250px",
				opacity : "1"
			});
			$(".jb-concept").css({
				transition : "1s .5s",
				top : "350px",
				opacity : "1"
			});
			$(".jb-material").css({
				transition : "1s 1.5s",
				top : "430px",
				opacity : "1"
			});
			$(".jb-price").css({
				transition : "1s 2.5s",
				left : "20%",
				opacity : "1"
			});
			$(".wait").css({
				transition : "1s 3.5s",
				top : "630px",
				opacity : "1"
			});
			$(".buy-now").css({
				transition : "1s 4.5s",
				top : "700px",
				opacity : "1"
			});
		}
	});
	
});

