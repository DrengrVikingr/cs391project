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
	var myrecipe = {"category": document.getElementById("recipe_category").value, "author": document.getElementById("recipe_author").value,
	"name": document.getElementById("recipe_name").value, "title": document.getElementById("recipe_name").value, "description": document.getElementById("recipe_desc").value,
	"ingredients": document.getElementById("ingredients").value, "instructions": document.getElementById("instructions").value, "recipeIndex": index}
	localStorage.setItem("recipe" + index, JSON.stringify(myrecipe));
	localStorage.setItem("recipeIndex", ++index);
}

function getRecipes() {
    if (localStorage) {
      if (localStorage.getItem("recipeIndex") > 0) {
        var index = localStorage.getItem("recipeIndex");
        for (i = 0; i < index; i++) {
          var recipe = JSON.parse(localStorage.getItem("recipe" + i));
          var option = document.getElementById(recipe.category);
          var recipeOpt = document.createElement("option");
          recipeOpt.text = recipe.name;
          recipeOpt.value = recipe.index;
          option.appendChild(recipeOpt);
        }
      }
    } else {
      alert("Sorry, your browser does not support local storage");
    }
}