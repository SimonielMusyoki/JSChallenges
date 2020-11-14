const btn = document.getElementById("btn");

btn.addEventListener("click",() => {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let a = Math.random();

    // document.body.style.backgroundColor = `rgba(${red},${green},${blue},${a})`;
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`

});