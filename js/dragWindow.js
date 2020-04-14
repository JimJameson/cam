'use strict';

// Реализация перетаскивания окна Setup
(() => {
    let userDialog = document.querySelector('.setup'),
        dialogHandler = userDialog.querySelector('.avatar-pic');

    dialogHandler.addEventListener('mousedown', (evt) => {
        evt.preventDefault();

        let startCoords = {
                x: evt.clientX,
                y: evt.clientY
            },
            dragged = false;

        function onMouseMove(moveEvt) {
            moveEvt.preventDefault();
            dragged = true;

            let shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            }

            userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
            userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
        }

        function onMouseUp(upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                let onClickPreventDefault = function (evt) {
                    evt.preventDefault();
                    dialogHandler.removeEventListener('click', onClickPreventDefault);
                };
                dialogHandler.addEventListener('click', onClickPreventDefault);
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
})();