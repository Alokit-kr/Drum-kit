 for(var x=0;x<document.querySelectorAll(".drum").length;x++)
 {
   document.querySelectorAll(".drum")[x].addEventListener("click",fun);
   function fun(){
      var y=this.innerHTML;
       playSound(y);
   }
 }

 document.addEventListener("keypress",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
 });
function playSound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
       tom1.play();
      break;
    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play();
        break;
    case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
           tom3.play();
          break;
    case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
            break;
   case "j":
              var tom5 = new Audio('sounds/snare.mp3');
               tom5.play();
              break;
   case "k":
                var tom6= new Audio('sounds/crash.mp3');
                 tom6.play();
                break;
   default:
                  var tom7 = new Audio('sounds/kick-bass.mp3');
                   tom7.play();
                  break;


  }
   buttonAnimation(key);
}
function buttonAnimation(event){
  var x=document.querySelector("."+event);
   x.classList.add("pressed");
 setTimeout(function(){
   x.classList.remove("pressed");
 },100);
}
