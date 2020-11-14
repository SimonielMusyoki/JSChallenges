const images = document.getElementById("imgs")
const imgs = document.querySelectorAll("#imgs img");
let index = 0;

function run(){
    if(index === imgs.length){
        index = 0;
    }

    images.style.transform = `translateX(${-index * 500}px)`;
    index++;
}

setInterval(run,2000);