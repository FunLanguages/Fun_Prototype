// homepage2.js
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar nombre del usuario
    const userData = JSON.parse(localStorage.getItem('userData'));
    const welcomeHeader = document.getElementById('welcome-header');
    if(userData) {
        welcomeHeader.innerHTML = `Welcome ${userData.name}!<br><span class="highlight">Your Lessons</span>`;
    }

    // Configurar botón de reset
    document.getElementById('reset-prototype').addEventListener('click', () => {
        localStorage.removeItem('userData');
        window.location.href = 'index.html'; // Redireccionar al formulario inicial
    });
});
const lessons = {
    1: {
        title: "Auditory Verbs",
        pages: [
            {
                title: "Select the right answer",
                content: "He is playing soccer",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ck7j67sei9pa/He_is_playing_soccer.wav",
                questions: [
                    {
                        options: [
                            { text: "She is reading a book", correct: false },
                            { text: "He is playing soccer", correct: true },
                            { text: "He is running in the park", correct: false },
                            { text: "She is playing basketball", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "Select the right answer",
                content: "1. Walking = Caminando<br>2. Park = Parque",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/m200padvvwj8/Luchador.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/chsf4ngyem8e/She_is_walking_in_the_park.wav",
                questions: [
                    {
                        options: [
                            { text: "She is sleeping", correct: false },
                            { text: "He is playing soccer", correct: false },
                            { text: "She is walking in the park", correct: true },
                            { text: "She is reading the news paper", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "Select the right answer",
                content: "1. Cooking = Cocinando<br>2. Dinner = Cena",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bvnwj7yfrq4u/Robert.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/lgp1sowd8305/Morgan_is_cooking_dinnner.mp4",
                questions: [
                    {
                        options: [
                            { text: "Morgan is cooking dinner", correct: true },
                            { text: "He learning karate", correct: false },
                            { text: "Morgan is sleeping", correct: false },
                            { text: "She is playing tennis", correct: false }
                        ]
                    }
                ]
            },
            {// <-- New Added page
                title: "Select the right answer",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/xgq137vq4wj3/Albert_Einstein.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3epob0ej9g9g/ttsmaker-file-2025-2-28-16-8-43.mp4",
                questions: [
                    {
                        options: [
                            { text: "Albert went to buy water", correct: false },
                            { text: "Albert went to buy bread", correct: true },
                            { text: "Albert went to buy a bicycle", correct: false },
                            { text: "Albert went to buy a village", correct: false }
                        ]
                    }
                ]
            }
        ]
    },
    2: {
        title: "Nouns & Colors",
        pages: [
            {
                title: "The bus is Blue",
                content: "Bus - Autobus<br>Blue - Azul",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iirdyidw1x31/The_bus_is_blue.wav",
                questions: [
                    {
                        options: [
                            { text: "The bus is rude", correct: false },
                            { text: "The bus is blue", correct: true },
                            { text: "Ross is glued", correct: false },
                            { text: "The mouse is white", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "The fire is red",
                content: "1. Fire = Fuego<br>2. Red = Rojo",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3ojdxmfk0304/The_fire_is_red.mp4",
                questions: [
                    {
                        options: [
                            { text: "She is learning languages", correct: false },
                            { text: "The fighter is red", correct: false },
                            { text: "The fire is red", correct: true },
                            { text: "She is playing soccer", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "The forest is green",
                content: "1. Forest = Bosque<br>2. Green = Verde",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/k36u767fhl5o/Ranger.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/tx854frldvbm/The_forest_is_green.mp4",
                questions: [
                    {
                        options: [
                            { text: "The forest is green", correct: true },
                            { text: "The dog is blue", correct: false },
                            { text: "The forest is blue", correct: false },
                            { text: "The robot is green", correct: false }
                        ]
                    }
                ]
            }
        ]
    },
    3: {
        title: "Verbs & Professions",
        pages: [
            {
                title: "Janice is learning Karate",
                content: "1. Janice is learning = Janice esta aprendiendo<br>2. The Karate = Karate",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/40jh923d4z56/Lyssa.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/qx78yjmmk7tz/Janice_is_learning_karate.mp4",
                questions: [
                    {
                        options: [
                            { text: "Janice is learning karate", correct: true },
                            { text: "Matt is playing videogames", correct: false },
                            { text: "Janice is reading a book", correct: false },
                            { text: "She is playing basketball", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "He is the President",
                content: "He is = El es<br>The President = Presidente",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/40jh923d4z56/Lyssa.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/e2cm6fej48k6/He_is_the_president.mp4",
                questions: [
                    {
                        options: [
                            { text: "He is running as a president", correct: false },
                            { text: "He is the president", correct: true },
                            { text: "He is walking in the park", correct: false },
                            { text: "He is playing Volleyball", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "Steve is a basketball player",
                content: "He is a = El es un<br>Basketball Player = Jugador de Baloncesto",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vn6vq2xqb4cb/Steve_is_a_basketball_player.mp4",
                questions: [
                    {
                        options: [
                            { text: "He is playing soccer", correct: false },
                            { text: "He is playing poker", correct: false },
                            { text: "He is running in the park", correct: false },
                            { text: "Steve is a basketball player", correct: true }
                        ]
                    }
                ]
            },
            {// <-- New Added page
                title: "Select the right answer",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/y56i4w24msjr/ttsmaker-file-2025-2-28-17-3-2.mp4",
                questions: [
                    {
                        options: [
                            { text: "Morgan is worried about going to eat", correct: false },
                            { text: "Morgan is worried about meeting the 3-minute rule", correct: true },
                            { text: "Morgan wants to go shopping", correct: false },
                            { text: "Morgan wants to sleep more this weekend", correct: false }
                        ]
                    }
                ]
            }
        ]
    }
};

// ... (funciones del codigo)

let currentLesson = null;
let currentPage = 0;
let currentAudio = null;
let errorCount = 0; // Variable añadida para contar errores

function showLesson(lessonId) {
    currentLesson = lessonId;
    currentPage = 0;
    errorCount = 0;
    displayPage();
    
    // Ocultar solo la homepage
    document.querySelector('.homepage').style.display = 'none';
    // Mostrar contenido de lección
    document.getElementById('lesson-content').style.display = 'block';
    // Ocultar otras pantallas
    document.getElementById('word-cards-screen').style.display = 'none';
    document.getElementById('congrats-screen').style.display = 'none';
}

function displayPage() {
    const lesson = lessons[currentLesson];
    const page = lesson.pages[currentPage];
    
    if (currentAudio) currentAudio.pause();

    // Determinar tipo de contenido
    const hasImages = page.images && page.images.length > 0;
    const hasQuestions = page.questions && page.questions.length > 0;

    // Construir contenido dinámico
    const imageContent = hasImages ? `
        <div class="image-grid">
            ${page.images.map(image => `
                <img src="${image.src}" 
                     class="image-option" 
                     data-correct="${image.correct}"
                     onclick="handleImageClick(this)">
            `).join('')}
        </div>` : '';

    const textContent = hasQuestions ? `
        <div class="text-options">
            ${page.questions[0].options.map((option, index) => `
                <div class="text-option" 
                     onclick="handleTextClick(this)" 
                     data-correct="${option.correct}">
                    ${String.fromCharCode(65 + index)}. ${option.text}
                </div>
            `).join('')}
        </div>` : '';

    const content = `
    <div class="page">
        <h2>${lesson.title}</h2>
        <div class="lesson-header">
            ${page.image ? `<img src="${page.image}" class="lesson-image" alt="Lesson illustration">` : ''}
            <div class="audio-section">
                <h3>${page.title}</h3>
                <div class="audio-player">
                    <audio controls id="lesson-audio">
                        <source src="${page.audio}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>
        <p>${page.content}</p>
        ${imageContent}
        ${textContent}
        <div class="nav-buttons">
            ${currentPage > 0 ? '<button onclick="prevPage()">Previous</button>' : '<div></div>'}
            ${currentPage < lesson.pages.length - 1 ? '<button onclick="nextPage()">Next</button>' : '<button onclick="finishLesson()">Finish</button>'}
        </div>
    </div>`;
    
    document.getElementById('lesson-content').innerHTML = content;
    
    currentAudio = document.getElementById('lesson-audio');
    currentAudio.play().catch(console.error);
}

function handleImageClick(imgElement) {
    document.querySelectorAll('.image-option').forEach(img => {
        img.classList.remove('correct', 'incorrect');
    });
    
    if (imgElement.dataset.correct === 'true') {
        imgElement.classList.add('correct');
    } else {
        imgElement.classList.add('incorrect');
        errorCount++;
    }
}

function nextPage() {
    if (currentPage < lessons[currentLesson].pages.length - 1) {
        currentPage++;
        displayPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayPage();
    }
}

function finishLesson() {
    // Ocultar todos los contenedores
    document.querySelector('.homepage').style.display = 'none';
    document.getElementById('lesson-content').style.display = 'none';
    document.getElementById('word-cards-screen').style.display = 'none';
    
    // Mostrar pantalla de felicitaciones
    const congratsScreen = document.getElementById('congrats-screen');
    congratsScreen.style.display = 'flex';
    
    // Actualizar mensaje de errores
    const userData = JSON.parse(localStorage.getItem('userData'));
    const errorMessage = userData ? 
        `${userData.name}, you have ${errorCount} errors!` :
        `You have ${errorCount} errors!`;
    
    document.getElementById('error-count').textContent = errorMessage;
}
function backToLessons() {
    if (currentAudio) {
        currentAudio.pause();
    }
    // Mostrar solo la homepage
    document.querySelector('.homepage').style.display = 'block';
    // Ocultar otras pantallas
    document.getElementById('lesson-content').style.display = 'none';
    document.getElementById('congrats-screen').style.display = 'none';
    document.getElementById('word-cards-screen').style.display = 'none';
    
    // Restablecer variables
    currentLesson = null;
    currentPage = 0;
    currentAudio = null;
    errorCount = 0;
}


// Daily Words Functions
let currentAudioElement = null;

function showWordCards() {
    // Ocultar homepage
    document.querySelector('.homepage').style.display = 'none';
    // Mostrar pantalla de palabras
    document.getElementById('word-cards-screen').style.display = 'block';
    // Ocultar otras pantallas
    document.getElementById('lesson-content').style.display = 'none';
    document.getElementById('congrats-screen').style.display = 'none';
}

function backToHomepage() {
    // Mostrar homepage
    document.querySelector('.homepage').style.display = 'block';
    // Ocultar todas las demás pantallas
    document.getElementById('word-cards-screen').style.display = 'none';
    document.getElementById('ai-chat-screen').style.display = 'none';
    
    if(currentAudioElement) {
        currentAudioElement.pause();
    }
}

// Función añadida
function handleTextClick(optionElement) {
    document.querySelectorAll('.text-option').forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
    });

    const isCorrect = optionElement.dataset.correct === 'true';
    optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    if (!isCorrect) errorCount++;
}

function playAudio(url) {
    if(currentAudioElement) {
        currentAudioElement.pause();
    }
    currentAudioElement = new Audio(url);
    currentAudioElement.play();
}
// En la función showNewFeature
function showNewFeature() {
    document.querySelector('.homepage').style.display = 'none';
    document.getElementById('ai-chat-screen').style.display = 'block';
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}

// Función para enviar mensajes
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if(message) {
        // Agregar mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `
            <div class="message-content">
                ${message}
            </div>
        `;
        document.getElementById('chat-messages').appendChild(userMessage);
        
        // Simular respuesta de IA (aquí debes conectar tu API)
        setTimeout(() => {
            const aiMessage = document.createElement('div');
            aiMessage.className = 'message ai-message';
            aiMessage.innerHTML = `
                <div class="message-content">
                    This is a simulated AI response. In a real implementation, you would connect to your AI API here.
                </div>
            `;
            document.getElementById('chat-messages').appendChild(aiMessage);
            
            // Auto-scroll al final
            document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
        }, 1000);

        // Limpiar input
        userInput.value = '';
    }
}

// Manejar la tecla Enter
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        sendMessage();
    }
});
// carousel
let currentCardIndex = 0;
const cards = document.querySelectorAll('.word-card');
const totalCards = cards.length;
const container = document.querySelector('.cards-container');

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 40; // Incluir márgenes
    container.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
    
    // Actualizar clases activas
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentCardIndex);
    });
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    updateCarousel();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    updateCarousel();
});

// Inicialización
updateCarousel();
