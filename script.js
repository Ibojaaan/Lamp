let image = document.getElementById('image');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (image.getAttribute("src") == "image/on.png"){
        image.setAttribute("src", "image/off.png");
        playoff();
        btn.innerHTML = 'on'
    }else{
        image.setAttribute("src", "image/on.png");
        playOn();
        btn.innerHTML = 'off'
    }

});

let playOn = () => new Audio("audio/on.mp3").play();
let playoff = () => new Audio("audio/off.mp3").play();