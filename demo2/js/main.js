


window.onload = function(){
	
	var fadeTime = null;
	var tempTimer = null;
	
	
	//登录操作
	var login = document.getElementsByClassName("logo-off")[0].getElementsByTagName("a")[0];
	var lgInfo = document.getElementsByClassName("logo-info")[0];
	var lgTemp = document.getElementsByClassName("info-temp")[0];
	var lgPage = document.getElementsByClassName("login-page")[0];
	var turnOff = document.getElementsByClassName("lg-head")[0].getElementsByTagName("a")[0];
	var lgInput = document.getElementsByClassName("lg-form")[0].getElementsByTagName("input");
	
	//弹出层打开
	login.onclick = function(){
		lgInfo.style.display = "block";
		lgTemp.style.display = "block";
		lgPage.style.display = "block";
		/* document.body.style.overflow = "hidden"; */
	};
	
	
	//关闭弹出层
	turnOff.onclick = function(){
		lgPage.style.display = "none";
		lgTemp.style.display = "none";
		lgInfo.style.display = "none";
	};
	
	//输入操作
	lgInput[2].onclick = function(){
		
		if(lgInput[0].value == "" || lgInput[1].value == "")
		{
			alert("while(blank choose){\n   Sorry ni have problem!!\n   We will see you again...\n}");
		}
	}
	//登录操作结束-------------------------------------------------------------------------------------------
	

	
	//小图标悬浮效果
	var iconDiv = document.getElementsByClassName("points-item");
	var icon = document.getElementsByClassName("item-imgs");
	var iconTxt = document.getElementsByClassName("points-txt");
	var imgTimer = [null,null,null,null],imgTimer2 = [null,null,null,null];
	var flag ;
	var bottomTemp = [46,46,46,46];
	var topTemp = [0,0,0,0];
	for(var i = 0 ;i < iconDiv.length; i++)
	{
		
		iconTxt[i].index = i;
		iconTxt[i].onmouseover = function(event){
			var that = this.index;
			var bottom = bottomTemp[this.index];
			var top = topTemp[this.index];
			
			/* console.log(this.index); */
			clearInterval(imgTimer[this.index]);
			clearInterval(imgTimer2[this.index]);
			imgTimer[this.index] = setInterval(function(){
				bottom -= 2;
				top += 2;
				bottom <= 26 && (clearInterval(imgTimer[that]),bottom = 26,top = 20);
				icon[that].style.marginBottom = bottom + 'px';
				icon[that].style.marginTop = top + "px";
				bottomTemp[that] = bottom;
				topTemp[that] = top;
			},20); 
			/* console.log("bottomTemp=" + bottomTemp + "topTemp=" + topTemp); */
			/* icon[this.index].onmouseover = function(event){
				stopBubble(event);
			};
			icon[this.index].onmouseout = function(event){
				stopBubble(event);
			}; */
			/* iconTxt[this.index].onmouseover = function(event){
				stopBubble(event);
			};
			iconTxt[this.index].onmouseout = function(event){
				stopBubble(event);
			}; */
		};
		iconTxt[i].onmouseout = function(){
			/* alert(this.index); */
			clearInterval(imgTimer[this.index]);
			clearInterval(imgTimer2[this.index]);
			var that = this.index;
			var bottom1 = bottomTemp[this.index];
			var top1 = topTemp[this.index];
			/* console.log("top1="  +  top1 + "bottom1=" + bottom1); */
		
			
			imgTimer2[this.index] = setInterval(function(){
				bottom1++;
				top1--;
				bottom1 >= 46 && (clearInterval(imgTimer2[that]),bottom1 = 46,top1 = 0);
				icon[that].style.marginBottom = bottom1 + 'px';
				icon[that].style.marginTop = top1 + "px";
				bottomTemp[that] = bottom1;
				topTemp[that] = top1;
			},20);
		};
	}
	//小图标悬浮效果结束-------------------------------------------------------------------------------------
		
	
	function stopBubble(event){
		event ? event.stopPropagation && event.stopPropagation() : window.event.cancleBubble = true;
	}
	//内部元素影响外部父元素解决方案
	function mouseoverOrOut(a,e,func)
	{
		e ? (flag = true,e = e) : (flag = false,e = window.event);
		console.log(e.type);
		var f,reg;
		if(e.type == "mouseover")
		{
			f = e.fromElement || e.relatedTarget;
		}else if(e.type == "mouseout")
		{
			f = e.toElement || e.relatedTarget;
		}
		if(flag)
		{
			reg = a.compareDocumentPosition(f);
			reg != 10 && func;
			console.log("reg=" + reg);
		}else{
			!(a.contains(f)) && func;
			console.log(a.contains(f));
		}
	}
	
	
	//查找城市
	//select 下拉列表
	var oSelect = document.getElementsByClassName("select-item");
	
	for(var i = 0; i < oSelect.length; i++)
	{
		oSelect[i].index = i;
		oSelect[i].ondblclick = function(event){
			/* alert(1); */
			var oInput = this.getElementsByTagName("input")[0];
			var oUl = this.getElementsByTagName("ul")[0];
			var oLi = oUl.getElementsByTagName("li");
			this.style.height = "auto";
			this.style.borderColor = "#be4e48";
			
			oUl.style.display = "block";
			oUl.style.borderTopColor = "#be4e48";
			
			//点击取值
			for(var j = 0; j < oLi.length ;j++)
			{
				oLi[j].index = j;
				console.log(j);
				oLi[j].onclick = function(){
					var oA = this.getElementsByTagName("a")[0]
					oInput.value = oA.innerHTML;
				};
			}
		};
		
	}
	//全局点击关闭
	document.onclick = function(){
		for(var i = 0 ;i < oSelect.length; i++)
		{
			var ul = oSelect[i].getElementsByTagName("ul")[0];
			
			oSelect[i].style.borderColor = "transparent";
			oSelect[i].style.height = "35px";
			ul.style.display = "none";
			ul.style.borderTopColor = "transparent";
		}
	};
	
	//搜索
	var oSearch = document.getElementsByClassName("dest-search")[0];
	var nation = document.getElementsByClassName("nation")[0];
	var province = document.getElementsByClassName("province")[0];
	var city = document.getElementsByClassName("city")[0];
	
	oSearch.onclick = function(){
		
		if(nation.value == "" || province.value == "" || city.value == "")
		{
			alert("sorry,you cannot search with blank choses");
		}
	};
	//查找城市结束-----------------------------------------------------------------------------
	
	//画廊效果
	/* var pics = document.getElementsByClassName("pics-item");
	var txtUp = document.getElementsByClassName("pics-intro-up");
	var txtDown = document.getElementsByClassName("pics-intro-down");
	var picImg = document.getElementsByClassName("pics-img");
	var zoomTimer = null;
	for(var i = 0; i < pics.length; i++)
	{
		pics[i].index = i;
		pics[i].onmouseover = function(){
				
			/* fadeOut(txtDown[this.index]); 
			txtDown[this.index].style.height = "0px";
			txtUp[this.index].style.display = "block";
			toHeight(txtUp[this.index],10);
			
			//阻止冒泡
			picImg[this.index].getElementsByTagName("img")[0].onmouseover = function(event){
				event ? event.stopPropagation() : window.event.cancleBubble = true;
			};
			picImg[this.index].getElementsByTagName("img")[0].onmouseout = function(event){
				event ? event.stopPropagation() : window.event.cancleBubble = true;
			};
		};
		pics[i].onmouseout = function(){
			fadeIn(txtDown[this.index]);
		};
	}
		
	 */
	//画廊效果---------------------------------------------------------------------------------------------
	
	//新世界蒙版
	var timeTemp = document.getElementsByClassName("time-temp")[0];

	hover(timeTemp,5)
	//新世界蒙版结束-----------------------------------------------------------------------------
	
	
	//新世界文字轮播
	var txtDiv = document.getElementsByClassName("nw-txt")[0];
	var txt = txtDiv.getElementsByClassName("txt-item");
	var dots = txtDiv.getElementsByClassName("dots")[0]
	var dot = dots.getElementsByTagName("a");
	var index = 0;
	var timer = null;
	var oTimer = null;
	var num = 0;
	
	//轮播开始
	circle();
	
	//dot 点击操作
	for(var i =0 ;i < dot.length ; i++)
	{
		dot[i].index = i;
		dot[i].onclick = function(event){
			
			if(this.className != "click")
			{
				fadeShow(this.index);
			}else{
				return null;
			}

		};
	}
	
	//鼠标悬浮轮播停止
	dots.onmouseover = function(){
		clearInterval(timer);
	};
	//鼠标离开轮播继续
	dots.onmouseout = function(){
		circle();
	};
	
	function circle()
	{
		//2s轮播
		timer = setInterval(function(){
			index++;
			index = index == 3 ? 0 : index;
			fadeShow(index);			
		},2000);
	}
	
	//文字出现
	function fadeShow(inx){
		var opa = 0;
		index = inx;
		clearInterval(oTimer);
		//reset
		for(var i = 0; i < txt.length ; i++)
		{
			dot[i].className = "";
			txt[i].style.display = "none";
			txt[i].style.opacity = 0;
			txt[i].style.filter = "alpha(opacity=0)";
		}
		
		
		dot[index].className = "click";
		txt[index].style.display = "block";
	
		
		//透明度增加
		oTimer = setInterval(function(){
			opa++ == 10 ? (opa = 0,clearInterval(oTimer)) : 
						  (txt[index].style.opacity = opa/10,txt[index].style.filter = "alpha(opacity = " + opa*10 + ")");
		},60);
		
	}
	//新世界文字------------------------------------------------------------------------------------
	
	//新时代点击效果
	var oTab = document.getElementsByClassName("tab-item");
	var oTxt = document.getElementsByClassName("nt-txt")
	var checkBtn = document.getElementsByClassName("nt-btn");
	var oBr = document.getElementsByClassName("nt-br");
	
	for(var i = 0; i < oTab.length; i++)
	{
		oTab[i].index = i;
		oTab[i].onclick = function(){
			if(this.className == "tab-item tab-item-red")
			{
				return null;
			}
			else{
				//reset
				for(var j = 0; j < checkBtn.length; j++)
				{
					oTab[j].className = "tab-item";
					oBr[j].className = "nt-br nt-br-black";
					checkBtn[j]. className = "nt-btn nt-btn-opp";
				}
				
				oBr[this.index].className = "nt-br";
				checkBtn[this.index].className = "nt-btn";
				oTab[this.index].style.opacity = 0;
				oTab[this.index].style.filter = "alpha(opacity=0)";
				oTab[this.index].className ="tab-item tab-item-red";
				fadeIn(oTab[this.index],50);
				
				//冒泡
				checkBtn[this.index].onclick = function(event){
					event ? event.stopPropagation() : window.event.cancleBubble = true;
				};
			}
		};
	}
	//新时代点击效果结束--------------------------------------------------------------------------
	
	//新时代蒙版
	var ntTemp = document.getElementsByClassName("nt-temp")[0];
	hover(ntTemp,5);
	//新时代蒙版结束------------------------------------------------------------------------------
	
	//表单元素的效果docus,blur
	var oInputs = document.getElementsByClassName("dt-input");
	var textarea = document.getElementsByClassName("dt-textarea")[0];
	
	for(var i = 0 ;i < oInputs.length; i++)
	{
		oInputs[i].index = i;
		oInputs[i].onfocus = function(){
			this.style.backgroundColor = "#ccc";
			this.style.color = "#000";
		};
		oInputs[i].onblur = function(){
			this.style.backgroundColor = "#ededee";
		};
	}
	textarea.onfocus = function(){
		this.style.backgroundColor = "#ccc";
		this.style.color = "#000";
	};
	textarea.onblur = function(){
		this.style.backgroundColor = "#ededee";
	};
	//表单元素的效果docus,blur结束
	
	
	
	//悬浮效果
	function hover(obj,op){
		var opa = op;
		//鼠标悬浮
		obj.onmouseover = function(){
			clearInterval(tempTimer);
			tempTimer = setInterval(function(){
				opa-- <= 0 ? (clearInterval(tempTimer),opa = 0) : (obj.style.opacity = opa/10,obj.style.filter = "alpha(opacity=" + opa*10 + ")");
			},50);
		};
		
		//鼠标离开
		obj.onmouseout = function(){
			clearInterval(tempTimer);
			tempTimer = setInterval(function(){
				opa++ >= 5 ? (clearInterval(tempTimer),opa = 5) : (obj.style.opacity = opa/10,obj.style.filter = "alpha(opacity=" + opa*10 + ")");
			},50);
		};
	}
	
	
	
	
	//淡入效果
	function fadeIn(obj,interval)
	{
		var opa = 0;
		clearInterval(fadeTime);
		fadeTime = setInterval(function(){
			opa++ == 10 ? (opa = 0,clearInterval(fadeTime)) : 
						  (obj.style.opacity = opa/10,obj.style.filter = "alpha(opacity = " + opa*10 + ")");
		},interval);
	}
	
	//淡出效果
	function fadeOut(obj,interval)
	{
		var opa = 10;
		clearInterval(fadeTime);
		fadeTime = setInterval(function(){
			opa-- <= 0 ? (opa = 10,clearInterval(fadeTime)) : 
						  (obj.style.opacity = opa/10,obj.style.filter = "alpha(opacity = " + opa*10 + ")");
		},interval);
	}
	
	//获取属性值
	function getStyle(obj,name){
		return obj.currentStyle ? obj.currentStyle(name) : getComputedStyle(obj,null)[name];
	}
};