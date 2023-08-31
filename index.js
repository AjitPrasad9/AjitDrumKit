let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i=0 ; i< numberOfDrumButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    let buttoninnerHTML = this.innerHTML;
    makesound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);

      
   });
}

document.addEventListener("keypress",function(event){

  makesound(event.key);
  buttonAnimation(event.key)
});

function makesound(key){

  switch(key){
    case "w":
      var audio =new Audio("sounds/tom-1.mp3");
        audio.play();
    break;
    case "a":
      var audio =new Audio("sounds/tom-2.mp3");
        audio.play();
    break;
    case "s":
      var audio =new Audio("sounds/tom-3.mp3");
        audio.play();
    break;
    case "d":
      var audio =new Audio("sounds/tom-4.mp3");
        audio.play();  
    break;
    case "j":
      var audio =new Audio("sounds/snare.mp3");
        audio.play();
    break;
    case "k":
      var audio =new Audio("sounds/crash.mp3");
       audio.play();
    break;
    case "l":
      var audio =new Audio("sounds/kick-bass.mp3");
       audio.play();
    break;

default: console.log(innerHTML);
  }

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
   
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
  


// let audio =new Audio("sounds/tom-1.mp3");
//       audio.play();


// let value=this.innerHTML;
// if (value == 'w' ){
//  let audio =new Audio("sounds/tom-1.mp3");
//  audio.play();
// }else if(value == 'a'){
//  let audio =new Audio("sounds/tom-2.mp3");
//  audio.play();
// }else if (value == 's'){
//  let audio =new Audio("sounds/tom-3.mp3");
//  audio.play();
// }else if(value == 'd'){
//  let audio =new Audio("sounds/tom-4.mp3");
//  audio.play();  
// }else if(value == 'j'){
//  let audio =new Audio("sounds/snare.mp3");
//  audio.play();
// }else if(value == 'k'){
//  let audio =new Audio("sounds/crash.mp3");
//  audio.play();
// }else if(value == 'l'){
//  let audio =new Audio("sounds/kick-bass.mp3");
//  audio.play();
// }