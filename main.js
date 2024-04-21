const player = document.querySelector('.player');
 const block = document.querySelector('.block');
 let btn_left = document.getElementById('left-btn');
 let btn_right = document.getElementById('right-btn');
 let score =0;
 let gamescore = document.getElementById('score');
 
function leftmove(){
  const curLeft =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if(curLeft <=0)return;
  const moveLeft = curLeft -100;
  player.style.left = moveLeft+"px";
}
function rightmove(){
  const curRight =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if(curRight >=200)return;
  const moveRight = curRight +100;
  player.style.left = moveRight+"px";
}


//control event//
btn_left.addEventListener("click",leftmove);
btn_right.addEventListener("click",rightmove);
// for random block//
block.addEventListener("animationiteration", function() {
  const randpos = Math.floor((Math.random()*3))*100;
  block.style.left = randpos + "px";
  score++;
  gamescore.innerHTML =`your score : ${score}`;

})
//acsedont test//
function ckeck(){
let playerLeft =parseInt(window.getComputedStyle(player).getPropertyValue('left'));
let blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue('left'));
let blocktop =parseInt(window.getComputedStyle(block).getPropertyValue('top'));

if(playerLeft == blockLeft && blocktop < 450 && blocktop > 310 ){
  alert(`game over || your score : ${score}`);
  block.style.left= -100 +"px";
  score=0;
  location.reload();
  }  
}
setInterval(ckeck,1);
//speed buttom//
let speedup =document.getElementById('speedup');
let speeddown =document.getElementById('speeddown');

speedup.onclick = function(){
  let speed =parseInt(window.getComputedStyle(block).getPropertyValue("animation-duration"));
  if(speed >1){
 let speedu= speed -1;
block.style.animationDuration=speedu+"s";
str.innerHTML=speedu;
 }
}

speeddown.onclick = function(){
  let speed =parseInt(window.getComputedStyle(block).getPropertyValue("animation-duration"));
 let speedu= speed +1;
block.style.animationDuration=speedu+"s";
 str.innerHTML=speedu;
 }



