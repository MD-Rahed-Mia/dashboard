const showNoti = document.querySelector("#show-noti");
const notiCancel = document.querySelector(".noti-cancel");
const notification = document.querySelector(".notification");
const sidebarLi = document.querySelectorAll("#sidebar ul li i");
const tabs = document.querySelectorAll(".tabs-item");
const orderCard = document.querySelectorAll(".order-card");
const order = document.querySelector(".order");

const orderTouch = document.querySelector(".order-visible");

showNoti.addEventListener("click", () => {
    notification.style.right = "0";
})

notiCancel.addEventListener("click", () => {
    notification.style.right = "-100%";
})


// sidebarLi.forEach(e => {
//     e.addEventListener("mouseover", ()=> {
//         const dataName = e.getAttribute("data-name");
//         e.innerHTML += `<span class="icon-hover">${dataName}</span>`;
//     })
// });

console.log(tabs);


sidebarLi.forEach((e, ind) => {
    e.addEventListener("click", () => {
        tabs.forEach(e => {
            e.classList.remove("active");
            e.classList.add("hidden");
        })
        tabs[ind].classList.add("active")
    })
})

orderCard.forEach(e => {
    e.addEventListener("click", () => {

        orderCard.forEach(es => {
            es.style.height = "100px";
            es.querySelector(".o-bottombar").style.display = "none";
            
        })

        console.log("click");
        e.style.height = "500px";
        e.querySelector(".o-bottombar").style.display = "flex";
    });

    
})





