import { elements } from "./elements.js";
import sounds from "./sounds.js";
import Sound from "./sounds.js";

const {
    buttonPlay,
    buttonStop,
    buttonCoffee,
    buttonFire,
    buttonRain,
    buttonTree,
    minutesDisplay,
    secondsDisplay,
    buttonPlus,
    buttonMinus,
    switchButton,
    volumeControlCoffee,
    volumeControlTree,
    volumeControlRain,
    volumeControlFire,
} = elements

const sound = Sound()

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}


function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes == 0 && seconds == 0


        if (isFinished) {
            updateDisplay(0, 0)
            stopAudio()
            return
        }


        updateDisplay(minutes, 0)


        if (seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

function updateMinutes(newMinutes) {
    minutes = newMinutes
    updateDisplay()
}

buttonPlay.addEventListener("click", function () {
    let newMinutes = prompt('set the minutes and the sound of your choice :)')
    if (!newMinutes) {
        return false
    }
    updateMinutes(newMinutes)
    countdown()
})

buttonStop.addEventListener("click", function () {
    clearTimeout(timerTimeOut)
    updateDisplay(0.0)
    stopAudio()
})

let isClicked = false

buttonCoffee.addEventListener("click", function () {
    if (isClicked) {
        sound.coffeeSound.loop = true
        sound.coffeeSound.play()
        buttonCoffee.classList.add("select")
        volumeControlCoffee.disabled = true;
        isClicked = false;
    } else {
        stopAudio()
        buttonTree.classList.remove("select")
        volumeControlCoffee.disabled = true;
        isClicked = true;
    }
    }
)

buttonTree.addEventListener("click", function () {
    if (isClicked) {
        sound.treeSound.loop = true
        sound.treeSound.play()
        buttonTree.classList.add("select")
        volumeControlTree.disabled = true;
        isClicked = false;
    } else {
        stopAudio()
        buttonTree.classList.remove("select")
        volumeControlTree.disabled = true;
        isClicked = true;
    }

})

buttonRain.addEventListener("click", function () {
    if (isClicked) {
        sound.rainSound.loop = true
        sound.rainSound.play()
        buttonRain.classList.add("select")
        volumeControlRain.disabled = true;
        isClicked = false;
    } else {
        stopAudio()
        buttonRain.classList.remove("select")
        volumeControlRain.disabled = false;
        isClicked = true;
    }


})

buttonFire.addEventListener("click", function () {
    if (isClicked) {
        sound.fireSound.loop = true
        sound.fireSound.play()
        buttonFire.classList.add("select")
        volumeControlFire.disabled = true;
        isClicked = false;
    } else {
        buttonFire.classList.remove("select")
        volumeControlFire.disabled = false;
        isClicked = true;
    }

})


buttonPlus.addEventListener("click", function () {
    minutes = Number(minutes)
    minutes += 5
    updateDisplay(minutes, seconds)
})

buttonMinus.addEventListener("click", function () {
    minutes = Number(minutes)
    minutes -= 5
    updateDisplay(minutes, seconds)
    if (seconds <= 0 && minutes <= 0) {
        updateDisplay(0, 0);
        return;
    }
})

switchButton.addEventListener("click", function () {
    switchButton.classList.add(".hide")
})


function stopAudio() {
    sound.coffeeSound.pause()
    sound.treeSound.pause()
    sound.rainSound.pause()
    sound.fireSound.pause()
}

function setVolume(value) {
    sound.coffeeSound.volume = value / 100;
    sound.treeSound.volume = value / 100;
    sound.rainSound.volume = value / 100;
    sound.fireSound.volume = value / 100;
}


volumeControlCoffee.addEventListener('input', () => {
    setVolume(volumeControlCoffee.value);
    
});

volumeControlCoffee.addEventListener('onchange', (value) => {
    setVolume(volumeControlCoffee.value);
});

volumeControlTree.addEventListener('input', () => {
    setVolume(volumeControlTree.value);
    
});

volumeControlTree.addEventListener('onchange', (value) => {
    setVolume(volumeControlTree.value);
});


volumeControlRain.addEventListener('input', () => {
    setVolume(volumeControlRain.value);
    
});

volumeControlRain.addEventListener('onchange', (value) => {
    setVolume(volumeControlRain.value);
});

volumeControlFire.addEventListener('input', () => {
    setVolume(volumeControlFire.value);
    
});

volumeControlFire.addEventListener('onchange', (value) => {
    setVolume(volumeControlFire.value);
});

















