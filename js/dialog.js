'use strict';
(() => {

    let userDialog = document.querySelector('.setup'),
        setupOpenBtn = document.querySelector('.setup-open'),
        setupCloseBtn = userDialog.querySelector('.setup-close');

    function openDialog() {
        if (userDialog.classList.contains('hidden')) {
            window.popup.openPopup(userDialog);
            window.backend.download(window.setup.onSuccess, window.setup.onError);
        } else {
            closeDialog();
        }
    }

    function closeDialog() {
        window.popup.closePopup(userDialog);
        window.setup.clear();
    }

    setupOpenBtn.addEventListener('click', openDialog);


    setupOpenBtn.addEventListener('keydown', (evt) => {
        if (window.utils.isEnterEvent(evt)) {
            openDialog();
        }
    });

    setupCloseBtn.addEventListener('click', closeDialog);

    setupCloseBtn.addEventListener('keydown', (evt) => {
        if (window.utils.isEnterEvent(evt)) {
            closeDialog();
        }
    });

})();