// Menu toggle

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle','nav-menu');


// Link select and close menu

const navLink = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');

function linkAction(){
    navLink.forEach( n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach( n => {
                n.classList.remove('active');
                document.querySelector('#nav-'+id).classList.add('active');
            })
        }

        
    })
}
navLink.forEach( n => n.addEventListener('click', linkAction));

const scrollreveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: true
})

scrollreveal.reveal('.home_title',{});
scrollreveal.reveal('.button',{delay: 400});
scrollreveal.reveal('.home_img',{delay: 400});
scrollreveal.reveal('.home_social-icon',{delay: 600, interval: 200});

scrollreveal.reveal('.about_img',{});
scrollreveal.reveal('.about_subtitle',{delay: 400});
scrollreveal.reveal('.about_text',{delay: 400});

scrollreveal.reveal('.skills_subtitle',{});
scrollreveal.reveal('.skills_text',{delay: 200});
scrollreveal.reveal('.skills_data',{interval: 200});
scrollreveal.reveal('.skills_img',{delay: 400});

scrollreveal.reveal('.contact_input',{interval: 200});