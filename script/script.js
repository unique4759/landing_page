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
        };

        menu.addEventListener('click', (e) => {
            let target = e.target;

            if(target.classList.contains('close-btn') || target.closest('li')) {
                handlerMenu();
            }
        });

        btnMenu.addEventListener('click', (e) => {
            let target = e.target;

            target = target.closest('.menu');

            handlerMenu();
        });
    };

    toggleMenu();

    //Popup
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

    togglePopUp();

    //Tabs

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++) {
                if(index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none')
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if(target) {
                tab.forEach((item, index) => {
                    if(item === target) {
                        toggleTabContent(index);
                    }
                });
            }
        });
    };

    tabs();
});