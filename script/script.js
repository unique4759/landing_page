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

            timerHours.textContent = setNum(timer.hours);
            timerMinutes.textContent = setNum(timer.minutes);
            timerSeconds.textContent = setNum(timer.seconds);
        }

        if(getTimeRemaining().timeRemaining > 0) {
            setInterval(updateClock, 1000);
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    countTimer('28 april 2020');

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
                    tabContent[i].classList.add('d-none');
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

    //Animation
    const scrollTo = () => {
        let nextSection = document.getElementById('service-block'),
            btn = document.querySelector('a[href="#service-block"]');

        const sectionTo = () => {
            nextSection.scrollIntoView({block: 'center', behavior: 'smooth'});
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            sectionTo();
        });
    };

    scrollTo();

    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');

        for (let i = 0; i < slide.length; i++) {
            let liItem = document.createElement('li');
                liItem.classList.add('dot');

            if(i === 0) liItem.classList.add('dot-active');

            portfolioDots.appendChild(liItem);
        }

        const dot = document.querySelectorAll('.dot');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;

            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if(elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if(currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    }

    slider();

    //Our taem
    const changePhotoTeam = () => {
        const photos = document.querySelectorAll('.command__photo');

        photos.forEach((photo) => {
            let src = photo.getAttribute('src');

            photo.addEventListener('mouseenter', (e) => {
                event.target.src = event.target.dataset.img;
            });
            photo.addEventListener('mouseleave', (e) => {
                event.target.src = src;
            });
        });
    };

    changePhotoTeam();

    //Calculator
    const calculator = (price = 100) => {
        const calculatorInputs = document.querySelectorAll('.calc-block > .calc-item:not(.calc-type)'),
            calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total'),
            speed = 2000;

        calculatorInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/g, '');
            });
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if(calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if(calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if(typeValue && squareValue) {
                total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            }

            const animateTotal = () => {
                let count = +totalValue.textContent;
                const inc = +total / speed;
    
                if(count < total) {
                    totalValue.textContent = count + inc;
                    setTimeout(animateTotal, 1);
                } else {
                    totalValue.textContent = total;
                }
            };

            animateTotal();
        }

        calcBlock.addEventListener('change', (e) => {
            const target = e.target;

            if(target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };

    calculator(100);
});