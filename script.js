let hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', () => {
    console.log('click')
    let dropDown = document.querySelector("#drop-down")
    dropDown.classList.toggle('on');
})