// main.js

// Variables for easy access:
let hornSound = document.getElementById("horn-sound");
let volumeNumber = document.getElementById("volume-number");
let volumeSlider = document.getElementById("volume-slider");
let playButton = document.getElementById("honk-btn");
let volumeImage = document.getElementById("volume-image");
let soundImage = document.getElementById("sound-image");
// let radioAir = document.getElementById("radio-air-horn");
// let radioCar = document.getElementById("radio-car-horn");
// let radioParty = document.getElementById("radio-party-horn"); never actually used, just used query selector and for each
let radios = [... document.querySelectorAll('[type="radio"]')];

//play volume
playButton.addEventListener('click', e => {
    e.preventDefault();
    hornSound.play();
})

//volume Number adjustment  + volume image update:
const onChange = e => {
    hornSound.volume = e.target.value / 100;
    console.log(hornSound.volume);
    volumeSlider.value = e.target.value;
    volumeNumber.value = e.target.value;

    //volume level change.
    if (e.target.value >= 67) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
    } else if (e.target.value >= 34) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
    } else if (e.target.value >= 1) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
    } else {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
    }
}
volumeNumber.addEventListener('change', onChange);
volumeSlider.addEventListener('change', onChange);

//changing options (air horn/carhorn/party horn), used array made by queryselector
//added event listener to each item in that array.
const select = e => {
    if (e.target.id === "radio-air-horn"){
        hornSound.setAttribute("src", "./assets/media/audio/air-horn.mp3");
        soundImage.setAttribute("src", "./assets/media/images/air-horn.svg");
    }
    if (e.target.id === "radio-car-horn"){
        hornSound.setAttribute("src", "./assets/media/audio/car-horn.mp3");
        soundImage.setAttribute("src", "./assets/media/images/car.svg");
    }
    if (e.target.id === "radio-party-horn"){
        hornSound.setAttribute("src", "./assets/media/audio/party-horn.mp3");
        soundImage.setAttribute("src", "./assets/media/images/party-horn.svg");
    }
}
radios.forEach( radio => {
    radio.addEventListener('click', select);
})
