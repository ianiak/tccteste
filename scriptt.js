
// Contador que cresce com o tempo "Animação"
document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador");
    contadores.forEach(contador => {
        contador.innerText = "0";

        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");
            const contagem = +contador.innerText;
            const incremento = alvo / 100;

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento)
                setTimeout(atualizarContador, 40);
            }
            else {
                contador.innerText = alvo;

            }

        };
        atualizarContador();


    })
})
// Menu Hamburguer header responsivo 
const hamburgerMenu = document.querySelector("#botaoMenuHamburger");
const menu = document.querySelector("#navl");

hamburgerMenu.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Esconde o menu
    } else {
        menu.style.display = "block"; // Mostra o menu
    }
});
// Modo Escuro
function darkMode() {

    var element = document.body;
    element.classList.toggle("dark-mode");


}