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

    countTimer('21 april 2020');

});