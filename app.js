// mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})

// form to send message
let showMessageButton = document.querySelector(".form-button");
    let form = document.querySelector(".form");
    
    showMessageButton.addEventListener("click", function() {
        form.classList.toggle("show")
    })

// scroll form
    let modal = document.querySelector(".modal");
    let buttonClose = document.querySelector(".close");
    let scrollHeight = document.body.scrollHeight / 2;
    console.log(scrollHeight)

    window.addEventListener("scroll", function() {
    let scrollDistance = window.scrollY;
    if(scrollDistance == scrollHeight) {
        modal.classList.add("show")
        modal.classList.remove("hide")
        console.log("skjnva")
    } 
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

buttonClose.addEventListener("click", closeModal)

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal()
    }
})