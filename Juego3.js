document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    const letterElement = document.getElementById('letter');
    const scoreElement = document.getElementById('score');
    const correctSound = document.getElementById('correctSound');
    const wrongSound = document.getElementById('wrongSound');

    let score = 0;

    const letters = [
        { letter: 'A', options: ['✈️', '🐻', '🍏'], correct: 0 }, // Avión
        { letter: 'B', options: ['🐻', '🍌', '🚗'], correct: 1 }, // Banana
        { letter: 'C', options: ['🚗', '🍪', '🌵'], correct: 0 }, // Carro
        { letter: 'D', options: ['🍩', '🦝', '🚪'], correct: 0 }, // Dona
        { letter: 'E', options: ['🥚', '🐘', '🚪'], correct: 1 }, // Elefante
        { letter: 'F', options: ['🍟', '🌸', '🐟'], correct: 1 }, // Papas fritas
        { letter: 'G', options: ['🐱', '🦒', '🍕'], correct: 0 }, // Gato
        { letter: 'H', options: ['🍯', '🏠', '🚁'], correct: 2 }, // Helicoptero
        { letter: 'I', options: ['🦎', '🍎', '🏉'], correct: 0 }, // Iguana
        { letter: 'J', options: ['🦒', '🍏', '🍇'], correct: 0 }, // Jirafa
        { letter: 'K', options: ['🔑', '🦘', '🐨'], correct: 2 }, // Koala
        { letter: 'L', options: ['🍋', '🦁', '🍓'], correct: 1 }, // León
        { letter: 'M', options: ['🐒', '🍉', '🦄'], correct: 0 }, // Mono
        { letter: 'N', options: ['☁️', '🌰', '🦘'], correct: 1 }, // Naranja
        { letter: 'O', options: ['🍊', '🐙', '🐻'], correct: 2 }, // Oso
        { letter: 'P', options: ['🍍', '🍕', '🐧'], correct: 2 }, // Pinguino
        { letter: 'Q', options: ['👑', '🦜', '🍑'], correct: 1 }, // quetzal (un tipo de Ave)
        { letter: 'R', options: ['🐭', '🚗', '🐍'], correct: 0 }, // Raton
        { letter: 'S', options: ['🍓', '🐍', '🦈'], correct: 1 }, // serpiente
        { letter: 'T', options: ['🍅', '🐝', '🌴'], correct: 0 }, // Tomate
        { letter: 'U', options: ['🍇', '🦄', '🍆'], correct: 0 }, // Uvas
        { letter: 'V', options: ['🍇', '🦄', '🐄'], correct: 2 }, // Vaca
        { letter: 'W', options: ['🍉', '🧇', '🍇'], correct: 1 }, // Waffle
        { letter: 'X', options: ['🦊', '🎄', '🎼'], correct: 2 }, // Xilófono
        { letter: 'Y', options: ['🍧', '🍋', '🌻'], correct: 0 }, // Yogur
        { letter: 'Z', options: ['🌺', '🍉', '🦊'], correct: 2 } // zorro
    ];
    

    let currentIndex = 0;

    function loadQuestion() {
        const currentData = letters[currentIndex];
        letterElement.textContent = currentData.letter;
        options.forEach((option, index) => {
            option.textContent = currentData.options[index];
            if (index === currentData.correct) {
                option.setAttribute('data-answer', 'correcto');
            } else {
                option.removeAttribute('data-answer');
            }
        });
    }

    function handleCorrectAnswer() {
        score++;
        scoreElement.textContent = score;
        feedback.textContent = `¡Correcto! ${letters[currentIndex].options[letters[currentIndex].correct]} empieza con ${letters[currentIndex].letter}.`;
        feedback.style.color = "green";
        correctSound.play(); // Reproduce el sonido de respuesta correcta

        currentIndex = (currentIndex + 1) % letters.length;
        setTimeout(() => {
            loadQuestion();
            feedback.textContent = '';
        }, 1500);
    }

    function handleWrongAnswer() {
        feedback.textContent = "Intenta de nuevo.";
        feedback.style.color = "red";
        wrongSound.play(); // Reproduce el sonido de respuesta incorrecta
    }

    options.forEach(option => {
        option.addEventListener('click', () => {
            const isCorrect = option.getAttribute('data-answer') === 'correcto';
            option.classList.add(isCorrect ? 'correct' : 'wrong');
            setTimeout(() => option.classList.remove(isCorrect ? 'correct' : 'wrong'), 500);

            if (isCorrect) {
                handleCorrectAnswer();
            } else {
                handleWrongAnswer();
            }
        });
    });

    loadQuestion();
});


