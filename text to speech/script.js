
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const textarea = document.querySelector("#speech-text");
const speedInput = document.querySelector("#speed");

playBtn.addEventListener("click", () => {
    playText(textarea.value);
});

pauseBtn.addEventListener("click", pauseSpeech);
stopBtn.addEventListener("click", stopSpeech);

function playText(text){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        speechSynthesis.resume();
        return;
    }
    textarea.disabled = true;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.rate = speedInput.value || 1;
    speechSynthesis.speak(utterance);
    utterance.onend = function (){
        textarea.disabled = false;
    }
}

function pauseSpeech(){
    if(speechSynthesis.speaking)
        speechSynthesis.pause();
}

function stopSpeech(){
    speechSynthesis.resume();
    speechSynthesis.cancel();
}