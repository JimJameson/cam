'use strict';

(() => {
    const ESC_KEYCODE = 27,
        ENTER_KEYCODE = 13;


    window.utils = {
        isEscEvent: function (evt) {
            return evt.keyCode === ESC_KEYCODE ? true : false;
        },
        isEnterEvent: function (evt) {
            return evt.keyCode === ENTER_KEYCODE ? true : false;
        },
        generateRandomValue: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        generateProperty: function (arr) { // выбор случайного элемента из массива с последующим его удалением
            let index = Math.floor(Math.random() * arr.length);
            let value = arr.splice(index, 1)[0];
            return value;
        }
    };
})();