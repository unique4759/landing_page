const toggleMenu = () => {
    let btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul > li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target.classList.contains('close-btn') || target.closest('li')) {
            e.preventDefault();

            handlerMenu();

            if(!target.classList.contains('close-btn')) {
                let goToSection = document.querySelector(`${target.hash}`);
                goToSection.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }            
    });

    btnMenu.addEventListener('click', (e) => {
        let target = e.target;

        target = target.closest('.menu');

        handlerMenu();
    });
};

export default toggleMenu;