const text = "Hello, we love Javascript!!";
let index = 0;

function writeText(){
    document.body.innerText= text.slice(0, index);
    index++;

    if(index === text.length){
        index = 1;
    }
}

setInterval(writeText,100);