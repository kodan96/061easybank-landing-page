window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    b = baffle('.reveal', {
        characters: '░▒▒▒▒░░▒░░▒▒▒▒▒░▒▒▒░░▒░▒▒▒▒▒▒░▒▒▒░░▒░▒▒▒▒░░░▒░░░',
        speed: 120,
    });
    b.start();

    const tl = gsap.timeline()
    tl.to('.reveal', {
        opacity: 1,
        duration: .5,
        ease: 'expo',
        onComplete() {
            b.reveal(1000)
        }
    })
    
    
    .to('.fade-in', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
    })
    
    .to('.fade-in-initial', {
        opacity: 1,
        duration: .4,
        y: 0,
        stagger: .2,
        delay: 1,
        ease: 'expo',
    })
    
    $('.open, .close').on('click', () => {
        $('.open').toggle();
        $('.close').toggle();
        $('nav').slideToggle();

    })
})