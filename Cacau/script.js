// Defina suas perguntas e respostas aqui
const questions = [
    {
        question: 'Quantos anos eu tenho?',
        options: ['18', '17', '16', '21'],
        correctAnswer: '18'
    },
    {
        question: 'Qual meu nome todo?',
        options: ['Carlos Augusto Horta Souza', 'Carlos Augusto H. B. C. Souza', 'Carlos Augusto H. B. C. de Moraes', 'Carlos Moraes'],
        correctAnswer: 'Carlos Augusto H. B. C. de Moraes'
    },
    {
        question: 'Qual foi o priemiro titulo do fluminense q eu vi no estadio?',
        options: ['Carioca 22', 'Quanabara 23', 'Carioca 23', 'Libertadores 23'],
        correctAnswer: 'Quanabara 23'
    },
    {
        question: 'Qual o nome do meu primeiro cachorro(a)?',
        options: ['Bolota', 'Xerequinha', 'Shirra', 'Balloteli'],
        correctAnswer: 'Balloteli'
    },
    {
        question: 'Quando é meu aniversario',
        options: ['29/07/05', '22/05/06', '30/06/05', '30/07/05'],
        correctAnswer: '30/06/05'
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
