const validateFormInputs = () => {
    const phoneInputs = document.querySelectorAll('.form-phone'),
        nameInputs = document.querySelectorAll('input[name="user_name"]'),
        messInputs = document.querySelectorAll('input[name="user_message"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^\d+]/g, '');
        });
    });
    
    nameInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я\s]/gi, '');
        });
    });
    
    messInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я\s\.,:;%#№@""\!\?\-\(\)\*]/gi, '');
        });
    });
};

export default validateFormInputs;