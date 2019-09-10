
function doStuff() {
	
	// Automatically sets a breakpoint when the inspect window is open
	// debugger;
	
	var fixedDiv = document.getElementById("fixedDiv");
	
	// This is one way, uses an inline style
	// fixedDiv.style = "bottom: 50%";
	
	// this one only works once
	// fixedDiv.classList.add("fixedMove");
	
	// the best way
	fixedDiv.classList.toggle("fixedMove");
}

window.onload = function() {
	// DOM
	// Document Object Model
	document.getElementById("doStuffButton").onclick = doStuff;
	
}
