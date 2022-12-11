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

/*Animações ao scroll*/ 

window.sr = ScrollReveal({reset: true});

/*Titulos*/ 

sr.reveal('.center', {
    rotate: {x: 0, y:80, z:0},
    duration: 3000
});

sr.reveal('.container01', {
    duration: 3000
});

sr.reveal('#parte1', {
    duration: 3000
});