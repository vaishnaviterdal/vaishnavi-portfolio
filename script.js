function changeBackground(){

let colors = ["#f5f7fa","#e3f2fd","#fff3e0","#fce4ec"];

let random = Math.floor(Math.random()*colors.length);

document.body.style.backgroundColor = colors[random];

}

function changeHeadingColor(){
document.getElementById("main-heading").style.color="purple";
}
