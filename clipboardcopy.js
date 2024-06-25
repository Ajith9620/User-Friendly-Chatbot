document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copyBtn");
  const textToCopy = document.getElementById("textToSpeak").textContent;

  copyBtn.addEventListener("click", function () {
    copyToClipboard(textToCopy);
    alert("Copied to clipboard!");
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