setInterval(function() {
    let elements = '',
        date = new Date(),
        nextYear = date.getFullYear() + 1,
        days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        checkTime = date.getHours() >= 12 ? 'PM' : 'AM';

    function howTime(hour) { 
        let result;

        if(hour >= 5 && hour <= 9) {
            result = 'утро';
        } else if (hour > 9 && hour <= 17) {
            result = 'день';
        } else if (hour > 17 && hour <= 21) {
            result = 'вечер';
        } else {
            result = 'ночь';
        }

        return result;
    } 

    function setNum(num){
        if (num > 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function daysLeftNewYear() { 
        let nextDate = new Date(nextYear, 1, 1),
            msPerDay = 24 * 60 * 60 * 1000,
            daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msPerDay);
        
        return daysLeft;
    }
    
    elements += '<p>Добрый ' + howTime(date.getHours()) + '</p>';
    elements += '<p>Сегодня: ' + days[date.getDay()] + '</p>';
    elements += '<p>Текущее время: ' + setNum(date.getHours()) + ':' + setNum(date.getMinutes()) + ':' + setNum(date.getSeconds()) + ' ' + checkTime + '</p>';
    elements += '<p>До нового года осталось ' + daysLeftNewYear() + ' дней</p>';

    document.body.innerHTML = elements;
}, 1000);