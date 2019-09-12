
function doStuff() {
	var userInput = document.getElementById("userInput").value;
	var results = document.getElementById("results");
	results.innerHTML = "";
	
	try {
		// converts a string into an object
		var userJson = JSON.parse(userInput);
	} catch (error) {
		displayError(error);
		return;
	}
	
	displayError("");
	
	// I have a valid JSON object in userJson
	
	var ul = document.createElement("ul");
	
	results.appendChild(ul);
	
	if (!userJson.userArray) {
		displayError("Did not find the userArray key in your JSON");
		return;
	}
		
	if (!Array.isArray(userJson.userArray)) {
		displayError("userArray was not an array.");
		return;
	}
	
	userJson.userArray.forEach(function(arrayElement) {
		// you cannot "return" from here. you are NOT in the doStuff function anymore
		var li = document.createElement("li");
		
		if (typeof arrayElement === "string") {
			var textNode = document.createTextNode(arrayElement);
		} else if (typeof arrayElement === "number") {
			var textNode = document.createTextNode("NUMBER! " + arrayElement);
		} else if (typeof arrayElement === "object") {
			if (arrayElement.name) {
				var textNode = document.createTextNode("It was an object! Name was " + arrayElement.name);
			} else {
				var textNode = document.createTextNode("It was an object! ");
			}
		}
		
		li.appendChild(textNode);
		
		ul.appendChild(li);
	});
	
	
}

function displayError(errorMessage) {
	var error = document.getElementById("error");
	error.innerHTML = errorMessage;
}

window.onload = function() {
	// DOM
	// Document Object Model
	document.getElementById("doStuffButton").onclick = doStuff;
	
}
