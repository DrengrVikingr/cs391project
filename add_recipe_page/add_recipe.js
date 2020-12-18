function getRecipeIndex() {
	if (localStorage) {
		if (localStorage.getItem("recipeIndex") == null) localStorage.setItem("recipeIndex", 0);
		else return localStorage.getItem("recipeIndex");
	}
	else {
		alert("Sorry, your browser does not support local storage");
	}
}

function addRecipe() {
	var index = getRecipeIndex();
	var myrecipe = {"category": document.getElementById("recipe_category").value, "author": document.getElementById("recipe_author").innerHTML,
	"name": document.getElementById("recipe_name").innerHTML, "title": document.getElementById("recipe_name"), "description": document.getElementById("recipe_desc").innerHTML,
	"ingredients": document.getElementById("ingredients").innerHTML, "instructions": document.getElementById("instructions").innerHTML, "recipeIndex": index}
	localStorage.setItem("recipe" + index, JSON.stringify(myrecipe));
	localStorage.setItem("recipeIndex", ++index);
}