# User Friendly Chatbot

## Overview

**User Friendly Chatbot** is an adaptable and interactive chatbot that accepts both text and voice inputs from users, providing responses in either format. Designed to function similarly to virtual assistants like Alexa and Siri, it is customizable for various organizations, allowing them to add their own questions and answers based on specific keywords.

![Chatbot Screenshot](SAMPLE%20IMAGES/04.png)

## Features

- **Text Input**: Users can type their questions, and the chatbot will respond with relevant answers.
- **Voice Input**: Users can speak their questions, and the chatbot will convert speech to text, process the query, and respond with text-to-speech.
- **Customizable Q&A**: Organizations can add or modify questions and answers through a JSON file, making the chatbot adaptable to different use cases.
- **Voice Commands**: The chatbot can start listening for voice input when it hears trigger phrases like "Hey chatbot", "Hello chatbot", or "Hi chatbot".

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ajith9620/User-Friendly-Chatbot.git
   cd user-friendly-chatbot
   ```

2. Open `index.html` in your preferred web browser to launch the chatbot.

## Usage

1. **Text Input**: Type your question in the input box and press enter or click the search icon. The chatbot will display and speak the answer.
2. **Voice Input**: Click the microphone icon to start voice input. Speak your question and the chatbot will convert it to text, process the query, and provide an audible response.
3. **Stop Voice Input**: Click the stop icon to stop listening.
4. **Trigger Phrases**: Say "Hey chatbot", "Hello chatbot", or "Hi chatbot" to activate voice input without clicking the microphone icon.

## Customization

You can customize the chatbot's responses by editing the `qa.json` file. Each entry should have a `question`, `answer`, and `keyword` to identify the relevant queries.

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
