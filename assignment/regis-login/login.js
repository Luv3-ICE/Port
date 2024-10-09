window.onload = loginLoad;
function loginLoad(){
	var user = document.getElementById("myLogin");
	user.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	const password = urlParams.get('password')

	var loginUser = document.forms["myLogin"]["username"].value;
	var pwLogin = document.forms["myLogin"]["password"].value;

	if (username != loginUser || password != pwLogin){
		alert("Username or password is incorrect, Try again");
		return false;
	}
	else {
		alert("Welcome!");
	}
}

			