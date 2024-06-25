# User Friendly Chatbot

## Overview

**User Friendly Chatbot** is an adaptable and interactive chatbot that accepts both text and voice inputs from users, providing responses in either format. Designed to function similarly to virtual assistants like Alexa and Siri, it is customizable for various organizations, allowing them to add their own questions and answers based on specific keywords. Additionally, it supports integration with OpenAI's ChatGPT for advanced AI responses.

![Chatbot Screenshot](SAMPLE%20IMAGES/04.png)

## Features

- **Text Input**: Users can type their questions, and the chatbot will respond with relevant answers.
- **Voice Input**: Users can speak their questions, and the chatbot will convert speech to text, process the query, and respond with text-to-speech.
- **Customizable Q&A**: Organizations can add or modify questions and answers through a JSON file, making the chatbot adaptable to different use cases.
- **Voice Commands**: The chatbot can start listening for voice input when it hears trigger phrases like "Hey chatbot", "Hello chatbot", or "Hi chatbot".
- **ChatGPT Integration**: Support for integration with OpenAI's ChatGPT to enhance the chatbot's capabilities with AI-driven responses.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ajith9620/User-Friendly-Chatbot.git
   cd user-friendly-chatbot
   ```

2. Open `index.html` in your preferred web browser to launch the chatbot.

## Usage

1. **Text Input**: Type your question in the input box and press enter or click the send icon. The chatbot will display and speak the answer.
2. **Voice Input**: Click the microphone icon to start voice input. Speak your question and the chatbot will convert it to text, process the query, and provide an audible response.
3. **Stop Voice Input**: Click the stop icon to stop listening.
4. **Trigger Phrases**: Say "Hey chatbot", "Hello chatbot", or "Hi chatbot" to activate voice input without clicking the microphone icon.



## Customization

You can customize the chatbot's responses by editing the `questions.json` file. Each entry should have a `question in form of keyword`, `answer`, and `keyword` to identify the relevant queries.

Example `questions.json` format:

```json
[
  {
    "hi": "Hi there! How can I help you today.",
    "who are you": "I am chatbot.",
    "how are you": "I am fine.",
    "name": "My name is chatbot.",
    "hello": "Hi there! How can I help you today.",
    "good morning": "Good morning! How can I assist you today?",
    "good afternoon": "Good afternoon! How can I help you?",
    "good evening": "Good evening! What can I do for you?",
    "company name": "Our company is XYZ Corp.",
    "keyword": "application deadline"
  }
]
```

## ChatGPT Integration
To integrate OpenAI's ChatGPT, follow these steps:
1. **Obtain an API Key**: Sign up on the OpenAI platform and get your API key.
2. **Update chatgptintegration.js**: Add your API key and any other necessary configuration to the chatgptintegration.js file.
3. **Include the File**: Ensure that the chatgptintegration.js file is included in your HTML file.

Example `chatgptintegration.js`:

```javascript
// chatgptintegration.js

const apiKey = 'YOUR_OPENAI_API_KEY';
const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function fetchChatGPTResponse(prompt) {
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 150
    })
  });

  const data = await response.json();
  return data.choices[0].text;
}

// Example usage
fetchChatGPTResponse('Hello, how can I help you?').then(response => {
  console.log(response);
});
```

## Contributing

We welcome contributions to enhance the functionality and usability of the chatbot. Please fork the repository, make your changes, and submit a pull request.

## Contact

For any questions or suggestions, please contact 962014ajith@gmail.com.

## Screenshots 

![Chatbot Screenshot](SAMPLE%20IMAGES/01.png)

![Chatbot Screenshot](SAMPLE%20IMAGES/02.png)

![Chatbot Screenshot](SAMPLE%20IMAGES/03.png)
