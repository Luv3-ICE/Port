window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    var pw1 = document.forms["myForm"]["password"].value;
    var pw2 = document.forms["myForm"]["retypePassword"].value;
    if (pw1 != pw2){
        document.getElementById("errormsg").innerHTML = "password is not match";
        return false;
    }
    else {
        return true;
    }
}