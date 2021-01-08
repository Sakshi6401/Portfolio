function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.list');
    const navLinks = document.querySelectorAll('.list li');
    //toggle nav
    burger.addEventListener('click',()=>{
        nav.lastElementChild.classList.toggle('add');
        nav.classList.toggle('new');
    //animate links
        navLinks.forEach((link,index)=>{
            if(link.style.animation)
                link.style.animation = '';
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.45}s`;
        });
    //burger animation
        burger.classList.toggle('toggle');

    });
}


navSlide();