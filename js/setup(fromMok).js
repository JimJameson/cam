'use strict';



(() => {
    document.querySelector('.setup-similar').classList.remove('hidden');

    let similarListElement = document.querySelector('.setup-similar-list'),
        similarWizardTemplate = document.querySelector('#similar-wizard-template')
                                .content
                                .querySelector('.setup-similar-item');
    
    
    let wizards = [];
    
    
    function generateWizard() { // случайная генерация мага
    
        wizards.push({
            name: window.utils.generateRandomValue(window.data.names),
            surname: window.utils.generateRandomValue(window.data.surnames),
            coatColor: window.utils.generateRandomValue(window.data.coatColors),
            eyesColor: window.utils.generateRandomValue(window.data.eyesColors)
        });
    }
    
    function createDOMElement(element) { // создание дом элемента по шаблону
        let wizardElement = similarWizardTemplate.cloneNode(true);
    
        wizardElement.querySelector('.setup-similar-label').textContent = `${element.name} ${element.surname}`;
        wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = element.eyesColor;
    
        similarListElement.appendChild(wizardElement);
    
    }
    
    for (let i = 0; i < 4; i++) {
        generateWizard();   
    }       
    
    wizards.forEach((element) => {
        createDOMElement(element);
    });

})();




