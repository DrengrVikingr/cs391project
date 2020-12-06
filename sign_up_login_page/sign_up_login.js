function signUp() {
  var email = document.getElementsByName("email_address_sign_up")[0].value;
  var password = document.getElementsByName("password_sign_up")[0].value;
  if (localStorage) {
	if (localStorage.getItem(email) == null) {
		localStorage.setItem(email, password);
	} else {
		document.getElementById("sign_up_error").innerHTML = "user already exists";
	  }
  } else alert("Sorry, your browser does not support local storage");
}

function login() {
  var email = document.getElementsByName("email_address_login")[0].value;
  var password = document.getElementsByName("password_login")[0].value;
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
}