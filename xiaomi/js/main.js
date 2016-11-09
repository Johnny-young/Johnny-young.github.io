
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
	
	$(".ct-stars .star-arrow").mouseenter(function(){
		clearInterval(starTimer);
		$(".ct-stars .star-arrow-left").click(function(){
			turnRight();
		});
		$(".ct-stars .star-arrow-right").click(function(){
			turnLeft();
		});
		
	}).mouseleave(function(){
		starCircle();
	});
	
	function turnLeft(){
		$(".star-product ul").css('margin-left',"-1240px");
		$(".ct-stars .star-arrow a").each(function(){
			$(this).removeClass("turn");
		});
		  /* console.log( $(".star-arrow a:eq(0)")); */
	    $(".ct-stars .star-arrow a:eq(0)").addClass("turn");
	}
	
	function turnRight(){
		$(".star-product ul").css('margin-left',"0px");
		$(".ct-stars .star-arrow a").each(function(){
			$(this).removeClass("turn");
		});
		  /* console.log( $(".star-arrow a:eq(0)")); */
	    $(".ct-stars .star-arrow a:eq(1)").addClass("turn");
	}
	
	//tab-list 商品列表
	$(".ct-item").each(function(){
		var that = this;
		/* console.log($(that)); */
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
	
	
	//为你推荐
	var aIndex = 0;
	var left = 0;
	var ulLength = $(".rec-product .rec-pro-item").length;
	$(".ct-item-rec .star-arrow-left").click(function(){
		left = parseInt($(".rec-product ul").css('margin-left'));
		/* console.log(left); */
		
		if(aIndex > 0){
			aIndex--;
			recArrow();
			$(".rec-product ul").css("margin-left",-aIndex*1240 + "px");
		}else{
			($(".rec-product ul").css("margin-left","0px"),aIndex = 0);
		}
		/* console.log("left = " + aIndex); */
	});
	$(".ct-item-rec .star-arrow-right").click(function(){
		left = parseInt($(".rec-product ul").css('margin-left'));
		/* console.log(left); */
		if(aIndex < ulLength/5-1){
			aIndex++;
			recArrow();
			$(".rec-product ul").css("margin-left",-aIndex*1240 + "px");
		}else{
			($(".rec-product ul").css("margin-left","-3720px"),aIndex = ulLength/5-1);
		}
		
		/* console.log("right = " + aIndex); */
	});	
	//set arrow
	function recArrow(){
		$(".ct-item-rec .star-arrow a").each(function(){
				$(this).addClass("turn");
		});
		aIndex <= 0 && ($(".ct-item-rec .star-arrow-left").removeClass('turn'));
		aIndex >= (ulLength/5-1) && 
			($(".ct-item-rec .star-arrow-right").removeClass('turn'));
		
	}
	
	//内容点击圆点、箭头事件
	
	
	var indexArrow = [0,0,0,0];
	$(".ct-lt-item").each(function(index){
		var that = this;
		var inx = index;
		console.log(indexArrow[inx]);
		//点击圆点效果
		$(that).find(".info-dots a").each(function(index){
			$(this).click(function(){
				$(that).find(".info-dots a").each(function(){
					$(this).removeClass("dot-hover");
				});
				indexArrow[inx] = index;
				$(this).addClass("dot-hover");
				$(that).find(".item-container").css("margin-left",indexArrow[inx]*(-296) + "px");
			});
		});
		
		//点击箭头效果
		$(that).find(".info-arrow-left").click(function(){
			var left = parseInt($(that).find(".item-container").css('margin-left'));
			if(indexArrow[inx] > 0)
			{
				indexArrow[inx]--;
				ctDotShow($(that));
				$(that).find(".item-container").css("margin-left",indexArrow[inx]*(-296) + "px");
			}else{
				indexArrow[inx] = 0;
				$(that).find(".item-container").css("margin-left","0");
			}
		});
		$(that).find(".info-arrow-right").click(function(){
			var left = parseInt($(that).find(".item-container").css('margin-left'));
			if(indexArrow[inx] < 3)
			{
				indexArrow[inx]++;
				ctDotShow($(that));
				$(that).find(".item-container").css("margin-left",indexArrow[inx]*(-296) + "px");
			}else{
				indexArrow[inx] = 3;
				$(that).find(".item-container").css("margin-left","-888px");
			}
		});
		
		//圆点显示
		function ctDotShow(obj){
			obj.find(".info-dots a").each(function(){
				$(this).removeClass("dot-hover");
			});
			obj.find(".info-dots a").eq(indexArrow[inx]).addClass("dot-hover");
		}
	});
	
	
	
	
	
});











