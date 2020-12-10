function addRecipe(){
    var recipe_category = document.getElementById("recipe_category")[0].value;
    var recipe_name = document.getElementById("recipe_name")[0].value;
    var intergridents = document.getElementById("ingredients")[0].value;
    var recipe_dec = document.getElementById("recipe_dec")[0].value;

    if(localStorage) {
        if(localStorage.getItem(recipe_name) == null){
            localStorage.setItem(recipe_category,recipe_name,intergridents,recipe_dec )
        }else{
            document.getElementById("name_error").innerHTML = "This recipe name is already exist"
        }
    }else alert("Your browser does not support local storage")
}
