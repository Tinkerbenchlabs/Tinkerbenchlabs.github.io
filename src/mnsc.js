var pagetop, menu, yPos;
alert("If You are using a mobile device, rotate it to get a perfect view");
function yScroll(){
	pagetop = document.getElementById('header');
	menu = document.getElementById('menu');
	yPos = window.pageYOffset;
	if(yPos > 85){
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