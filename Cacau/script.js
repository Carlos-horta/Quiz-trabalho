// Defina suas perguntas e respostas aqui
const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
        correctAnswer: 'Brasília'
    },
    {
        question: 'Quantos planetas existem em nosso sistema solar?',
        options: ['7', '8', '9', '10'],
        correctAnswer: '8'
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        options: ['William Shakespeare', 'Miguel de Cervantes', 'Jane Austen', 'Charles Dickens'],
        correctAnswer: 'Miguel de Cervantes'
    }
    // Adicione mais perguntas conforme necessário
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit-btn');

// Função para carregar as perguntas e opções dinamicamente
function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, i) => `
                <input type="radio" name="question${index}" value="${option}" id="q${index}o${i}">
                <label for="q${index}o${i}">${option}</label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

// Função para mostrar os resultados
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('input:checked');
    let score = 0;

    answerContainers.forEach((answerContainer, index) => {
        const selectedOption = answerContainer.value;
        if (selectedOption === questions[index].correctAnswer) {
            score++;
        }
    });

    resultsContainer.innerHTML = `Pontuação: ${score} de ${questions.length}`;
}

// Event listener para o botão de envio
submitButton.addEventListener('click', showResults);

// Inicializa o quiz
buildQuiz();
