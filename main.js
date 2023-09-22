const showNoti = document.querySelector("#show-noti");
const notiCancel = document.querySelector(".noti-cancel");
const notification = document.querySelector(".notification");
const sidebarLi = document.querySelectorAll("#sidebar ul li i");
const tabs = document.querySelectorAll(".tabs-item");
const orderCard = document.querySelectorAll(".order-card");
const order = document.querySelector(".order");
const uBtn = document.querySelector(".u-btn");
const utBtn = document.querySelector(".ut-btn");
const uClose = document.querySelector(".u-close");

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

sidebarLi.forEach((e) => {
    e.addEventListener("click", () => {

    sidebarLi.forEach(es => {
        es.style.backgroundColor = "transparent"
    })
    e.style.backgroundColor = "gray";
    })
})

let orderclick = 1;
orderCard.forEach(e => {


    e.addEventListener("click", () => {
        orderclick++;
        if (orderclick % 2 == 0) {
        orderCard.forEach(es => {
            es.style.height = "100px";
            es.querySelector(".o-bottombar").style.display = "none";


        })
        e.style.height = "500px";
        e.querySelector(".o-bottombar").style.display = "flex";
        e.querySelector(".o-bottombar").style.opacity = "1";
        }
        else {
            e.style.height = "100px";
            e.querySelector(".o-bottombar").style.opacity = "0";
            e.querySelector(".o-bottombar").style.display = "none";
        }
    });
})


// card user buttton here
// 

let isClick = false;

uBtn.addEventListener("click", () => {
    isClick = !isClick;

    if (isClick) {
        uBtn.style.backgroundColor = "gray";
        uBtn.style.color = "lightgray";
    }

    else {
        uBtn.style.backgroundColor = "cornflowerblue";
        uBtn.style.color = "white";
    }
})

// card user button end here
// 

// Custom JS Comment:
// add user div access here



utBtn.addEventListener("click", () => {
    isClick = !false;

    if (isClick) {
    document.querySelector(".add-user").style.display = "block";
    }
    else {
    document.querySelector(".add-user").style.display = "none";
    }
})

// Custom JS Comment:
// close user div

uClose.onclick = () => {
    document.querySelector(".add-user").style.display = "none";
}




