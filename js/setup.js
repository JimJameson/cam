'use strict';



(() => {
    // document.querySelector('.setup-similar').classList.remove('hidden');

    let userDialog = document.querySelector('.setup'),
        similarListElement = document.querySelector('.setup-similar-list'),
        wizards = [];
    

    window.setup = {
        onSuccess: function (data) {
            wizards = data;
            window.debounce(window.setup.updateWizards);
            window.wizardColor(wizards);

        },
        onError: function (errorMessage) {
            let errorElement = document.getElementById('error');
            if (errorElement) {
                errorElement.remove();
            }
            let node = document.createElement('div');
            node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
            node.style.position = 'absolute';
            node.style.left = 0;
            node.style.right = 0;
            node.style.fontSize = '30px';
            node.id = 'error';
            node.textContent = errorMessage;

            document.body.insertAdjacentElement('afterbegin', node);
        },
        clear: function () {
            while (similarListElement.firstChild) {
                similarListElement.removeChild(similarListElement.firstChild);
            }
            userDialog.querySelector('.setup-similar').classList.add('hidden');
        },
        updateWizards: function () { // сортируем массив wizards начиная с самых похожих волшебников
            window.setup.clear();
            
            let coatColor = document.querySelector('.coat-color').value,
                eyesColor = document.querySelector('.eyes-color').value,
                fireballColor = document.querySelector('.fireball-color').value;
    
            function getRank(wizard) {
                let rank = 0;
    
                if (wizard.colorCoat === coatColor) {
                    rank += 3;
                }
                if (wizard.colorFireball === fireballColor) {
                    rank += 2;
                }
                if (wizard.colorEyes === eyesColor) {
                    rank += 1;
                }
    
                return rank;
            }
    
            function namesComparator(left, right) {
                if (left > right) {
                    return 1;
                } else if (right > left) {
                    return -1;
                } else {
                    return 0;
                }
            }
            
            wizards.sort((left, right) => {
                let rankDiff = getRank(right) - getRank(left);
    
                if (rankDiff === 0) {
                    rankDiff = namesComparator(left.name, right.name);
                }
                return rankDiff;
            }); 
            let fragment = document.createDocumentFragment();

            for (let i = 0; i < 4; i++) {
                fragment.appendChild(window.renderWizard(wizards[i]));
            }

            similarListElement.appendChild(fragment);
            userDialog.querySelector('.setup-similar').classList.remove('hidden');

        }
    
    };
})();