// script.js
const lessons = {
    1: {
        title: "Basic Actions",
        pages: [
            {
                title: "He is playing  soccer",
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
                content: "1. Walking = Caminando<br>2. Park = Parque",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/chsf4ngyem8e/She_is_walking_in_the_park.wav",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/66eumbh44uf2/openart-image_M9WO_usV_1739569889727_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f9gx9p8cvde3/openart-image_DGa3aqFx_1739569862859_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kqngdgmt90jr/openart-image_MaHz1kKl_1739570017473_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ykg2ve3pt9ai/openart-image_y8FRTqKv_1739569946192_raw.jpg", correct: false }
                ]
            },
            {
                title: "Morgan is cooking dinner",
                content: "1. Cooking = Cocinando<br>2. Dinner = Cena",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/lgp1sowd8305/Morgan_is_cooking_dinnner.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/69e4212trnf1/WhatsApp_Image_2025-02-24_at_6.54.27_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3gzer5t9b5om/WhatsApp_Image_2025-02-24_at_7.02.04_PM_(2).jpeg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/y41cwv8mfcx7/WhatsApp_Image_2025-02-24_at_7.12.27_PM.jpeg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/cn8z35fe70s3/WhatsApp_Image_2025-02-24_at_7.02.04_PM.jpeg", correct: false }
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
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iirdyidw1x31/The_bus_is_blue.wav",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/66eumbh44uf2/openart-image_M9WO_usV_1739569889727_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f9gx9p8cvde3/openart-image_DGa3aqFx_1739569862859_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kqngdgmt90jr/openart-image_MaHz1kKl_1739570017473_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ykg2ve3pt9ai/openart-image_y8FRTqKv_1739569946192_raw.jpg", correct: true }
                ]
            },
            {
                title: "The fire is red",
                content: "1. Fire = Fuego<br>2. Red = Rojo",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/3ojdxmfk0304/The_fire_is_red.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/66eumbh44uf2/openart-image_M9WO_usV_1739569889727_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f9gx9p8cvde3/openart-image_DGa3aqFx_1739569862859_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kqngdgmt90jr/openart-image_MaHz1kKl_1739570017473_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ykg2ve3pt9ai/openart-image_y8FRTqKv_1739569946192_raw.jpg", correct: false }
                ]
            },
            {
                title: "The forest is green",
                content: "1. Forest = Bosque<br>2. Green = Verde",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/tx854frldvbm/The_forest_is_green.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/66eumbh44uf2/openart-image_M9WO_usV_1739569889727_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/f9gx9p8cvde3/openart-image_DGa3aqFx_1739569862859_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/kqngdgmt90jr/openart-image_MaHz1kKl_1739570017473_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/ykg2ve3pt9ai/openart-image_y8FRTqKv_1739569946192_raw.jpg", correct: false }
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
                content: "He is a = El es un<br>Basketball Player = Jugador de Baloncesto",
                audio: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/vn6vq2xqb4cb/Steve_is_a_basketball_player.mp4",
              images: [ 
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/5982xkkkxo41/openart-image_BCxMiKPz_1740154455079_raw.jpg", correct: true },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/wps65jema05n/openart-image_IPlyrEcH_1740154435349_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/29o1v42swazo/openart-image_uevfVXEq_1740154332684_raw.jpg", correct: false },
                    { src: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/sam-lingua-w7ub89/assets/iuxabv5r3r7x/openart-image_pF-BbuI0_1740154487520_raw.jpg", correct: false }
                ]
            }
        ]
    }
};

let currentLesson = null;
let currentPage = 0;
let currentAudio = null;

function showLesson(lessonId) {
    currentLesson = lessonId;
    currentPage = 0;
    displayPage();
    
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.style.display = 'block';
    document.querySelector('.lessons').style.display = 'none';
}

function displayPage() {
    const lesson = lessons[currentLesson];
    const page = lesson.pages[currentPage];
    
    // Stop any playing audio
    if (currentAudio) {
        currentAudio.pause();
    }

    const content = `
        <div class="page">
            <h2>${lesson.title}</h2>
            <h3>${page.title}</h3>
            <div class="audio-player">
                <audio controls id="lesson-audio">
                    <source src="${page.audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <p>${page.content}</p>
            ${page.images ? `
            <div class="image-grid">
                ${page.images.map(image => `
                    <img src="${image.src}" 
                         class="image-option" 
                         data-correct="${image.correct}"
                         onclick="handleImageClick(this)">
                `).join('')}
            </div>
            ` : ''}
            <div class="nav-buttons">
                ${currentPage > 0 ? '<button onclick="prevPage()">Previous</button>' : '<div></div>'}
                ${currentPage < lesson.pages.length - 1 ? '<button onclick="nextPage()">Next</button>' : '<button onclick="backToLessons()">Finish</button>'}
            </div>
        </div>
    `;
    
    document.getElementById('lesson-content').innerHTML = content;
    
    // Play audio automatically
    currentAudio = document.getElementById('lesson-audio');
    currentAudio.play().catch(error => {
        console.log("Autoplay was prevented:", error);
    });
}

function handleImageClick(imgElement) {
    // Remueve clases previas de todas las imágenes
    document.querySelectorAll('.image-option').forEach(img => {
        img.classList.remove('correct', 'incorrect');
    });
    
    // Agrega clase según si es correcta o no
    if (imgElement.dataset.correct === 'true') {
        imgElement.classList.add('correct');
    } else {
        imgElement.classList.add('incorrect');
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

function backToLessons() {
    if (currentAudio) {
        currentAudio.pause();
    }
    document.getElementById('lesson-content').style.display = 'none';
    document.querySelector('.lessons').style.display = 'block';
    currentLesson = null;
    currentPage = 0;
    currentAudio = null;
}