'use strict';

(() => {
    // Перекрашивание мантии, глаз и фаербола волшебника
    window.wizardColor = function(wizards) {
        let userDialog = document.querySelector('.setup'),
            coat = userDialog.querySelector('.wizard-coat'),
            coatInput = userDialog.querySelector('.coat-color'),
            eyesInput = userDialog.querySelector('.eyes-color'),
            fireballInput = userDialog.querySelector('.fireball-color'),
            colorCoats = window.colors.getColorCoats(wizards),
            colorEyes = window.colors.getColorEyes(wizards),
            colorFireballs = window.colors.getColorFireballs(wizards);
        
        coat.addEventListener('click', () => {
            window.colorize(coat, coatInput, colorCoats);
            window.debounce(window.setup.updateWizards);
        });

        let eyes = userDialog.querySelector('.wizard-eyes');
        eyes.addEventListener('click', () => {
            window.colorize(eyes, eyesInput, colorEyes);
            window.debounce(window.setup.updateWizards);
        });

        let fireball = userDialog.querySelector('.setup-fireball-wrap');
        fireball.addEventListener('click', () => {
            window.colorize(fireball, fireballInput, colorFireballs);
            window.debounce(window.setup.updateWizards);
        });

    };
})();