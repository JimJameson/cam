'use strict';

(() => {
    let userDialog = document.querySelector('.setup'),
        form = userDialog.querySelector('.setup-wizard-form');

    form.addEventListener('submit', (evt) => {
        window.backend.upload(new FormData(form), (response) => {
            userDialog.classList.add('hidden');
        }, window.setup.onError);
        evt.preventDefault();
    });
})();