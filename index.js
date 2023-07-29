document.onkeydown=function(e){
    console.log("press the key +",e.keyCode);
  
//    document.addEventListener('keypress',()=>{
  
//    console.log(i);
//    i++
//    })
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=>{
            dino.classList.remove('animatedino')
        },1500)

        if(e.keyCode==37){
            dino=document.querySelector('.dino')
            dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
            dino.style.left=dinox+112+'px'
        }

        if(e.keyCode==39){
            dino=document.querySelector('.dino')
            dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
            dino.style.left=(dinox -112)+'px'
        }
    }
    setInterval(()=>{
        dino=document.querySelector('.dino');
        obstacle=document.querySelector('.obstacle');
        gameover=document.querySelector('.gameover');

        ox =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
        oy =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

        dx =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dy =parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

        offsetX=Math.abs(dx-ox);
        offsetY=Math.abs(dy-oy);
   
        if (offsetX<80 & offsetY<80){
            gameover.style.visiblilty='visible';
            obstacle.classList.remove('obstacle');
             prompt("You are failed ...try again")
          
        }
    },800)
}