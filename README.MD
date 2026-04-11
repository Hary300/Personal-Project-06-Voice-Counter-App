# 📢 Voice Counter App

A simple counter application with voice feedback using the Web Speech API (SpeechSynthesisUtterance). Every change in the counter will be spoken aloud.

---

## 🚀 Features

- ➕ Increment counter
- ➖ Decrement counter
- 🔊 Voice output using SpeechSynthesis
- 🌐 Language support
- ⚡ Real-time speech feedback

---

## 🛠️ Built With

- HTML
- CSS
- JavaScript
- Web Speech API (SpeechSynthesisUtterance)

---

## 🧠 How It Works

This app uses the browser's built-in speech synthesis API:

```js
const speech = new SpeechSynthesisUtterance();
speech.text = 'Counter is now 5';
speech.lang = 'en-US';
window.speechSynthesis.speak(speech);
```
