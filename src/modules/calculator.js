const calculator = (price = 100) => {
    const calculatorInputs = document.querySelectorAll('.calc-block > .calc-item:not(.calc-type)'),
        calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total'),
        speed = 500;

    calculatorInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/g, '');
        });
    });

    const countSum = (newVal) => {
        let total = 0,
            countValue = 1,
            dayValue = 1;

        let typeValue = calcType.options[calcType.selectedIndex].value,
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

        let count = newVal ? 0 : +totalValue.textContent;
        const inc = Math.round(+total / speed);

        if(count < total) {
            totalValue.textContent = count + inc;
            setTimeout(countSum, 1);
        } else {
            totalValue.textContent = total;
        }
    }

    calcBlock.addEventListener('change', (e) => {
        const target = e.target;

        if(target.matches('select') || target.matches('input')) {
            countSum(true);
        }
    });
};

export default calculator;