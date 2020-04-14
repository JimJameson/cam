'use strict';

(() => {
    const DIALOG_POS_LEFT = '50%',
        DIALOG_POS_TOP = '80px';

    let userDialog = document.querySelector('.setup'),
        setupUserName = userDialog.querySelector('.setup-user-name');

    function onPopupEscPress(evt) {
        if (window.utils.isEscEvent(evt) && evt.target != setupUserName) {
            window.dialog.closePopup(userDialog);
        }
    }

    window.popup = {
        openPopup: function (popup) {
            popup.classList.remove('hidden');
            document.addEventListener('keydown', onPopupEscPress);
        },
        closePopup: function (popup) {
            popup.classList.add('hidden');
            document.removeEventListener('keydown', onPopupEscPress);

            userDialog.style.left = DIALOG_POS_LEFT;
            userDialog.style.top = DIALOG_POS_TOP;
        }
    };
})();