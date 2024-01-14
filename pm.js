

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
document.addEventListener('DOMContentLoaded', function () {
    var socialButtons = document.querySelectorAll('.button');
    function handleButtonClick() {
        // Get the image within the clicked social button
        var image = this.querySelector('img');

        // Hide the image by setting its display property to 'none'
        if (image) {
            image.style.display = 'none';
        }
    }

    
    socialButtons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });
});
