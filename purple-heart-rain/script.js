function createHeart(){
    const container = document.createElement("div");
    container.classList.add("heart");

    container.innerText = "💜";
    container.style.left = Math.random()*100 + "vw";
    container.style.animationDuration = Math.random()*2 + 3 + "s";
    document.body.appendChild(container);

    setTimeout(()=>{
        container.remove();
    },5000)

}

setInterval(createHeart,300);