
$(document).ready(function(){
	
	//购物车
	$(".shop-icon").mouseenter(function(){
		$(".shop-menu:animated").stop(true,true);			//清除正在动画中的元素
		$(".shop-menu").slideDown(200);
	})
	$(".tp-shopcar").mouseleave(function(){
		$(".shop-menu").slideUp(200);
	});
	
	//导航栏
	$(".li-item:gt(0)").each(function(){
		$(this).mouseenter(function(){
			$(".item:animated").stop(true,true);			//清除正在动画中的元素
			$(".item").each(function(){
				$(this).hide();
			});
			$(this).next().slideDown(300);
		}).mouseleave(function(event){
			/* console.log(event.relatedTarget.nodeName); */
			if(event.relatedTarget.nodeName == "LI")
			{
				$(this).next().mouseenter(function(){
					$(this).show();
				}).mouseleave(function(){
					$(this).slideUp();
				});
			}else{
				$(this).next().slideUp();
			}
		});  
	});
	/* $(".hd-nav li").mouseleave(function(event){
		
		$(".li-item:gt(0)").each(function(){
			$(this).next().slideUp();
		});
	}); */
	
	//搜索框
	$(".search-txt").focus(function(){
		$(".sr-rec span").hide();
		$(".sr-list").slideDown(200);
	}).blur(function(){
		$(".sr-rec span").show();
		$(".sr-list").slideUp(200);
	});
	
	//轮播图
	var inx = 0;
	var timer = null;
	$(".dots a").each(function(index){
		/* index = index; */
		$(this).click(function(){
			inx = index;
			show(inx);
		});
	});
	
	circle();
	function circle(){
		timer = setInterval(function(){
			inx++;
			inx >= $(".dots a").length && (inx = 0);
			show(inx);
			/* console.log("index = " + inx); */
		},3000);
	}
	$(".circle").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		circle();
	});
	
	//show
	function show(index){
		inx = index;
		$(".dots a").each(function(){
				$(this).removeClass("hover");
			});
			$(".cr-img img").each(function(){
				$(this).fadeOut(100);
		});
		$(".dots a").eq(inx).addClass("hover");
		$(".cr-img img").eq(inx).fadeIn(400);
	}
	$(".arrow-left").click(function(){
		inx--;
		inx <=0 && (inx = $(".dots a").length-1);
		show(inx);
	});
	$(".arrow-right").click(function(){
		inx++;
		inx >= $(".dots a").length && (inx = 0);
		show(inx);
	});
	
	//subnav
	$(".list-item").each(function(index){
		$(this).mouseenter(function(){
			$(".sub-lt-item").eq(index).show();
		}).mouseleave(function(){
			$(".sub-lt-item").each(function(){
				$(this).hide();
			});
		});
	});
	
	
	//明星单品轮播
	var starTimer = null;
	starCircle();
	function starCircle(){
		starTimer = setInterval(function(){
			var left = $(".star-product ul").css('margin-left');
			left == "0px" && turnLeft();
			left == "-1240px" && turnRight();
		},5000);
	}
	
	$(".star-arrow").mouseenter(function(){
		clearInterval(starTimer);
		$(".star-arrow-left").click(function(){
			turnRight();
		});
		$(".star-arrow-right").click(function(){
			turnLeft();
		});
		
	}).mouseleave(function(){
		starCircle();
	});
	
	function turnLeft(){
		$(".star-product ul").css('margin-left',"-1240px");
		$(".star-arrow a").each(function(){
			$(this).removeClass("turn");
		});
		  /* console.log( $(".star-arrow a:eq(0)")); */
	    $(".star-arrow a:eq(0)").addClass("turn");
	}
	
	function turnRight(){
		$(".star-product ul").css('margin-left',"0px");
		$(".star-arrow a").each(function(){
			$(this).removeClass("turn");
		});
		  /* console.log( $(".star-arrow a:eq(0)")); */
	    $(".star-arrow a:eq(1)").addClass("turn");
	}
	
	//tab-list 商品列表
	$(".ct-item").each(function(){
		var that = this;
		console.log($(that));
		$(that).find(".tab").each(function(index){
			$(this).mouseenter(function(){
				$(that).find(".tab").each(function(){
					$(this).removeClass("tab-hover");
				});
				$(that).find(".pro-list ul").each(function(){
					$(this).hide();
				});
				$(this).addClass("tab-hover");
				$(that).find(".pro-list ul").eq(index).show();
			});
		});
	});
	
});











