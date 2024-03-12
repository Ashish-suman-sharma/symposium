window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var button = document.querySelector('.menubutton');

    if (width <= 768) { // Change this value to the breakpoint you want
        button.innerText = 'call';
    } else {
        button.innerText = 'Call us';
    }
});

window.dispatchEvent(new Event('resize'));