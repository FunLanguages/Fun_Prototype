// HomePageTourism.js
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
        title: "Basic Actions",
        pages: [
            {
                title: "He is in space",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bvnwj7yfrq4u/Robert.png",
                content: "1. He is = El Esta<br>2. In space = en el espacio",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/gsyjyg2uvh84/He_is_in_space.mp3",
                images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kp2bygcarpjc/Beach.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kgiij3gz6ocv/Diving.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ziq623fj7eg1/Space.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bhu3vb8en0d8/Egypt.jpeg", correct: false }
                ]
            },
            {
                title: "He is sleeping in the couch",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. He is sleeping = El esta durmiendo<br>2. In the couch = en el sofa",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/1opnszega0b4/He_is_sleeping_in_the_couch.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/1cmqbrbf1hgu/She_is_teaching_class.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/s0lnstbpji02/Sleeping.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/e7ft0uia7rvn/Readinabook.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vekxsxbkvm8t/He_is_playing_with_the_kids.jpeg", correct: false }
                ]
            },
            {
                title: "He is in Egypt",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. He is = El esta<br>2. in Egypt = en Egipto",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/hh7hyx1bqcmr/He_is_in_egypt.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/u9qvimk8l3jy/F1_Pilot.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bhu3vb8en0d8/Egypt.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kgiij3gz6ocv/Diving.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kp2bygcarpjc/Beach.jpeg", correct: false }
                ]
            }
        ]
    },
    2: {
        title: "Nouns & Colors",
        pages: [
            {
                title: "The bus is Blue",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "Bus - Autobus<br>Blue - Azul",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iirdyidw1x31/The_bus_is_blue.wav",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/l0aefhn1f9ce/Yellow_bus.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/fzlw6tc3pmay/Blue_bus.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/l5fbpd9d529x/Red_bus.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/n5r03saaskbr/Green_bus.jpeg", correct: false }
                ]
            },
            {
                title: "The fire is red",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "1. Fire = Fuego<br>2. Red = Rojo",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3ojdxmfk0304/The_fire_is_red.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/7x5kd7wsiaff/Red_fire.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/rxolpo1o6i8g/Green_fire.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/b29mlukklu4z/Blue_fire.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/lrtqei2jjry2/White_fire.jpeg", correct: false }
                ]
            },
            {
                title: "The forest is green",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. Forest = Bosque<br>2. Green = Verde",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/tx854frldvbm/The_forest_is_green.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9vsefmviuutp/Purple_Forest.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/blux58y4y7lr/Red_Forest.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f84hauhxd6vo/Yeloow_Forest.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3o36h85rcq1h/Green_Forest.jpeg", correct: true }
                ]
            },
            {
                title: "Select the correct spaceship",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "Bus - Autobus<br>Blue - Azul",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ye5e3bnfjgiz/Spaceship.mp3",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vj30w8bu5v87/Red_space.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/91s7ddlal32s/Yellow_space.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3ms14s3nsxyw/Blue_space.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/8cecgaklz73o/Green_space.jpeg", correct: false }
                ]
            }
        ]
    },
    3: {
        title: "Places & Tourism",
        pages: [
            {
                title: "Aquarium",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "1. Aquarium = Acuario",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/0orgmhf0d1d8/Aquarium.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/l5feun9qpi2d/Train_Station.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bsr9obkdh2kk/Aquarium.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/s1rnonj2eon5/Restaurant.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ua6yok6xrfqf/Museum_(2).jpeg", correct: false }
                ]
            },
            {
                title: "Gas Station",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "1. Gas Station = Estación de gas",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ocecnhj71j7e/Gas_Station.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/6zv5vxuo84s7/Shack.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/1dt5vubgzdvp/Godzilla.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/dmjkrdiumz34/Gas_Station.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/z4phq1ik0k7c/Paris_ovni.jpeg", correct: false }
                ]
            },
            {
                title: "Where is the Colosseum?",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "1. Where is = A dónde esta<br>2. the Colosseum? = el Coliseo",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5a6j2df0fnf8/Where_is_the_Colosseum.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vmpn0qp5ah5h/shanghai.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kjs64volgp3c/coliseo_romano.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/b9dgbrutlc54/krakem.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/p3srbz95vlba/Lost_civilization.jpeg", correct: false }
                ]
            },
            {
                title: "Where is the Gas Station?",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "Entrepreneurship = Emprendedurismo<br>Basketball Event = Evento",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/885e93v0hhhx/Where_is_the_gas_station.mp4",
                questions: [
                    {
                        options: [
                            { text: "Paris es un hermoso lugar", correct: false },
                            { text: "El Museo esta por allá", correct: false },
                            { text: "¿A dónde esta la gasolinera?", correct: true },
                            { text: "Mañana iremos al restaurante", correct: false }
                        ]
                    }
                ]
            }
        ]
    }
};

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
