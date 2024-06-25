// Function to initialize speech recognition
function initializeSpeechRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[event.resultIndex][0].transcript
      .trim()
      .toLowerCase();
    console.log("Detected speech:", transcript);

    // Check for the trigger phrases
    if (
      transcript.includes("hey") ||
      transcript.includes("hello") ||
      transcript.includes("hi")
    ) {
      console.log("Trigger phrase detected!");
      document.getElementById("startBtn").click(); // Simulate a click on the start button
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
  };

  return recognition;
}

// Initialize and start speech recognition for trigger phrases
const triggerRecognition = initializeSpeechRecognition();
triggerRecognition.start();

// js for voice input

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const Input = document.getElementById("input");

// Check if the browser supports the Web Speech API
if (!("webkitSpeechRecognition" in window)) {
  alert(
    "Web Speech API is not supported by this browser. Please use Google Chrome."
  );
} else {
  // Initialize the speech recognition object
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  // Event handler for when recognition starts
  recognition.onstart = function () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    Input.placeholder = "Listening...";
  };

  // Event handler for when recognition ends
  recognition.onend = function () {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    Input.placeholder = "Ask here...";

    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    const text3 = textToSpeak.textContent;
    speakText(text3);
  };
  // Event handler for capturing speech results
  recognition.onresult = function (event) {
    let interimTranscript = "";
    let finalTranscript = "";

    for (let i = 0; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
    Input.value = finalTranscript || interimTranscript;
    searchofinput();
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
  };

  // Event handler for errors
  recognition.onerror = function (event) {
    console.error("Speech recognition error", event.error);
    Input.placeholder = "Error occurred in recognition: " + event.error;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  };

  // Start the speech recognition
  startBtn.addEventListener("click", () => {
    recognition.start();

    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
  });

  // Stop the speech recognition
  stopBtn.addEventListener("click", () => {
    recognition.stop();

    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    // stopspeak();
  });
}
//functiion to search

function searchofinput() {
  {
    document.getElementById("history").style.display = "inline-block";
    document.getElementById("clearBtn").style.display = "inline-block";
    const userQuestion = input.value.toLowerCase();
    let textToSpeak = "I'm sorry, I don't have answer for that";
    userQuery.textContent = input.value;

    // Analyze keywords in the user's input
    for (let key in responses) {
      if (userQuestion.includes(key)) {
        textToSpeak = responses[key];
        break;
      }
    }
    responseDiv.textContent = textToSpeak;
    input.value = "";
  }
  triggerRecognition.start();
}

// js for text to voice

const speakBtn = document.getElementById("speakBtn");
const textToSpeak = document.getElementById("textToSpeak");
const stopvoiceBtn = document.getElementById("stopvoiceBtn");
stopvoiceBtn.style.display = "none";

// Function to speak the text
var count = 0;
function speakText(text) {
  // Check if the browser supports speech synthesis
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    // Set some properties if needed (e.g., language, pitch, rate)
    utterance.lang = "en-US";
    // language code is ​"de-DE" for language ​" Deutsch"
    // language code is ​"en-US" for language ​" US English"
    // language code is ​"en-GB" for language ​" UK English Female"​
    // language code is ​"en-GB" for language ​" UK English Male"​
    // language code is ​"es-ES" for language ​" español"
    // language code is ​"es-US" for language ​" español de Estados Unidos"
    // language code is ​"fr-FR" for language ​" français"​
    // language code is ​"hi-IN" for language ​" हिन्दी Hindi"
    // language code is ​"id-ID" for language ​" Bahasa Indonesia"
    // language code is ​"it-IT" for language ​" italiano"
    // language code is ​"ja-JP" for language ​" 日本語"
    // language code is ​"ko-KR" for language ​" 한국의"
    // language code is ​"nl-NL" for language ​" Nederlands"
    // language code is ​"pl-PL" for language ​" polski"
    // language code is ​"pt-BR" for language ​" português do Brasil"
    // language code is ​"ru-RU" for language ​" русский"
    // language code is ​"zh-CN" for language ​" ​普通话（中国大陆）"
    // language code is ​"zh-HK" for language ​" ​粤語（香港）"
    // language code is ​"zh-TW" for language ​" 國語（臺灣）
    utterance.pitch = 2;
    utterance.rate = 1.05;
    // Speak the text
    window.speechSynthesis.speak(utterance);
    count = 1;
    // speakBtn.style.display = "none";
    // stopvoiceBtn.style.display = "inline-block";
  } else {
    alert(
      "Speech synthesis is not supported by this browser. Please use Google Chrome."
    );
  }

  speakBtn.style.display = "none";
  stopvoiceBtn.style.display = "inline-block";
}

// Event listener for the speak button
speakBtn.addEventListener("click", () => {
  // speakBtn.style.display = "none";
  // stopvoiceBtn.style.display = "inline-block";
  const text1 = textToSpeak.textContent;
  if (text1.trim()) {
    speakText(text1);
  } else {
    alert("The text to speak is empty.");
  }
});
function stopspeak() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  } else {
    alert(
      "Speech synthesis is not supported by this browser. Please use Google Chrome."
    );
  }
}
stopvoiceBtn.addEventListener("click", () => {
  speakBtn.style.display = "inline-block";
  stopvoiceBtn.style.display = "none";
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  } else {
    alert(
      "Speech synthesis is not supported by this browser. Please use Google Chrome."
    );
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("textInput2");
  const textToCopy = document.getElementById("textToSpeak").textContent;

  copyBtn.addEventListener("click", function () {
    copyToClipboard(textToCopy);
    // alert("Copied to clipboard!");
  });

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
