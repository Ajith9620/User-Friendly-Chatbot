document.getElementById("history").style.display = "none";
document.getElementById("clearBtn").style.display = "none";
let responses = {};

// Fetch the questions and answers from the JSON file
fetch("questions.json")
  .then((textToSpeak) => textToSpeak.json())
  .then((data) => {
    responses = data;
  })
  .catch((error) => console.error("Error fetching the questions:", error));

const sendBtn = document.getElementById("input_icon");
const input = document.getElementById("input");
const responseDiv = document.getElementById("textToSpeak");
const userQuery = document.getElementById("userQuery");

function searchofinput() {
  {
    document.getElementById("history").style.display = "inline-block";
    document.getElementById("clearBtn").style.display = "inline-block";
    const userQuestion = input.value.toLowerCase();
    let textToSpeak = "I'm sorry, I don't understand your question.";
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
}
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchofinput();
  }
});
