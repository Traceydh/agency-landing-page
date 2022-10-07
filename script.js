let hamburger = document.querySelector('#hamburger');
let dropDown = document.querySelector("#drop-down")
hamburger.addEventListener('click', () => {
    dropDown.classList.toggle('on');
})

window.onclick = function(event) {
    if (!event.target.matches('img') && !dropDown.classList.contains('on')) {
        dropDown.classList.toggle('on');
    }
}