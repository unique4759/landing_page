const togglePopUp = () => {
    let popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    if(document.documentElement.clientWidth > 768) {
        popupContent.style.opacity = 0;
        popupContent.style.transition = "1s";
    }

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if(document.documentElement.clientWidth > 768) {
                setTimeout(function () {
                    popupContent.style.opacity = 1;
                }, 500);
                popup.style.display = 'block';
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')) {
            popup.style.display = 'none';
            if(document.documentElement.clientWidth > 768) {
                popupContent.style.opacity = 0;
            }
        } else {
            target = target.closest('.popup-content');

            if(!target) {
                popup.style.display = 'none';
                if(document.documentElement.clientWidth > 768) {
                    popupContent.style.opacity = 0;
                }
            }
        }
    });
};

export default togglePopUp;