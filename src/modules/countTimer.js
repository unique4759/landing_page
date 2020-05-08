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
};

export default countTimer;