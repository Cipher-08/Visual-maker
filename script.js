function scrollAppear() {
    var introText = document.querySelector('.intro-text')
    var introPosition = introText.getBoundingClientRect().top;
    var screenPostion = window.innerHeight / 1.2;


    if (introPosition < screenPostion) {
        introText.classList.add('intro-appear')
    }
}
window.addEventListener('scroll', scrollAppear)
