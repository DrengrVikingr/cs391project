function signUp() {
  var email = document.getElementsByName("email_address_sign_up");
  var password = document.getElementsByName("password_sign_up");
  if (localStorage) localStorage.setItem(email, password);
  else alert("Sorry, your browser does not support local storage");
}

function login() {
  var email = document.getElementsByName("email_address_login");
  var password = document.getElementsByName("password_login");
  if (localStorage.getItem(email) == null) {
    document.getElementById("login_error").innerHTML = "user does not exist";
  }
  else if (localStorage.getItem(email) == password) {
    return true;
  }
  else {
    return false;
    document.getElementById("login_error").innerHTML = "wrong password";
  }
}