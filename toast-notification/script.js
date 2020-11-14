const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click",() =>{
    createNotifications();
});

function createNotifications(){
    const notification = document.createElement("div");
    notification.classList.add("toast");
    notification.innerText = "This JS Challenge is crazy";
    container.appendChild(notification);

    setTimeout(()=>{
        notification.remove();
    }, 3000)
}