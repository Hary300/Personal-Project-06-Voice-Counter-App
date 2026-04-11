let count = 0;
const number = document.querySelector('.count');
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');

decreaseBtn.addEventListener('click', () => {
  count--;
  speakNumber(count);
  number.innerText = count;
});

increaseBtn.addEventListener('click', () => {
  count++;
  speakNumber(count);
  number.innerText = count;
});
resetBtn.addEventListener('click', () => {
  count = 0;
  speakNumber(count);
  number.innerText = count;
});

const select = document.querySelector('select');

const languages = {
  US: 'en-US',
  UK: 'en-GB',
  español: 'es-ES',
  deutsch: 'de-DE',
  français: 'fr-FR',
  हिन्दी: 'hi-IN',
  bahasa: 'id-ID',
  italiano: 'it-IT',
  日本語: 'ja-JP',
  한국의: 'ko-KR',
  nederlands: 'nl-NL',
  русский: 'ru-RU',
  普通话: 'zh-CN',
};

let languageInput = languages.US;
select.addEventListener('change', function () {
  languageInput = languages[select.value];
});

function speakNumber(number) {
  const utterance = new SpeechSynthesisUtterance(number);

  utterance.lang = languageInput;
  speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
