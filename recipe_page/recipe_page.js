/*
function getRecipe() {
	if (localStorage) 
		var recipeIndex = readRecipeIndex("recipes");
		var recipe = JSON.parse(localStorage.getItem(recipeIndex));
		document.getElementById("author").innerHTML = recipe.author;
		document.getElementById("name").innerHTML = recipe.name;
		document.getElementById("description").innerHTML = recipe.description;
		document.getElementById("ingredients").innerHTML = recipe.ingredients;
		document.getElementById("instructions").innerHTML = recipe.instructions;
	}
	else {
		alert("Sorry, your browser does not support local storage");
	}
}

function readRecipeIndex(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

<body onload="getRecipe()"> */