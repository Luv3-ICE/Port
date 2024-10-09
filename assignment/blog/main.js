// var post = 0;
// function postFunction(){
//     if (post == 0){
//         document.getElementById("topic1").innerHTML = document.getElementById("text1").value;
//         post++;
//     } 
//     else if (post == 1){
//         var name = document.getElementById("text1").value;
//         document.getElementById("comment1").innerHTML = name;
//         post++;
//     } 
//     else if (post == 2){
//         var name = document.getElementById("text1").value;
//         document.getElementById("comment2").innerHTML = name;
//         post++;
//     }
// }

// function clearFunction(){
//     document.getElementById("topic1").innerHTML = " ";
//     document.getElementById("comment1").innerHTML = " ";
//     document.getElementById("comment2").innerHTML = " ";

//     post = 0;
// }

let i = 1;

function postFunction(){
    let gotobox = document.getElementById("box");
    let buildp = document.createElement("div");
    buildp.id = "comment"+i;
    buildp.classList.add("align");
    gotobox.appendChild(buildp);

    let gotop = document.getElementById("comment"+i);
    let buildcmt = document.createElement("p");
    buildcmt.id = "cmt"+i;
    gotop.appendChild(buildcmt);

    let buildimg = document.createElement("img");
    buildimg.className = "cmp";
    buildimg.src = "pic/8-bit-rabbit.jpg";
    gotop.appendChild(buildimg);
    document.getElementById("cmt"+i).innerHTML = document.getElementById("text1").value;

    i++;
}

function clearFunction(){
    let gotobox = document.getElementById("box");
    gotobox.innerHTML = '';

    i = 1;
}