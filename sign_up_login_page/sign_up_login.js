function checkEmpty() {
  var email = document.getElementsByName("email_address_sign_up")[0].value;
  var name = document.getElementsByName("name")[0];
  var surname = document.getElementsByName("surname")[0];
  var birthdate = document.getElementById("birthdate").value;
  var password = document.getElementsByName("password_sign_up")[0].value;
  return email != "" & name != null & surname != null & birthdate != "" & password != "";
}

function signUp() {
  var email = document.getElementsByName("email_address_sign_up")[0].value;
  var password = document.getElementsByName("password_sign_up")[0].value;
  if (localStorage) {
	  if (localStorage.getItem(email) == null & checkEmpty()) {
      localStorage.setItem(email, password);
      return true;
    } else if (!checkEmpty()) {
      document.getElementById("sign_up_error").innerHTML = "please fill in each field";
      return false;
	  } else {
      document.getElementById("sign_up_error").innerHTML = "user already exists";
      return false;
	    }
  } else {
    alert("Sorry, your browser does not support local storage");
    return false;
  }
}

function login() {
  var email = document.getElementsByName("email_address_login")[0].value;
  var password = document.getElementsByName("password_login")[0].value;
  if (localStorage) {
    if (localStorage.getItem(email) == null) {
      document.getElementById("login_error").innerHTML = "user does not exist";
      return false;
    }
    else if (localStorage.getItem(email) == password) {
      sessionStorage.setItem("login", true);
      return true;
    }
    else {
      document.getElementById("login_error").innerHTML = "wrong password";
      return false;
    }
  } else {
    alert("Sorry, your browser does not support local storage");
  }
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
        recipeOpt.value = recipe.name;
        option.appendChild(recipeOpt);
      }
    }
  } else {
    alert("Sorry, your browser does not support local storage");
  }
}