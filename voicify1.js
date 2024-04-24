const menuicon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar1');
const overlay = document.getElementById('overlay');


menuicon.addEventListener('click', function() {
  
  sidebar.classList.toggle('visible');
  overlay.classList.toggle('visible');
  
});







let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voicesxxx");
let speedSelect = document.querySelector("#speed");
let pitchSelect = document.querySelector("#pitch");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};


voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
});

// Populate speed select
for (let i = 0.1; i <= 2; i += 0.1) {
    speedSelect.options[speedSelect.options.length] = new Option(i.toFixed(1), i);
} 

speedSelect.addEventListener("change", () => {
    speech.rate = parseFloat(speedSelect.value);
});

// Populate pitch select
for (let i = 0.1; i <= 2; i += 0.1) {
    pitchSelect.options[pitchSelect.options.length] = new Option(i.toFixed(1), i);
}

pitchSelect.addEventListener("change", () => {
    speech.pitch = parseFloat(pitchSelect.value);
});

document.querySelector("#startButton").addEventListener("click", () => {
    speech.text = document.querySelector(".txt-area").value;
    
    window.speechSynthesis.speak(speech);
});

