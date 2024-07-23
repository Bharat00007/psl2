document.getElementById('emojiButton').addEventListener('click', function() {
    const emojis = ['🍾','🎉', '🎈', '🎁', '🎊', '🥂', '🎄', '🎆', '🎇','🎂' ];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('emojiDisplay').textContent = randomEmoji;
});

document.getElementById('englishButton').addEventListener('click', function() {
    document.getElementById('welcome').textContent = 'HAPPY BIRTHDAY 🎂';
    document.getElementById('instruction').textContent = 'Click the button to see a surprise! 🎉';
    document.getElementById('emojiButton').textContent = 'Click for surprise! 💖';
    document.getElementById('welcome').setAttribute('lang', 'en');
    document.getElementById('instruction').setAttribute('lang', 'en');
    document.getElementById('emojiButton').setAttribute('lang', 'en');
});

document.getElementById('spanishButton').addEventListener('click', function() {
    document.getElementById('welcome').textContent = '¡FELIZ CUMPLEAÑOS 🎂!';
    document.getElementById('instruction').textContent = '¡Haz clic en el botón para ver una sorpresa! 🎉';
    document.getElementById('emojiButton').textContent = '¡Haz clic para sorpresa! 💖';
    document.getElementById('welcome').setAttribute('lang', 'es');
    document.getElementById('instruction').setAttribute('lang', 'es');
    document.getElementById('emojiButton').setAttribute('lang', 'es');
});
