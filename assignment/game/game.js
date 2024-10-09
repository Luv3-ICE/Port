window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;  //ลดทีละ 1 วิ
	var timer = null;
	var min = 0.05; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer2 div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		if (second > 0){
			second -= 1;
			x.innerHTML = second;
		} 
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		else {
			x.innerHTML = ("");
			alert("Game over");
			clearInterval(timer);
			time = null;
			clearScreen();
		}
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		if (allbox.length == 0) {
			alert("You win!");
			clearInterval(timer);
			time = null;
			x.innerHTML  = "";
		}
	}
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer2");
	var imageType = document.getElementById("typeveg").value;

	const image = document.createElement("img");
	image.src = "pic/" + imageType + ".png";
	image.className = "vegimg";

	for (var i =0; i < numbox; i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.appendChild(image.cloneNode(true));
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (400 - 25) + "px";
		tempbox.style.top = Math.random() * (400 - 25) + "px";
		
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
		deleted++;
		return deleted;
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer2 div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].remove();
	}
}