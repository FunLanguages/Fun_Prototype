// script-homepage1.js
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
                title: "He is playing  soccer",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. Playing = Jugando<br>2. Soccer = Futbol",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ck7j67sei9pa/He_is_playing_soccer.wav",
                images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/66eumbh44uf2/openart-image_M9WO_usV_1739569889727_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f9gx9p8cvde3/openart-image_DGa3aqFx_1739569862859_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kqngdgmt90jr/openart-image_MaHz1kKl_1739570017473_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ykg2ve3pt9ai/openart-image_y8FRTqKv_1739569946192_raw.jpg", correct: false }
                ]
            },
            {
                title: "She is walking in the park",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. Walking = Caminando<br>2. Park = Parque",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/chsf4ngyem8e/She_is_walking_in_the_park.wav",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9loj2647i6xe/She_is_in_a_bike.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/4jcd4psffqtm/She_is_drinking_water.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/d4b8xdmt1ztx/She_is_walking_in_the_park.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/exzkk3zxqype/She_is_talking_with_her_friend.jpeg", correct: false }
                ]
            },
            {
                title: "Morgan is cooking dinner",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. Cooking = Cocinando<br>2. Dinner = Cena",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/lgp1sowd8305/Morgan_is_cooking_dinnner.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/69e4212trnf1/WhatsApp_Image_2025-02-24_at_6.54.27_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3gzer5t9b5om/WhatsApp_Image_2025-02-24_at_7.02.04_PM_(2).jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/y41cwv8mfcx7/WhatsApp_Image_2025-02-24_at_7.12.27_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bqgbeha9lrjw/WhatsApp_Image_2025-02-26_at_3.26.38_PM.jpeg", correct: false }
                ]
            }
        ]
    },
    2: {
        title: "Nouns & Colors",
        pages: [
            {
                title: "The bus is Blue",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
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
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/91s7ddlal32s/Yellow_space.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3ms14s3nsxyw/Blue_space.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/8cecgaklz73o/Green_space.jpeg", correct: false }
                ]
            }
        ]
    },
    3: {
        title: "Verbs & Professions",
        pages: [
            {
                title: "Janice is learning Karate",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/40jh923d4z56/Lyssa.png",
                content: "1. Janice is learning = Janice esta aprendiendo<br>2. The Karate = Karate",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/qx78yjmmk7tz/Janice_is_learning_karate.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/nhijbo5rg33f/WhatsApp_Image_2025-02-24_at_6.41.40_PM_(1).jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/7htjasxjxuhb/WhatsApp_Image_2025-02-24_at_6.41.40_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/t9hjc5stdf65/WhatsApp_Image_2025-02-24_at_6.41.41_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/1utxnrputixs/WhatsApp_Image_2025-02-24_at_6.41.40_PM_(2).jpeg", correct: false }
                ]
            },
            {
                title: "He is the President",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "He is = El es<br>The President = Presidente",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/e2cm6fej48k6/He_is_the_president.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/xz6ysox2nbbj/openart-image_vPWCm0Dz_1740155118260_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/dplaeyeewj40/openart-image_8uMo2KhM_1740155036208_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5982xkkkxo41/openart-image_BCxMiKPz_1740154455079_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iuxabv5r3r7x/openart-image_pF-BbuI0_1740154487520_raw.jpg", correct: false }
                ]
            },
            {
                title: "He is a basketball player",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "He is a = El es un<br>Basketball Player = Jugador de Baloncesto",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vn6vq2xqb4cb/Steve_is_a_basketball_player.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5982xkkkxo41/openart-image_BCxMiKPz_1740154455079_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wps65jema05n/openart-image_IPlyrEcH_1740154435349_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/29o1v42swazo/openart-image_uevfVXEq_1740154332684_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iuxabv5r3r7x/openart-image_pF-BbuI0_1740154487520_raw.jpg", correct: false }
                ]
            },
            {
                title: "Janice Story",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "Entrepreneurship = Emprendedurismo<br>Basketball Event = Evento",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kqnc1c1fllqu/JaniceStory.mp4",
                questions: [
                    {
                        options: [
                            { text: "Janice is worried about going to eat", correct: false },
                            { text: "Janice would evaluate startups from Sillicon Valley", correct: true },
                            { text: "Janice wants to go shopping this weekend", correct: false },
                            { text: "Janice wants to sleep more this weekend", correct: false }
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