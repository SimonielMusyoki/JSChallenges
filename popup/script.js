const openBtn = document.getElementById("open");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click",()=>{
    popup.classList.toggle("active")
});

closeBtn.addEventListener("click",() =>{
    popup.classList.remove("active");
})