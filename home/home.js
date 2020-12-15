function add_recipe() {
    if (sessionStorage.getItem("login") == true) {
        window.location.href = "../add_recipe_page/add_recipe.html";
    }
    else {
        window.location.href = "../sign_up_login_page/sign_up_login.html";
        alert("You should login first");
    }
}