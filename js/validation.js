'use strict';

(() => {
    let userDialog = document.querySelector('.setup'),
        setupUserName = userDialog.querySelector('.setup-user-name');

    setupUserName.addEventListener('invalid', (evt) => {
        if (setupUserName.validity.tooShort) {
            setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
        } else if (setupUserName.validity.tooLong) {
            setupUserName.setCustomValidity('Имя не должно превышать 25 символов');
        } else if (setupUserName.validity.valueMissing) {
            setupUserName.setCustomValidity('Обязательное поле');
        } else {
            setupUserName.setCustomValidity('');
        }
    });
})();