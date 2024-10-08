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
