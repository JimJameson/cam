'use strict';

(() => {
    let lastColor;
    window.colorize = function(element, input, colors) {
            let randomColor;
            do {
                randomColor = window.utils.generateRandomValue(colors);
                
            } while (randomColor === lastColor && colors.length > 1);
            if (element.tagName.toLowerCase() === 'div') {
                element.style.backgroundColor = randomColor;
            } else {
                element.style.fill = randomColor;
            }
            input.value = randomColor;
            lastColor = randomColor;
    };
})();