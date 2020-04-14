'use strict';
(() => {
    const DEBOUNCE_INTERVAL = 1000;

    window.debounce = function (fun) {
        let lastTimeout = null;
        if (lastTimeout) {
            window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(() => {
            fun();
        }, DEBOUNCE_INTERVAL);
    };
})();