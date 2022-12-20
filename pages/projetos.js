/*Modo escuro*/ 

const changeThemeBtn = document.querySelector("#change-theme")

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

function loadTheme() {
    const darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});

window.sr = ScrollReveal({reset: true});

/*sobre-mim*/ 

/*rotate: {x: 0, y:100, z:0},*/ 

sr.reveal('.sobre-mim02', {
    duration: 3000
});

sr.reveal('#t2', {
    duration: 3000
});

sr.reveal('.col', {
    duration: 2000
});

sr.reveal('.col-6', {
    duration: 2000
});

sr.reveal('.col-12', {
    duration: 2000
});