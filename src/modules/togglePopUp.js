const togglePopUp = () => {
    let popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content'),
        animateInterval,
        countTop = -382,
        animate = false;

    const popupAnimate = () => {
        animateInterval = requestAnimationFrame(popupAnimate);
        countTop++;

        if(countTop < 100) {
            popupContent.style.top = countTop + 'px';
        } else {
            cancelAnimationFrame(animateInterval);
        }
    }

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if(screen.width > 768) {
                popupContent.style.top = `-382px`;
                popup.style.display = 'block';
                animateInterval = requestAnimationFrame(popupAnimate);
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')) {
            popup.style.display = 'none';
            countTop = -382;
        } else {
            target = target.closest('.popup-content');

            if(!target) {
                popup.style.display = 'none';
                countTop = -382;
            }
        }
    });
};

export default togglePopUp;