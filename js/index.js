function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("body").style.marginLeft = "250px";
	document.getElementById("_content").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("body").style.marginLeft = "0";
	document.getElementById("_content").style.marginLeft = "0";
}
var typed = new Typed(".auto-input", {
	strings: ["Web Developer", "Designer", "Programmer"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true,
});
