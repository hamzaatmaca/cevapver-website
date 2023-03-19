import JITSI from "./utils/jitsi.js";
import speech from "./utils/speech.js";
import runVideo from "./utils/objectDetection.js";

//RUN JITSI
JITSI();

//OBJECT DETECTION
runVideo();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "tr-TR";

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  //HANDLE BADWORDS
  speech.BadWords(text);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
