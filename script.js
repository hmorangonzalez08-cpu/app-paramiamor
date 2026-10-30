// --- NAVEGACIÓN ---
function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// --- LÓGICA DEL TRES EN RAYA ---
let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "💜";
let gameActive = true;
const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status-msg");
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function createBoard() {
    if (!boardElement) return;
    boardElement.innerHTML = "";
    boardState.forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.innerText = cell;
        cellDiv.onclick = () => handleCellClick(index, cellDiv);
        boardElement.appendChild(cellDiv);
    });
}

function handleCellClick(index, cellDiv) {
    if (boardState[index] !== "" || !gameActive) return;
    boardState[index] = currentPlayer;
    cellDiv.innerText = currentPlayer;
    checkWin();
}

function checkWin() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusElement.innerText = `¡Ha ganado ${currentPlayer}! 🥰`;
        gameActive = false;
        return;
    }
    if (!boardState.includes("")) {
        statusElement.innerText = "¡Empate de besos! 😘";
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === "💜" ? "💖" : "💜";
    statusElement.innerText = `Turno de: ${currentPlayer}`;
}

function resetBoard() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "💜";
    gameActive = true;
    statusElement.innerText = `Turno de: ${currentPlayer}`;
    createBoard();
}

// --- LÓGICA DEL TRIVIAL ---
// AQUÍ PUEDES AÑADIR MÁS PREGUNTAS SI QUIERES
// --- LÓGICA DEL TRIVIAL ---
const questions = [
    {
        question: "¿Dónde fuimos la primera vez que quedamos a solas?",
        options: ["Al casino", "A fotografiarnos", "Al lado de tu casita", "De fiesta"],
        answer: 2
    },
    {
        question: "¿Qué es lo primero que pensé cuando te vi?",
        options: ["Que mujer tan perfecta", "Tan guapa y tan mia?", "Se me va a caer la baba", "Parece una borde de mierda"],
        answer: 1
    },  
    {
        question: "¿Qué es lo primero que te dije cuando te vi?",
        options: ["Que guapa eres", "Creia que eras mas guapa", "Eres la mejor", "Me encanta tu sonrisa"],
        answer: 1
    },
    {
        question: "¿Quién de los dos suele tardar más tiempo en decidir qué plan hacer?",
        options: ["Tú, tardas la vida entera", "Yo, que soy un indeciso", "Los dos a la vez", "Ninguno, ponemos la primera que vemos"],
        answer: 0
    },
    {
        question: "¿Cuál fue el regalo más especial o curioso que te he hecho hasta ahora?",
        options: ["La camisetita", "El ramo de flores", "Una carta gigante", "Cualquier detalle porque te encanta todo"],
        answer: 3
    },
    {
        question: "Si tuviéramos que hacer un viaje improvisado ahora mismo, ¿a dónde iríamos?",
        options: ["Nueva York", "Brasil", "Tokio", "Puerto Rico"],
        answer: 1
    },
    {
        question: "¿Qué canción es nuestra cancion?",
        options: ["Aire - Lucho RK", "Gusta - Luar La L", "Contigo Na Más - Remix", "Vernos - Hira"],
        answer: 0
    },
    {
        question: "¿Cómo suelo llamarte más cariñosamente cuando estamos a solas?",
        options: ["Mi niña", "Morrr", "Bebeee", "Todas las anteriores son correctas"],
        answer: 3
    },
    {
        question: "¿Cuál dirias que es mi plan favorito para un domingo perezoso de invierno?",
        options: ["Quedarnos en la cama todo el día viendo pelis", "Salir de fiesta", "Hacer maratón de videojuegos", "Dormir acurrucados"],
        answer: 0
    },
    {
        question: "¿Quién se duerme antes de los dos en las llamadas nocturnas?",
        options: ["Tú, te duermes enseguida", "Yo, que caigo frito", "Los dos a la vez", "Ninguno, aguantamos como campeones"],
        answer: 1
    },
    {
        question: "¿Qué es lo que más te repito siempre sobre lo guapa que eres?",
        options: ["Que eres perfecta para mí", "Que no pienses mal de tu físico porque eres la más hermosa", "Que me tienes loco", "Todas son ciertas, ¡te lo digo siempre!"],
        answer: 3
    },
    {
        question: "¿Qué es lo que más me gusta en mis tiempos libres?",
        options: ["Pasar tiempo de calidad contigo", "Jugar al ordenador", "Hacer deporte", "Follar contigo hasta que nos duela el cuerpo"],
        answer: 0
    }
];
let currentQuestion = 0;

function loadQuestion() {
    const container = document.getElementById("question-container");
    if (!container) return;
    if (currentQuestion >= questions.length) {
        container.innerHTML = "<h3>¡Has acertado todas! 🎉</h3><p>Estás un pasito más cerca de la sorpresa final...</p>";
        return;
    }
    const q = questions[currentQuestion];
    let html = `<p style="font-size: 1.2rem; margin-bottom: 1rem;"><strong>${q.question}</strong></p>`;
    q.options.forEach((opt, index) => {
        html += `<button class="option-btn" onclick="checkAnswer(${index}, ${q.answer})">${opt}</button>`;
    });
    container.innerHTML = html;
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("¡Correcto mi niña! 🥰");
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Mmm... casi, piénsalo otra vez 😉");
    }
}

// --- LÓGICA DE VERDAD O RETO (100 VERDADES Y 100 RETOS PICANTES) ---

const verdades = [
    "¿Cuál es tu parte favorita de mi cuerpo? 😏",
    "¿En qué momento exacto te diste cuenta de que te gustaba?",
    "¿Qué es lo más atrevido que has pensado hacer conmigo? 🔥",
    "¿Qué ropa mía te gusta más cómo me queda?",
    "Del 1 al 10, ¿cuánto de nervioso te pongo cuando te miro fijamente a los ojos?",
    "¿Qué es lo primero que miras de mí cuando me cambio de ropa?",
    "¿En qué lugar, que no sea una cama, te gustaría que nos liáramos? 🤫",
    "¿Cuál es el mensaje o audio mío que más nerviosa te ha puesto?",
    "Del 1 al 10, ¿cuántas ganas tenías de besarme en nuestra primera cita?",
    "¿Qué es lo que hago sin darme cuenta que más te pone?",
    "Si tuviéramos que pasar todo un fin de semana solos en una cabaña, ¿qué no podría faltar?",
    "¿Alguna vez te has imaginado cómo seríamos viviendo juntos?",
    "¿Qué parte de tu cuerpo te gustaría que besara más a menudo? 😈",
    "¿Cuál es tu recuerdo más 'caliente' que tienes de nosotros dos?",
    "Si esta noche solo pudieras tocarme con una mano, ¿dónde la pondrías?",
    "¿Cuál crees que es tu mayor arma de seducción conmigo?",
    "Si te concediera un deseo ahora mismo en esta habitación, ¿cuál sería? ✨",
    "¿Qué fantasía inconfesable te gustaría cumplir conmigo?",
    "¿Alguna vez has soñado algo erótico conmigo? Cuéntamelo con detalles.",
    "¿Qué es lo que te enciende más rápido de mí?",
    "¿Te gusta cuando te agarro fuerte de la cintura?",
    "¿Cuál ha sido el sitio más prohibido o peligroso donde te has imaginado besándome?",
    "Si te dijera que me quites la ropa con los dientes, ¿lo harías ahora mismo?",
    "¿Qué tono de voz o susurro mío te hace temblar las piernas?",
    "¿Prefieres los besos suaves y lentos o los salvajes y directos?",
    "¿Qué es lo primero que te quita el sueño por las noches cuando piensas en mí?",
    "Si tuvieras que describirme en la cama con una sola palabra, ¿cuál sería?",
    "¿Te excita que te hable al oído con voz ronca?",
    "¿Cuál es la zona de tu cuerpo donde eres más sensible a los besos?",
    "¿Alguna vez te has tocado pensando en mí?",
    "¿Qué prenda de ropa interior llevas puesta ahora mismo?",
    "Si estuviéramos solos en un ascensor y se parara, ¿qué harías conmigo?",
    "¿Qué es lo más loco que harías por pasar una noche entera a solas conmigo?",
    "¿Te gusta cuando te miro los labios mientras hablas?",
    "¿Qué parte de mis besos te hace perder el control?",
    "¿Alguna vez has deseado que el tiempo se pare mientras nos estamos besando?",
    "¿Qué prefieres: que te muerda los labios o el cuello?",
    "¿Cuál es tu posición favorita para dormir abrazados?",
    "¿Te pone nervioso o te gusta cuando te agarro del pelo?",
    "¿Qué olor o perfume mío es el que más te vuelve loca?",
    "¿Alguna vez has querido abalanzarte sobre mí en plena calle?",
    "¿Qué te hace sentir más vulnerable cuando estamos a solas?",
    "¿Te gusta cuando te doy órdenes de lo que tienes que hacer?",
    "¿Cuál es tu mayor debilidad cuando estoy cerca de ti?",
    "Si te pido que hagamos algo totalmente loco ahora mismo, ¿aceptarías?",
    "¿Qué tipo de caricias te dan más escalofríos por la espalda?",
    "¿Alguna vez te has mordido los labios pensando en un mensaje mío?",
    "¿Qué es lo más romántico y a la vez picante que has hecho por amor?",
    "¿Te gusta que te bese despacio recorriendo todo el cuerpo?",
    "¿Cuál es la mirada que te pongo que más te desarma?",
    "¿Te excita pensar en lo que vamos a hacer cuando estemos a solas este sábado?",
    "¿Qué parte de mi cara te gusta más besar?",
    "¿Alguna vez has fingido estar distraída solo para que me acerque más?",
    "¿Qué te provoca cuando te cojo de la mano por la calle?",
    "¿Te gusta que te susurre al oído lo mucho que te deseo?",
    "¿Cuál es el piropo más atrevido que te gustaría que te dijera?",
    "¿Te imaginas despertando a mi lado todas las mañanas?",
    "¿Qué es lo que más te gusta de mi voz?",
    "¿Alguna vez te has quedado sin respiración por un beso nuestro?",
    "¿Qué prefieres, que te bese con intensidad o que te acaricie con calma?",
    "¿Te gusta cuando te doy besos sorpresa cuando menos te lo esperas?",
    "¿Cuál es el recuerdo más tierno y picante que guardas de los dos?",
    "¿Te gustaría que probemos cosas nuevas y diferentes en la intimidad?",
    "¿Qué es lo que más te acelera el ritmo cardíaco cuando estoy contigo?",
    "¿Alguna vez has querido saltarte un plan solo para quedarte conmigo a solas?",
    "¿Qué parte de mis brazos o manos te transmite más seguridad?",
    "¿Te gusta cuando te abrazo por la espalda de la nada?",
    "¿Cuál crees que es nuestro punto fuerte como pareja?",
    "¿Te consideras una persona celosa cuando alguien me mira mucho?",
    "¿Qué es lo que más te gusta que te haga en la oreja?",
    "¿Alguna vez has sonreído como tonta al leer un mensaje mío en público?",
    "¿Qué prefieres, una cena romántica a la luz de las velas o una noche loca en casa?",
    "¿Te excita la idea de viajar juntos a un sitio totalmente aislado del mundo?",
    "¿Qué es lo que más te gusta de cómo te miro?",
    "¿Alguna vez has deseado que el día dure 48 horas solo para estar conmigo?",
    "¿Qué tipo de besos son tus favoritos absolutos?",
    "¿Te gusta cuando te piropeo de forma directa y sin filtros?",
    "¿Cuál es el mayor secreto o pensamiento travieso que tienes sobre nosotros?",
    "¿Te pone los pelos de punta cuando te rozo la piel sin querer?",
    "¿Qué es lo que más te engancha de nuestra relación?",
    "¿Alguna vez has querido parar el tiempo en medio de un beso?",
    "¿Qué te hace sentir que estás completamente segura a mi lado?",
    "¿Te gusta cuando te cojo en brazos de la nada?",
    "¿Cuál es el mejor recuerdo que tienes de nuestros primeros besos?",
    "¿Te excita pensar que ya queda muy poco para pedirte salir oficialmente?",
    "¿Qué es lo que más te gusta de mi forma de ser contigo?",
    "¿Alguna vez has perdido la noción del tiempo por estar hablando conmigo?",
    "¿Qué prefieres, que te bese la frente o los labios?",
    "¿Te gusta cuando nos quedamos en silencio mirándonos a los ojos sin decir nada?",
    "¿Cuál es la locura más grande que harías por mí?",
    "¿Te pone nerviosa cuando me pongo serio y te miro fijamente?",
    "¿Qué es lo que más te gusta de nuestras conversaciones nocturnas?",
    "¿Alguna vez has soñado desppierta con un momento nuestro?",
    "¿Qué te hace suspirar cada vez que te acuerdas de mí?",
    "¿Te gusta cuando te dedico canciones o palabras bonitas?",
    "¿Cuál es tu mayor sueño romántico para nuestro futuro?",
    "¿Te excita saber que esta página web la he hecho exclusivamente para ti?",
    "¿Qué es lo que más te enamora de mí cada día que pasa?",
    "¿Alguna vez has dudado de lo mucho que te adoro? *(Espero que la respuesta sea no)*",
    "¿Estás preparada para todo lo que vamos a vivir juntos a partir del 7 de noviembre?"
];

const retos = [
    "Dame un beso apasionado de 10 segundos donde tú elijas. 🔥",
    "Hazme un masaje en el cuello (o donde yo t pida) durante 2 minutos. 💆‍♀️",
    "Susúrrame al oído la fantasía más secreta que tengas. 🤫",
    "Tienes que darme besos por el cuello hasta que te diga que pares. 😈",
    "Déjame que te dé un beso en tu zona más sensible (tú mandas).",
    "Baila pegada a mí durante 30 segundos sin música.",
    "Dame un beso de película de exactamente 15 segundos sin usar las manos.",
    "Susúrrame al oído con voz muy sugerente qué quieres que pase esta noche.",
    "Quítate una prenda de ropa (¡y yo también me quito otra!). 🥵",
    "Déjame vendarte los ojos y adivina con qué parte de mi cuerpo te estoy rozando.",
    "Hazme un chupetón o marca suave donde nadie más pueda verlo. 🧛‍♀️",
    "Muerde mi labio inferior suavemente y no me sueltes durante 5 segundos.",
    "Siéntate encima de mí para la próxima ronda del juego. 😏",
    "Dame un beso en el cuello que baje lentamente hasta donde tú quieras.",
    "Deja que desabroche tu pantalón o camiseta usando solo una mano.",
    "Acércate a 1 milímetro de mis labios pero no me beses durante un minuto entero.",
    "Pasa un cubito de hielo (o tus manos muy frías) por mi espalda o mi cuello. 🧊",
    "Manda tu mano por debajo de mi camiseta y déjala ahí 2 minutos.",
    "Hazme una marca con besos desde la mandíbula hasta la clavícula.",
    "Mírame fijamente a los ojos sin reírte ni parpadear durante 45 segundos.",
    "Pásame un caramelo o un cubito de hielo usando solo la boca.",
    "Abrázame muy fuerte por la espalda y no me sueltes en 3 minutos mientras te hablo.",
    "Quítate los calcetines (o los zapatos) usando únicamente los dientes de los dos...",
    "Hazme cosquillas en la zona que menos me guste durante 30 segundos.",
    "Túmbate boca arriba y déjame que te dibuje un corazón en la tripa con los dedos.",
    "Susúrrame tres cosas muy sucias y atrevidas al oído derecho.",
    "Muerde suavemente la parte blanda de mi oreja y respira hondo.",
    "Hazme un striptease muy lento de una sola prenda al ritmo que yo marque.",
    "Permíteme que te ate las manos con un pañuelo durante dos turnos seguidos.",
    "Dame besos en la palma de la mano y en la muñeca lentamente.",
    "Imita cómo gimes o cómo reaccionas cuando te doy un beso en el cuello.",
    "Colócate de rodillas frente a mí y mírame hacia arriba con cara de traviesa.",
    "Pásame la lengua despacio por el lóbulo de la oreja.",
    "Deja que te acaricie la pierna subiendo poco a poco durante 1 minuto.",
    "Dame un beso con tanta fuerza que nos quedemos sin aire.",
    "Hazme una pregunta al oído con la voz más sensual que te salga.",
    "Masajea mis manos y mis dedos con crema o aceite (o con las manos calientes).",
    "Quédate en ropa interior durante los próximos 3 turnos de juego.",
    "Muerde mi labio superior y luego bésame despacio.",
    "Pon tus manos en mi nuca y acércame hacia ti con fuerza y ganas.",
    "Hazme un recorrido de besos desde el hombro hasta el codo.",
    "Susúrrame al oído qué es lo que más te gusta hacerme en la cama.",
    "Déjame darte un beso en el cuello mientras te agarro firmemente de la cintura.",
    "Haz una postura sugerente y aguántala durante 20 segundos para que te mire.",
    "Pasa tu dedo índice lentamente por mis labios y luego por mi cuello.",
    "Dame un beso húmedo y con mucha lengua, sin prisa.",
    "Hazme caminar a ciegas por la habitación guiado solo de tu mano.",
    "Rocíame con besos rápidos por toda la cara hasta que me rinda.",
    "Abrázame tan fuerte y pegada que no quepa ni un alfiler entre los dos.",
    "Hazme un masaje en los hombros mientras me dices lo mucho que me deseas.",
    "Sostén mi barbilla con tu mano y mírame los labios durante 20 segundos.",
    "Pásate un cubito de hielo por los labios y luego bésame.",
    "Hazme una promesa picante que tengas que cumplir antes de que acabe el día.",
    "Tápame los ojos y dame un beso sorpresa donde tú quieras.",
    "Camina de forma muy sexy y provocativa hacia mí y abrázame.",
    "Muerde mi oreja con la fuerza justa para hacerme temblar.",
    "Permíteme que te quite una prenda de ropa superior con los ojos cerrados.",
    "Haz que te susurre una fantasía y finge que te has quedado sin palabras.",
    "Pásame los dedos por el pecho dibujando círculos imaginarios muy lentos.",
    "Dame un beso apasionado de pie contra la pared.",
    "Susúrrame al oído cuánto me echas de menos cuando no estamos juntos.",
    "Hazme una llave de amor: abrázame por el cuello y no me dejes escapar.",
    "Coloca tu cabeza en mi pecho para escuchar cómo late mi corazón acelerado por ti.",
    "Pásame la yema de los dedos por los labios con total suavidad.",
    "Mírame fijamente con cara de 'te necesito' durante medio minuto.",
    "Hazme una reverencia y bésame la mano como si fuera un príncipe malvado.",
    "Pásame los labios por la mejilla rozando apenas la piel muy despacio.",
    "Dame un beso en la comisura de los labios y muerde ligeramente.",
    "Hazme un masaje en la cabeza y el cuero cabelludo para relajarme (o ponerme nervioso).",
    "Susúrrame cuál ha sido el momento del día en el que más has pensado en mí.",
    "Quítate la camiseta o la sudadera y déjala a un lado.",
    "Hazme un recorrido de besos por toda la espalda.",
    "Muerde mi labio inferior y di en voz alta: 'Eres solo mío'.",
    "Abrázame por delante cruzando los brazos alrededor de mi cuello con fuerza.",
    "Pásame la lengua por los labios de forma sugerente mientras me miras.",
    "Dame un beso largo, prohibido y con mucha pasión.",
    "Hazme cosquillas en la zona de las costillas durante 15 segundos.",
    "Permíteme que te bese el cuello por detrás por sorpresa.",
    "Susúrrame algo prohibido que solo debamos saber nosotros dos.",
    "Haz una postura de modelo sexy apoyada en la pared y guiñame un ojo.",
    "Pásame las manos frías por la nuca de golpe para darme escalofríos.",
    "Dame un beso intenso mientras te cojo en volandas.",
    "Hazme un masaje en los pies o en las piernas durante 2 minutos.",
    "Muerde suavemente el lóbulo de mi oreja izquierda.",
    "Acércate a mi oído y dime con voz de misterio qué ganas tienes de que llegue el 7 de noviembre.",
    "Pásame los dedos por el cuello imitando el recorrido de una pluma.",
    "Dame tres besos rápidos en los labios y uno larguísimo en el cuello.",
    "Hazme un pulso de manos: si pierdes, me debes un beso largo; si ganas, te doy dos.",
    "Susúrrame qué es lo que más te gusta de mi físico de arriba a abajo.",
    "Abrázame fuerte y déjame que te bese la frente con ternura infinita.",
    "Pásame los labios por la punta de la nariz de broma y luego bésame bien.",
    "Hazme un gesto obsceno pero adorable que solo entendamos nosotros.",
    "Tápame los ojos con tus manos y adivina qué parte de mi cara te estoy tocando.",
    "Muerde mi labio inferior con pasión y suéltame despacio.",
    "Dame un beso de tornillo improvisado en medio de la habitación.",
    "Hazme una caricia en la mejilla tan suave que parezca que no te toco.",
    "Susúrrame al oído que me quieres más que a nada en este mundo.",
    "Pásate los dedos por tus propios labios y luego tócalos en los míos.",
    "Hazme una seña para que te acerque y bésame sin previo aviso.",
    "¡Premio gordo! Elige la verdad o el reto que más te apetezca hacer de toda la lista, ¡tú mandas! 🔥"
];

function playTruth() {
    const display = document.getElementById("td-display");
    const randomTruth = verdades[Math.floor(Math.random() * verdades.length)];
    display.innerHTML = `<h3 style="color: #a29bfe; margin-bottom: 10px;">VERDAD 😇</h3><p style="font-size: 1.2rem;">${randomTruth}</p>`;
}

function playDare() {
    const display = document.getElementById("td-display");
    const randomDare = retos[Math.floor(Math.random() * retos.length)];
    display.innerHTML = `<h3 style="color: #ff7675; margin-bottom: 10px;">RETO 😈</h3><p style="font-size: 1.2rem;">${randomDare}</p>`;
}

// --- LÓGICA DE LA CARTA SECRETA ---
let heartTaps = 0;
const totalTapsNeeded = 10;

function tapHeart() {
    heartTaps++;
    let progress = (heartTaps / totalTapsNeeded) * 100;
    document.getElementById("heart-progress").style.width = progress + "%";
    
    const heart = document.getElementById("pulsing-heart");
    heart.style.animation = "none";
    setTimeout(() => heart.style.animation = "pulse 1.5s infinite", 50);

    if (heartTaps >= totalTapsNeeded) {
        setTimeout(() => {
            document.getElementById("heart-container").style.display = "none";
            document.getElementById("secret-letter").style.display = "block";
            alert("¡Carta desbloqueada! 💌");
        }, 300);
    }
}

// --- LÓGICA DEL MEMORY GAME ---
const emojisMemory = ["📸", "🍷", "🏖️", "🎡", "🍿", "🎁"];
let memoryCards = [...emojisMemory, ...emojisMemory]; 
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

function initMemoryGame() {
    const board = document.getElementById('memory-board');
    if (!board) return;
    board.innerHTML = "";
    matchedPairs = 0;
    
    memoryCards.sort(() => 0.5 - Math.random());

    memoryCards.forEach((emoji) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.framework = emoji;
        
        card.innerHTML = `
            <div class="front">${emoji}</div>
            <div class="back"></div>
        `;
        
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch) {
        disableCards();
        matchedPairs++;
        if (matchedPairs === 6) {
            setTimeout(() => {
                alert("¡Completado! Baúl de recuerdos desbloqueado 🔓💖");
                goTo('gallery-screen');
            }, 600);
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoardMemory();
}

function unflipCards() {
    lockBoard = true; 
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoardMemory();
    }, 1000);
}

function resetBoardMemory() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// --- INICIALIZACIÓN GLOBAL ---
window.onload = () => {
    createBoard();
    loadQuestion();
    initMemoryGame();
};

// --- LÓGICA DE LA SORPRESA FINAL ---
function checkSecretCode() {
    const userInput = document.getElementById("secret-code-input").value.trim().toLowerCase();
    
    // Puedes cambiar la respuesta correcta aquí abajo (ej: "5" o "cinco")
    if (userInput === "5" || userInput === "cinco") {
        alert("¡Contraseña correcta, mi amorrrr! Te amo mucho 💘");
        document.getElementById("lock-container").style.display = "none";
        document.getElementById("video-reveal-container").style.display = "block";
    } else {
        alert("Mmm...te estas equivocando, piénsalo bien 😉");
    }
}