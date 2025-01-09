document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.querySelector('.scroll-text');
    const textWidth = scrollText.offsetWidth;
    const parentWidth = scrollText.parentElement.offsetWidth;

    const animationDuration = (textWidth + parentWidth) / 250;

    scrollText.style.animationDuration = `${animationDuration}s`;
});
function section(n){
    var section = document.getElementById(`section-${n}`);
    var sectionAlls = document.querySelectorAll(`main`);
    var navs = document.querySelectorAll(`.nav-${n}`);
    var navAlls = document.querySelectorAll(`nav .content p`);
    sectionAlls.forEach(element => {
        element.classList.remove('online');
    });
    navAlls.forEach(element => {
        element.classList.remove('selected');
    });
    navs.forEach(element => {
        element.classList.add('selected');
    });
    section.classList.add('online');
}

function classe(n){
    var terza = document.getElementById('terza');
    var quarta = document.getElementById('quarta');
    var quinta = document.getElementById('quinta');
    var annoTerza = document.getElementById('anno-terza');
    var annoQuarta = document.getElementById('anno-quarta');
    var annoQuinta = document.getElementById('anno-quinta');
    var annos = document.querySelectorAll(`.anno`);
    var classes = document.querySelectorAll(`.classe`);
    classes.forEach(element => {
        element.classList.remove('choosen');
    });
    annos.forEach(element => {
        element.classList.add('hidden');
    });
    if(n == 3){
        terza.classList.add('choosen');
        annoTerza.classList.remove('hidden');
        console.log('terza');
    }else if(n == 4){
        quarta.classList.add('choosen');
        annoQuarta.classList.remove('hidden');
        console.log('quarta');
    }else if(n == 5){
        quinta.classList.add('choosen');
        annoQuinta.classList.remove('hidden');
        console.log('quinta');
    }
}