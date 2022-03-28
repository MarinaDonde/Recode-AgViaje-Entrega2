const button = document.getElementById('pqp');
const popup = document.querySelector('.popup-wrapper');


button.addEventListener('click', () => {
    popup.style.display = 'block';
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper' ];
    const closePopup = classNames.some(className => className === classNameOfClickedElement);

    if (closePopup) {
        popup.style.display = 'none';
    }
})

