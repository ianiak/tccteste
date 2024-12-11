function darkMode() {

    var element = document.body;
    element.classList.toggle("dark-mode");


    
   
}

// headerjavascrpt

const hamburgerMenu = document.querySelector("#botaoMenuHamburger");
const menu = document.querySelector("#navl");

hamburgerMenu.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Esconde o menu
    } else {
        menu.style.display = "block"; // Mostra o menu
    }
});

// 

// Tirando Animação da responsividade
// Elementos que sejam div
const divs = document.querySelectorAll("div");


// Detetor de dispositivos mobiles - Resolução menor a 768px
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width < 768) {
        mobileMode();
    }
});

// Função que é executada se está no modo responsivo, tira o atributo "data-aos" de cada elemento div.
function mobileMode() {
    divs.forEach((div) => {
        div.removeAttribute("data-aos");
    })
}


