'use strict';

(() => {
    function onRequest(onSuccess, onError, method, url, data) {
        let promise = new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open(method, url);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
                    }
                }
            });

            xhr.send(data);
        });

        promise.then(onSuccess)
            .catch(onError);

    }

    window.backend = {
        download: function (onSuccess, onError) {
            onRequest(onSuccess, onError, 'GET', 'data.json', undefined);
        },
        upload: function (data, onSuccess, onError) {
            onRequest(onSuccess, onError, 'POST', 'save.php', data);
        }
    };
})();