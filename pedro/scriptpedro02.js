window.sr = ScrollReveal({reset: true});

sr.reveal('.list-group',{
    rotate: {x: 0, y:0, z:0},
    duration: 3000
});

sr.reveal('.texao, .titulo',{
    rotate: {x: 0, y:100, z:0},
    duration: 3000
});

sr.reveal('#texto-html5, .tabela',{
    rotate: {x: 0, y:0, z:0},
    duration: 2000
});

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