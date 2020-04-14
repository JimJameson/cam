'use strict';

(() => {
    let promise = new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', URL);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
            }

        });

        xhr.send();
    });

    promise.then(onSuccess)
        .catch(onError);

})();