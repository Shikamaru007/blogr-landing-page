const mobileOpenMenuBtn = document.querySelector(".open-menu");
const mobileCloseMenuBtn = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavButtons = document.querySelectorAll(".mobile-nav-option");
const desktopNavButtons = document.querySelectorAll(".desktop-nav-option");
const desktopNavDropdowns = document.querySelectorAll(".desktop-nav-dropdown");

mobileOpenMenuBtn.addEventListener("click", () => {
    mobileNav.classList.add("open");
});

mobileCloseMenuBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open");
});

mobileNavButtons.forEach(navBtn => {
    navBtn.addEventListener("click", () => {
        let dropDown = navBtn.nextElementSibling;

        if(dropDown === null){
            return;
        }
        if (dropDown.style.height && dropDown.style.height !== "0px") {
            dropDown.style.height = "0px";
            navBtn.classList.remove("openmobile-drop");
        } else {
            dropDown.style.height = `${dropDown.scrollHeight}px`;
            navBtn.classList.add("openmobile-drop");
        }
    })
});

desktopNavButtons.forEach(navBtn => {
    navBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        let dropDown = navBtn.nextElementSibling;
        if(dropDown === null){
            return;
        }else{
            navBtn.classList.toggle("open")
        }
    })
    
})

document.addEventListener("click", (event) => {
    desktopNavDropdowns.forEach(dropdown => {
        const node = dropdown.parentNode.querySelector(".desktop-nav-option");
        if(!dropdown.contains(event.target)){
            node.classList.remove("open")
        }
    })
})