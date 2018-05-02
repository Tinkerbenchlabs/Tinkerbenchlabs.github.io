var pagetop, menu, yPos;

function yScroll(){
	pagetop = document.getElementById('header');
	menu = document.getElementById('menu');
	yPos = window.pageYOffset;
	//document.getElementById('yval').innerHTML = yPos;
	if(yPos > 70){
		pagetop.style.height = "0px";
		pagetop.style.paddingTop = "50px";
		menu.style.height = "50px";
	} else {
		pagetop.style.height = "120px";
		pagetop.style.paddingTop = "50px";
		menu.style.height = "50px";
	}
}
window.addEventListener("scroll", yScroll);
function scrl(){
	window.scrollBy(0,document.getElementById('footer').offsetTop);;
	return false;
}