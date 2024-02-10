let textToSpeak = document.querySelector("#textInput")
let speakButton = document.querySelector("#speak")
let clearButton = document.querySelector("#clear")
let modeButton = document.querySelector('#mode')
let body = document.querySelector("body")
let currMode = "light"

speakButton.addEventListener("click", () => {
  let text = textToSpeak.value;

  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(text)

    window.speechSynthesis.speak(utterance)
  }
  else {
    alert("Text-to-speech is not supported in this browser.");
  }
});

clearButton.addEventListener("click", () => {
  // Clear the text in the textarea
  textToSpeak.value = '';
});

modeButton.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = 'dark'
    body.classList.add('dark')
    body.classList.remove('light')
  } else {
    currMode = 'light'
    body.classList.add('light')
    body.classList.remove('dark')
  }
})
