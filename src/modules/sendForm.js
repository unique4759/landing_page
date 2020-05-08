const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
        form = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem;';

    const proccessForm = (data) => {
        let inputPhone = data.querySelector('.form-phone').value;

        data.appendChild(statusMessage);

        statusMessage.textContent = loadMessage;

        if(!/^(\+)?[0-9]{8,18}$/g.test(inputPhone)) {
            statusMessage.textContent = 'Проверьте правильность ввода телефона';
        } else {
            const formData = new FormData(data);

            postData(formData).then(res => {
                if(res.status !== 200) {
                    throw new Error('status not 200!')
                }
                statusMessage.textContent = successMessage;
                data.reset();
            }).catch(err => {
                statusMessage.textContent = errorMessage;
                data.reset();
                console.log(err);
            });
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        proccessForm(form);
    });

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        proccessForm(form2);
    });

    form3.addEventListener('submit', (e) => {
        e.preventDefault();
        proccessForm(form3);
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            body: body
        
        });
    };
};

export default sendForm;