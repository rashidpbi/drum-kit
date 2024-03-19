const drums = document.querySelectorAll('.drum');
 
const len = drums.length;
 
//adding animation

//understanding the instrument
//adding style

document.addEventListener("keydown",function(e){
    makeSound(e.key);
    makeAnimation(e.key);
});
for (i=0;i<len;i++){
    
    drums[i].addEventListener("click",function(){
        var drumm = this.innerHTML;
        
        makeSound(drumm);
        makeAnimation(drumm);
    })

    

}
function makeAnimation(e){
    
    document.querySelector("."+e).classList.add('pressed');

    setTimeout(() => {
        document.querySelector("."+e).classList.remove('pressed');
    }, 100);
}


function makeSound(drum){
   
    switch (drum) {
        case 'w':
            
            var crash = new Audio('./sounds/crash.mp3');
            
            crash.play();
            break;
        case "s":
          
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;        
        case "d":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "g":
            var tom3 = new Audio('./sounds/tom-3.mp');
            tom3.play();
            break;
        case "k":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "l":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "a":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            
            break;
          
    }
}





















































