let share=document.querySelector(".share");
let sharetxt=document.querySelector(".tooltip .tooltiptext");
let broj=0;
share.addEventListener("click",()=>{
    if(broj===0){
        sharetxt.style="visibility: visible;";
        broj=1;
    }
    else{
        sharetxt.style="visibility: hidden;";
        broj=0;
    }
});