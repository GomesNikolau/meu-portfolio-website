/fazendo com que o cabecalho se quebrar assim que chegar no sobre nos(about)/ 
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});
