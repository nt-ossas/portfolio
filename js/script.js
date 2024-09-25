document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.querySelector('.scroll-text');
    const textWidth = scrollText.offsetWidth;
    const parentWidth = scrollText.parentElement.offsetWidth;

    const animationDuration = (textWidth + parentWidth) / 250;

    scrollText.style.animationDuration = `${animationDuration}s`;
});