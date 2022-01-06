let main = document.getElementById("_main");
console.log(document.body.style.width);
function openNav() {
	document.getElementById("close").style.display = "block";
	document.getElementById("open").style.display = "none";
	document.getElementById("mySidebar").style.height = "112px";
	main.style.marginTop = "112px";
}

function closeNav() {
	document.getElementById("close").style.display = "none";
	document.getElementById("open").style.display = "block";
	document.getElementById("mySidebar").style.height = "0";
	main.style.marginTop = "0";
}
