//教师头像滚动
var speed=15;
var tab=document.getElementById("teacher-demo");
var tab1=document.getElementById("teacher-demo1");
var tab2=document.getElementById("teacher-demo2");
tab2.innerHTML=tab1.innerHTML; //用于让tab1的内容与tab2的内容一样
function Marquee(){
//当元素要显示tab2的内容时，让他去显示tab1的内容，因为tab1与tab2的内容一样，就实现了滚动，因为速度太快了，所以看上去就是连续的
	if(tab2.offsetWidth-tab.scrollLeft&lt;=0)
		tab.scrollLeft-=tab1.offsetWidth 
		else{
			tab.scrollLeft++;
		}
	}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};