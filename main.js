const showNoti = document.querySelector("#show-noti");
const notiCancel = document.querySelector(".noti-cancel");
const notification = document.querySelector(".notification");
const sidebarLi = document.querySelectorAll("#sidebar ul li i");
const tabs = document.querySelectorAll(".tabs-item");
const uBtn = document.querySelector(".u-btn");
const utBtn = document.querySelector(".ut-btn");
const uClose = document.querySelector(".u-close");

let isClick = false;

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

// order card click functionality here
// // 

// const orderTopbar = document.querySelectorAll(".o-topbar");
// const orderCard = document.querySelectorAll(".order-card");

// orderTopbar.forEach((e) => {
//     e.addEventListener("click", ()=> {

//         isClick = !isClick;

//         orderTopbar.forEach((ls) => {
//             ls.parentElement.style.height = "100px";
//         });

//         if (isClick) {
//         e.parentElement.style.height = "500px";
//         }
//         else {
//             e.parentElement.style.height = "100px"
//         }
//     })
// })

// order card functionality end here
// 


// card user buttton here
// 

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

// add user div access here



utBtn.addEventListener("click", () => {
    isClick = !false;

    if (isClick) {
    document.querySelector(".add-user").style.transform = "scale(1)";
    }
})


// close user div

uClose.onclick = () => {
    document.querySelector(".add-user").style.transform = "scale(0)";
}


// order filtering goes here

const orderFilterBtn = document.querySelectorAll(".order-tabs-desc button");
const orderItem = document.querySelectorAll(".order-card");


orderItem.forEach((ea) => {

    orderFilterBtn.forEach(e => {
        e.addEventListener("click", () => {

            orderFilterBtn.forEach(l => {
                l.classList.remove("tab-bg");
            })

            e.classList.add("tab-bg");

            let ev = e.getAttribute('order-filter').toLowerCase();
            if (ev == ea.getAttribute('order-filter') ) {
                ea.style.display = "block";
            }
            else {
                ea.style.display = "none"
            }

            if (ev == "all") {
                ea.style.display = "block"
            }
        })
    })
})

// order filter end here
// 


// order status here
// 

const statusBtn = document.querySelectorAll(".order-status button");


statusBtn.forEach(element => {
    
    element.addEventListener("click", ()=> {
        let myDivObjBgColor = window.getComputedStyle(element).backgroundColor;

        document.querySelector(".otb2").style.backgroundColor = myDivObjBgColor;
        document.querySelector(".otb3").style.color = myDivObjBgColor;
        document.querySelector(".otb3").textContent = element.innerHTML;

});
});




