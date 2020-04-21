window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Timer
    function countTimer(deadLine) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = timeRemaining > 0 ? Math.floor(timeRemaining % 60) : '00',
                minutes = timeRemaining > 0 ? Math.floor((timeRemaining / 60) % 60) : '00',
                hours = timeRemaining > 0 ? Math.floor(timeRemaining / 60 / 60) : '00';

                return {timeRemaining, hours, minutes, seconds};
        }

        function setNum(num){
            if (num >= 0 && num < 10) { 
                return '0' + num;
            } else {
                return num;
            }
        }

        function updateClock() {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.timeRemaining > 0 ? setNum(timer.hours) : timer.hours;
            timerMinutes.textContent = timer.timeRemaining > 0 ? setNum(timer.minutes) : timer.minutes;
            timerSeconds.textContent = timer.timeRemaining > 0 ? setNum(timer.seconds) : timer.seconds;

            if(timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            }
        }
        updateClock();
    }

    countTimer('24 april 2020');

    //Menu
    const toggleMenu = () => {
        let btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul > li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    //Popup
    const togglePopup = () => {
        let popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
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

        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
            countTop = -382;
        });
    };

    togglePopup();

});