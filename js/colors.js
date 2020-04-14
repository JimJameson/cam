'use strict';

// (() => {
//     window.data = {
//         coatColors: ['rgb(101, 137, 164)', 
//         'rgb(241, 43, 107)',
//         'rgb(146, 100, 161)',
//         'rgb(56, 159, 117)',
//         'rgb(215, 210, 55)',
//         'rgb(0, 0, 0)'],
//         eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
//         fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
//         names: ['Иван',
//         'Хуан Себастьян',
//         'Мария',
//         'Кристоф',
//         'Виктор',
//         'Юлия',
//         'Люпита',
//         'Вашингтон'],
//         surnames: ['да Марья',
//         'Верон',
//         'Мирабелла',
//         'Вальц',
//         'Онопко',
//         'Топольницкая',
//         'Нионго',
//         'Ирвинг']
//         }
// })();

(() => {
    window.colors = {
        getColorCoats: function(wizards) {
            let colorCoats = wizards.map((elem) => {
                return elem.colorCoat;
                });
            return colorCoats;
        },
        getColorEyes: function(wizards) {
            let colorEyes = wizards.map((elem) => {
                return elem.colorEyes;
            });
            return colorEyes;
        },
        getColorFireballs: function(wizards) {
            let colorFireballs = wizards.map((elem) => {
                return elem.colorFireball;
            });
            return colorFireballs;
        }
    };
})();