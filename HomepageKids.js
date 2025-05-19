// script-HomepageKids.js
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
                title: "My name is",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/h6mmigw15dov/ZOO.png",
                content: "My name is<br>Selecciona la opción correcta",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/biac7eaf687k/My_name_is_kid.mp4",
                questions: [
                    {
                        options: [
                            { text: "Mi nombre es", correct: true },
                            { text: "Hola, ¿Como estas?", correct: false },
                            { text: "Mañana tengo clases", correct: false },
                            { text: "Los niños estan jugando", correct: false }
                        ]
                    }
                ]
            },
            {
                title: "Boy",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "1. Boy = Niño",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/rg8s05utx8w4/Boy.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/unmu2a1yemto/ni%C3%B1o_estilo_3d_rende_lego.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/nmshb0nb3t92/dinosaurio_3d_render_lego.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/m0aapscvk8er/zoologist_3d_renderi.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/twn2nd0cjffe/basketball_player_lego.jpg", correct: false }
                ]
            },
                        {
                title: "Girl",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
                content: "Girl = Niña",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/435dmmbgecnn/Girl.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bqjxu36pyfc2/WhatsApp_Image_2025-05-02_at_3.58.15_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/uezmvplosyxf/WhatsApp_Image_2025-05-02_at_4.02.12_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/moo7jchakbo2/WhatsApp_Image_2025-05-02_at_4.00.19_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/go15uz3a7grf/WhatsApp_Image_2025-05-02_at_3.58.15_PM_(1).jpeg", correct: true }
                ]
            }
        ]
    },
    2: {
        title: "Animals & Colors",
        pages: [
            {
                title: "Lion",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/t7izie3uzaxv/tiger_tutor.png",
                content: "Lion - León",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/p6mu8fpxf4rv/ttsmaker-file-2025-5-1-16-16-15.mp3",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3sot2ltxgx58/10.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ufw1fjbt60oi/12.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/8j3zg55kfk8s/13.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/s1f3ylya460f/11.jpg", correct: false }
                ]
            },
            {
                title: "Red",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/h6mmigw15dov/ZOO.png",
                content: "   Red = Rojo",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/jpa4sr1w0kwb/ttsmaker-file-2025-5-2-10-7-58.mp3",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/za9dsf7lwzpq/Blue.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/s2ycqcr0k3ex/Red.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/lbub8he2ny8p/Green.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/6pu8qt84yxaw/Yellow.jpeg", correct: false }
                ]
            },
            {
                title: "Green",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
                content: "1. Green = Verde",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5sk6y2o28wnd/ttsmaker-file-2025-5-2-10-9-36.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9vsefmviuutp/Purple_Forest.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/blux58y4y7lr/Red_Forest.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f84hauhxd6vo/Yeloow_Forest.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3o36h85rcq1h/Green_Forest.jpeg", correct: true }
                ]
            },
            {
                title: "Blue Spaceship",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
                content: "Blue - Azul<br>Spaceship - Nave Espacial",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5r81ivhp0tsw/ttsmaker-file-2025-5-2-10-58-28.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vj30w8bu5v87/Red_space.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/91s7ddlal32s/Yellow_space.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3ms14s3nsxyw/Blue_space.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/8cecgaklz73o/Green_space.jpeg", correct: false }
                ]
            },
         
            {
                title: "Zebra",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
                content: "1. Zebra = Cebra",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/xwjb67ur1vaa/ttsmaker-file-2025-5-2-10-18-1.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/2zm1w4myv17d/zebra_3d_renderizado.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kvk07l35o1uz/una_jirafa_3d_render.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ye7ku6pk4wuc/elefante_3d_renderiz.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/hfjvdrmti6eh/vaca_3d_renderizado_lego.jpg", correct: false }
                ]
            }
        ]
    },
    3: {
        title: "Verbs & Professions",
        pages: [
            {
                title: "Doctor",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/40jh923d4z56/Lyssa.png",
                content: "1. Doctor = Doctor",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/uthiufxv8oxx/Doctor.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wtkej312cftm/unicef_bicicleta.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/gxr8q5f0ekat/Doctor_in_a_wheel_chair.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/d1sj17luz81h/3D_Render_olympic.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ew5c3k7edu02/Lawyer_in_wheelchair.jpg", correct: false }
                ]
            },
            {
                title: "President",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/idv1g9eegley/Princess.png",
                content: "He is = El es<br>The President = Presidente",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iqq3wymewquw/ttsmaker-file-2025-5-5-20-19-54.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iwxz1t4p8ubn/Lego_Astronaut.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ybrilci8w2xo/Lego_President.jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ptx5hygwou9r/LEgo_miner.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/91qgfssqc7nv/Lego_Builder.jpeg", correct: false }
                ]
            },
            {
                title: "Steve is a basketball player",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9xpqp9k5of8g/Betty.png",
                content: "He is a = El es un<br>Basketball Player = Jugador de Baloncesto",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vn6vq2xqb4cb/Steve_is_a_basketball_player.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/twn2nd0cjffe/basketball_player_lego.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5pjojg50eess/Moto_GP.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/qac1m81steep/surf_lego.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/dfqnnqpl17fv/Singer.jpg", correct: false }
                ]
            },
              {
                title: "Grandfather",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/bvnwj7yfrq4u/Robert.png",
                content: "He is a = El es un<br>Basketball Player = Jugador de Baloncesto",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/tiya27d5h7lt/Grandfather.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/urjwbcnyqy9e/abuelo_lego.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/9jzickqvksrd/un_hombre_estilo_3d_.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/pmgpt1cbnqin/abuela_lego.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/htdgbirjevta/Family_.jpg", correct: false }
                ]
            },
                    {
                title: "My name is",
                image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wgyydcok012y/Group_67.png",
                content: "Entrepreneurship = Emprendedurismo<br>Basketball Event = Evento",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/biac7eaf687k/My_name_is_kid.mp4",
                questions: [
                    {
                        options: [
                            { text: "Mi nombre es", correct: true },
                            { text: "Hola, ¿Como estas?", correct: false },
                            { text: "Mañana tengo clases", correct: false },
                            { text: "Los niños estan jugando", correct: false }
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
                    Thank you for using Fun! Our Chat & VideoCall service with tutors will be available soon—stay tuned!.
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
