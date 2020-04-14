'use strict';

(() => {
    const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    let fileChooser = document.querySelector('.upload input[type=file]'),
        preview = document.querySelector('.setup-user-pic');
    
    fileChooser.addEventListener('change', () => {
        let file = fileChooser.files[0],
            fileName = file.name.toLowerCase(),
            matches = FILE_TYPES.some((it) => {
                return fileName.endsWith(it);
            });

        if (matches) {
            let reader = new FileReader();

            reader.addEventListener('load', () => {
                preview.src = reader.result;
            });

            reader.readAsDataURL(file);
        }
    });
})();