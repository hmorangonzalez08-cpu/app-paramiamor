// --- NAVEGACIÓN ---
function goTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// --- MODO NOCHE ---
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const themeBtn = document.getElementById('theme-btn');
    if (document.body.classList.contains('night-mode')) {
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌙";
    }
}

// --- CONFETI DE CORAZONES ---
function launchConfetti() {
    const container = document.getElementById("confetti-container");
    if (!container) return;
    const hearts = ["💖", "💜", "✨", "🌸", "💘"];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-heart");
        confetti.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        container.appendChild(confetti);

        setTimeout(() => { confetti.remove(); }, 4000);
    }
}

// --- MÚSICA DE FONDO ---
let isMusicPlaying = false;
const musicAudio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");

function toggleMusic() {
    if (isMusicPlaying) {
        musicAudio.pause();
        musicIcon.innerText = "🔇";
        musicBtn.classList.remove("playing");
    } else {
        musicAudio.play();
        musicIcon.innerText = "🎵";
        musicBtn.classList.add("playing");
    }
    isMusicPlaying = !isMusicPlaying;
}

// --- CONTADOR DE TIEMPO (JULIO 2026) ---
const startDate = new Date("2026-07-07T00:00:00");

function updateLoveCounter() {
    const counterElement = document.getElementById("love-counter");
    if (!counterElement) return;

    const now = new Date();
    
    if (now < startDate) {
        counterElement.innerText = "¡Nuestra historia empieza hoy! ❤️";
        return;
    }

    let months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    let pastDate = new Date(startDate);
    pastDate.setMonth(pastDate.getMonth() + months);

    if (now < pastDate) {
        months--;
        pastDate = new Date(startDate);
        pastDate.setMonth(pastDate.getMonth() + months);
    }

    const diff = now - pastDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    counterElement.innerText = `${months} meses y ${days} días ✨`;
}

// --- 100 RAZONES POR LAS QUE TE AMO (ENUMERACIÓN AUTOMÁTICA) ---
const razones = [
    "Por cómo te ríes cuando te hago bromas tontas.", "Por la forma tan bonita en la que me miras.",
    "Porque me haces querer ser mejor persona.", "Por tus abrazos que me curan cualquier mal día.",
    "Por tu sonrisa, que ilumina cualquier lugar.", "Porque eres la mujer más hermosa que he visto.",
    "Por lo bien que nos entendemos solo mirándonos.", "Por la paz tan grande que siento contigo.",
    "Porque me encanta quedarme dormido a tu lado.", "Por cómo me buscas la mano por la calle.",
    "Por tus caricias suaves en la cara.", "Por todos los 'te amo' sinceros que nos decimos.",
    "Porque haces que los días lluviosos sean mágicos.", "Por tus besos con los que se me para el tiempo.",
    "Porque eres mi confidente y mi mejor amiga.", "Por cómo defiendes lo que quieres con pasión.",
    "Por tu voz dulce cuando tienes sueño.", "Porque a tu lado todo es divertido.",
    "Por cómo me cuides cuando estoy abrumado.", "Por los mensajes bonitos de la nada.",
    "Porque eres única y no te cambiaría por nada.", "Por cómo se te frunce la cara al concentrarte.",
    "Por las locuras espontáneas que inventamos.", "Por me haces sentir el chico más afortunado.",
    "Por tu olor que se me queda grabado.", "Por lo bien que te queda mi camiseta.",
    "Porque contigo puedo ser yo mismo al 100%.", "Por el apoyo tan grande que me das siempre.",
    "Por cómo me muerdes los labios suavemente.", "Porque juntos formamos un equipo invencible.",
    "Por lo linda que estás nada más despertarte.", "Por cada detalle que tienes sin esperar nada.",
    "Porque me encanta verte sonreír.", "Por el cosquilleo que siento cuando voy a verte.",
    "Por nuestras charlas profundas de madrugada.", "Porque tienes un corazón de oro puro.",
    "Por lo cariñosa y tierna que eres conmigo.", "Por lo sexy que te pones cuando nos arreglamos.",
    "Porque no imagino mi futuro sin ti.", "Por la manera en la que me sostienes.",
    "Por tus besos tiernos en la frente.", "Porque conviertes un domingo cualquiera en un planazo.",
    "Por la ilusión con la que me cuentas tus cosas.", "Por cómo te enfadas de broma para que te mime.",
    "Porque tus besos en el cuello me vuelven loco.", "Por cómo me escuchas con atención.",
    "Porque me fascina tu forma de ver la vida.", "Por las risas y cosquillas infinitas.",
    "Porque a tu lado el tiempo vuela.", "Por sacarme una sonrisa en los días difíciles.",
    "Por tus miradas pícaras impredecibles.", "Porque eres mi lugar seguro.",
    "Por cada paseo largo de la mano.", "Por lo bien que me sienta escucharte.",
    "Por tu valentía y tu gran fuerza.", "Porque amo ver tu carcajada franca.",
    "Por lo bien que encajan nuestras manos.", "Por tu lado divertido y gamberro.",
    "Porque me enamoras cada día más.", "Por tus roces disimulados que me aceleran.",
    "Por el brillo especial de tus ojos.", "Por nuestras bromas que solo entiendes tú.",
    "Porque contigo el silencio es cómodo.", "Por cómo me abrazas por la espalda.",
    "Por la forma tan dulce de decir mi nombre.", "Porque eres la mejor compañera de viajes.",
    "Por los besos sorpresa en cualquier sitio.", "Por la infinita paciencia que me tienes.",
    "Por pillarme mirándote como un tonto.", "Por la pasión con la que nos queremos.",
    "Por lo hermosa que sonríes con flores.", "Por la entrega que le pones a todo.",
    "Por cómo te acurrucas en mi pecho.", "Por estar preciosa aun estando despeinada.",
    "Porque me das la fuerza que me falta.", "Por calmar mi mente cuando me estreso.",
    "Por tu sinceridad sin filtros.", "Porque aprendo contigo cada día.",
    "Por el flow único que tienes al bailar.", "Por tu lado ultra romántico.",
    "Por tus comentarios que me hacen reír.", "Porque me haces sentir muy amado.",
    "Por las ganas constantes de abrazarte.", "Por lo leal que eres con los tuyos.",
    "Porque tus labios son mi refugio.", "Por construir esta historia paso a paso.",
    "Por hacer que me duela la tripa de reír.", "Porque traes pura magia a mi vida.",
    "Por tus abrazos fuertes de la nada.", "Por leerme la mente sin hablar.",
    "Porque vivir esto contigo es un regalo.", "Por lo sexy que eres en cualquier momento.",
    "Por la química brutal que nos conecta.", "Por sacarme sonrisas mirando al móvil.",
    "Por tu bondad y gran corazón.", "Por la complicidad tan bonita de estos meses.",
    "Porque contigo descubrí el amor verdadero.", "Por todo lo increíble que nos espera.",
    "Porque sencillamente eres Victoria.", "Porque te amo con todo mi corazón. ❤️"
];

function getRandomReason() {
    const display = document.getElementById("reason-display");
    const index = Math.floor(Math.random() * razones.length);
    const randomReason = razones[index];
    display.innerHTML = `<p style="font-size: 1.1rem; font-weight: bold; color: var(--dark-purple);">Razón #${index + 1} de 100 ✨</p><p style="font-size: 1.1rem; margin-top: 5px;">${randomReason}</p>`;
    launchConfetti();
}

// --- 100 PLANES DE CITAS ---
const planesCitas = [
    "Noche de pizza casera, pijama y maratón de películas.",
    "Cena romántica a la luz de las velas (cocino yo).",
    "Ir a ver el atardecer a un sitio bonito con nuestra música.",
    "Sesión VIP de masajes con música relajante.",
    "Noche de cine con palomitas, chuches y besos.",
    "Escapada improvisada en coche a un sitio cercano.",
    "Paseo nocturno tomándonos un helado.",
    "Desayuno especial preparado en la cama un domingo.",
    "Tarde de juegos para ver quién paga las cañas.",
    "Picnic romántico al aire libre en un parque.",
    "Tarde entera de mimos, abrazos y siesta infinita.",
    "Noche de cócteles y vestirnos elegantes para salir.",
    "Tarde de compras donde yo llevo las bolsas.",
    "Ir a una cafetería bonita a charlar horas.",
    "Escuchar nuestro disco favorito a oscuras tumbados.",
    "Noche de miradas a las estrellas alejados de la ciudad.",
    "Cita en el coche hablando de todo con la música bajita.",
    "Noche de juegos de mesa en casa con premios picantes.",
    "Maratón de hacernos fotos divertidas en la calle.",
    "Preparar tortitas juntos para merendar.",
    "Visitar un pueblo o rincón histórico que no conozcamos.",
    "Comprar churros o cruasanes calentitos recién hechos.",
    "Probar la mejor hamburguesa de la ciudad juntos.",
    "Baño relajante con espumita y música chill.",
    "Tarde de peli con manta y chocolate caliente.",
    "Paseo por el campo o la montaña a respirar aire puro.",
    "Alquilar bicicletas o patinetes y hacer una ruta.",
    "Ir a una feria o parque de atracciones a subir a todo.",
    "Tarde de recreativos a jugar a las maquinitas.",
    "Pedir comida a domicilio y comer en el suelo del salón.",
    "Noche temática de comida mexicana en casa.",
    "Ir a probar un postre gigante a una merienda.",
    "Ir a un mirador alto a ver las luces de la ciudad.",
    "Cantar a pleno pulmón nuestras canciones en el coche.",
    "Construir un fuerte de mantas en el salón como niños.",
    "Salir a tomar unos vinos o cañas por una zona bonita.",
    "Visitar una exposición o museo curioso juntos.",
    "Ir a una tienda y comprarnos un detalle secreto.",
    "Hacer pizza desde cero amasándola nosotros.",
    "Leernos cuentos o cartas bonitas a la luz de la vela.",
    "Ver una peli de miedo para tener excusa de abrazarnos.",
    "Comprar fresas con chocolate y comérnoslas a besos.",
    "Bailar una canción lenta pegados en medio del salón.",
    "Cita de comida rápida improvisada a altas horas.",
    "Ver amanecer juntos tras una noche hablando.",
    "Salir a desayunar pronto un día de diario juntos.",
    "Ir a tirar dardos o jugar al billar.",
    "Inventar un cóctel propio con nuestro nombre.",
    "Tarde de mimos viendo nuestras fotos desde que nos conocemos.",
    "Escribirnos una carta rápida de 5 minutos y leerla en alto.",
    "Cita de ir probando helados de sabores raros.",
    "Quedarnos todo el día en pijama sin mirar el reloj.",
    "Salir a cenar a un sitio que elijas tú al 100%.",
    "Ir a por pan dulce recién horneado para desayunar.",
    "Ruta en coche sin destino fijo doblando esquinas al azar.",
    "Noche de saga completa de pelis con snacks infinitos.",
    "Tarde de café helado y charla en una terraza.",
    "Crear una playlist conjunta entre los dos.",
    "Probar un sitio nuevo que hayamos visto en Instagram.",
    "Masaje de pies y piernas cansadas tras un día largo.",
    "Salir a tomar un mojito en una terraza chula.",
    "Preparar un batido casero de frutas juntos.",
    "Salir a ver la luna llena a un sitio tranquilo.",
    "Hacer crepes dulces o salados en la cocina.",
    "Probarte ropa rara en una tienda y hacer fotos de risa.",
    "Maratón de vuestro programa o serie favorita.",
    "Cita en el autocine o ver una peli en el portátil en el coche.",
    "Cita de café para ponernos al día como si fuera la primera vez.",
    "Cita de pizza fría al día siguiente para desayunar.",
    "Cocinar pasta italiana casera escuchando música de fondo.",
    "Probar un vino diferente que no hayamos tomado nunca.",
    "Comprar una caja de donuts y comérnosla entera.",
    "Tumbarte en mi regazo mientras te acaricio el pelo.",
    "Comer fondue de chocolate con trozos de fruta.",
    "Subir a un sitio alto a ver caer la tarde.",
    "Cita para buscar el mejor cruasán de la ciudad.",
    "Cita de cenar hamburguesas chorreando queso.",
    "Conducir de noche por la ciudad con las ventanas bajadas.",
    "Noche de ver pelis infantiles o de nuestra infancia.",
    "Tarde de abrazos con música acústica suave.",
    "Comprar fruta de temporada e inventar un postre.",
    "Cita de tortitas con sirope hasta arriba.",
    "Cita de pizza redonda cortada a trozos desiguales.",
    "Cita de picoteo con queso y embutido en casa.",
    "Tarde de té helado o café en un sitio tranquilo.",
    "Bailar en pijama por el salón sin vergüenza.",
    "Ver una peli cursi y burlarnos con amor.",
    "Tumbarse a no hacer nada absolutamente juntos.",
    "Ir a lavar el coche juntos y terminar mojados.",
    "Comprar bollería recién hecha un sábado por la mañana.",
    "Cita para ver cuál de los dos come más rápido.",
    "Cita de copas tranquilas hablando de nuestros planes.",
    "Cita de pizza con los bordes rellenos de queso.",
    "Cita de palomitas saladas mezcladas con chocolate.",
    "Cita de café rápido antes de empezar el día.",
    "Hacer un refugio con cojines en la cama.",
    "Cita de comer fresas a mordiscos compartidos.",
    "Cita para cocinar waffles con helado por encima.",
    "Cita de pizza cuadrada hecha en bandeja de horno.",
    "Cita sorpresa organizada 100% por mí de principio a fin."
];

// --- 100 CUPONES CANJEABLES ---
const cuponesVales = [
    "Un beso apasionado de 10 segundos en cualquier momento.",
    "Un masaje completo de 15 minutos en espalda o piernas.",
    "Tener la razón en una discusión sin rechistar.",
    "Elegir la película o serie que vamos a ver hoy.",
    "Que te prepare tu plato o postre favorito.",
    "Un abrazo gigante de 2 minutos sin soltarte.",
    "Salir a cenar a donde tú elijas hoy mismo.",
    "Un desayuno completo servido en la cama.",
    "Un perdón instantáneo por una pequeña metedura de pata.",
    "Una tarde entera de mimos y mimos sin parar.",
    "Que te haga la cama o te ayude en lo que necesites.",
    "Un ataque de besos sorpresa en la cara.",
    "Decidir el plan completo de este fin de semana.",
    "Un helado o dulce a tu elección pagado por mí.",
    "Apagar el móvil 2 horas para estar solo contigo.",
    "Un baile lento juntos en medio de la habitación.",
    "Que te susurre al oído algo muy sucio y picante.",
    "Un paseo romántico cogidos de la mano.",
    "Que te traiga una merienda sorpresa.",
    "10 minutos de caricias intensas en el pelo.",
    "Un piropo sincero mirando fijo a los ojos.",
    "Elegir el tipo de comida que pedimos a domicilio.",
    "Que te haga cosquillas suaves en la espalda.",
    "Un beso húmedo en el cuello que te haga temblar.",
    "Escuchar una canción dedicada exclusivamente a ti.",
    "Una noche libre de cualquier preocupación o estrés.",
    "Un detalle tonto pero lindo traído de sorpresa.",
    "Un mordisquito suave en los labios cuando tú quieras.",
    "Que te lleve en brazos por la casa.",
    "Un masaje de pies cansados tras un día duro.",
    "Hacerte sonreír cuando estés de mal humor.",
    "Un 'Te amo' dicho al oído con la voz ronca.",
    "Tener el mando de la televisión toda la noche.",
    "Que cocine yo solito y lave los platos.",
    "Un beso sorpresa de película en la calle.",
    "Ponerme la ropa que a ti más te guste de mi armario.",
    "Un picnic rápido improvisado en el salón.",
    "Que te cuente un secreto que nunca le he dicho a nadie.",
    "Un baño o ducha juntos sin prisa.",
    "Que te haga cosquillitas para hacerte reír.",
    "Un masaje relajante con crema de buen olor.",
    "Cumplir un capricho tuyo durante el día de hoy.",
    "Un beso lento y dulce de 20 segundos.",
    "Una noche de juego picante donde tú pones las reglas.",
    "Que te lleve un café o té calentito a la mesa.",
    "Verte dormir un rato mientras te acaricio la mano.",
    "Que te diga 5 cosas que me encantan de tu físico.",
    "Que te diga 5 cosas que me encantan de tu forma de ser.",
    "Un paseo nocturno para ver las estrellas juntos.",
    "Una foto romántica de los dos subida a redes.",
    "Una sesión de mimos intensos en el sofá.",
    "Traerte una chuche o chocolate que te guste.",
    "Un beso juguetón en la nariz o la mejilla.",
    "Que te cante un trozo de canción al oído.",
    "Decidir qué comemos hoy sin discusiones.",
    "Un masaje express de hombros mientras estudias o trabajas.",
    "Ver una peli de tu género favorito.",
    "Que te rasque la espalda hasta que te quedes frita.",
    "Un abrazo súper apretado que te quite el aire.",
    "Que te compre tu bebida favorita.",
    "Un beso robado en un sitio público.",
    "Decidir la música que suena en el coche.",
    "Que te pida perdón con un postre delicioso.",
    "Una noche entera dormido abrazado a ti.",
    "Un guiño de ojo y una sonrisa picante a lo lejos.",
    "Que te prepare una taza de chocolate caliente.",
    "Un juego de miradas sin hablar durante 1 minuto.",
    "Que te lleve la manta si tienes frío.",
    "Un beso suave en cada párpado.",
    "Cumplir un reto que tú me pongas ahora mismo.",
    "Que te diga lo mucho que te amo frente a todos.",
    "Un masaje de manos súper relajante.",
    "Un piropo atrevido que te ponga roja.",
    "Una tarde libre para que descanses mientras me encargo de todo.",
    "Un ataque de cosquillas suave hasta que te rindas.",
    "Un beso picante rozando los labios muy despacio.",
    "Que te prepare una bolsa de agua caliente o manta.",
    "Una sesión de fotos juntos donde salgas perfecta.",
    "Un masaje en el cuero cabelludo.",
    "Que te diga qué pensé la primera vez que te vi.",
    "Un beso largo al despedirnos.",
    "Que te escuche desahogarte todo el tiempo que necesites.",
    "Un regalo sorpresa en los próximos días.",
    "Elegir qué snack comemos viendo la peli.",
    "Un paseo juntos sin mirar la hora.",
    "Acompañarte a donde tengas que ir sin poner pegas.",
    "Un beso místico en la palma de la mano.",
    "Que te cuente una anécdota divertida mía de pequeño.",
    "Un abrazo sorpresa de la nada.",
    "Que te prepare la cena completa.",
    "Un piropo en voz alta por la calle.",
    "Un beso en la barbilla y en la nariz.",
    "Ver el atardecer juntos en un banco.",
    "Que te agarre de la cintura y te pegue a mí.",
    "Un juego de acariciar la frente hasta que te duermas.",
    "Traerte tu comida preferida de sorpresa.",
    "Un beso cargado de mucho amor.",
    "Decir en voz alta: 'Tengo a la novia más guapa del mundo'.",
    "Un cupón comodín: ¡Tú pides lo que quieras y yo cumplo!"
];

function getRandomDatePlan() {
    const display = document.getElementById("date-coupon-display");
    const index = Math.floor(Math.random() * planesCitas.length);
    const randomPlan = planesCitas[index];
    display.innerHTML = `<h3 style="color: #a29bfe; margin-bottom: 8px;">PLAN DE CITA #${index + 1} de 100 📍</h3><p style="font-size: 1.1rem; font-weight: bold; color: var(--dark-purple);">${randomPlan}</p>`;
    launchConfetti();
}

function getRandomCoupon() {
    const display = document.getElementById("date-coupon-display");
    const index = Math.floor(Math.random() * cuponesVales.length);
    const randomCoupon = cuponesVales[index];
    display.innerHTML = `<h3 style="color: #ff7675; margin-bottom: 8px;">CUPÓN CANJEABLE #${index + 1} de 100 🎟️</h3><p style="font-size: 1.1rem; font-weight: bold; color: var(--dark-purple);">${randomCoupon}</p>`;
    launchConfetti();
}

// --- TRES EN RAYA ---
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
        launchConfetti();
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

// --- TRIVIAL ---
const questions = [
    { question: "¿Dónde fuimos la primera vez que quedamos a solas?", options: ["Al cine", "A tomar un café", "A dar un paseo por el parque", "A cenar"], answer: 2 },
    { question: "¿Qué es lo primero que pensé cuando te vi?", options: ["¡Qué bajita es!", "Madre mía, qué guapa", "Se me va a caer la baba", "Qué buen rollo transmite"], answer: 1 },
    { question: "¿Cuál es una de nuestras manías o costumbres más graciosas?", options: ["Dormir abrazados", "Mordernos o hacernos bromas constantes", "Ver pelis sin enterarnos", "Comer chuches a escondidas"], answer: 1 },
    { question: "¿Quién suele tardar más tiempo en decidir qué peli ver?", options: ["Tú, tardas la vida entera", "Yo, que soy un indeciso", "Los dos a la vez", "Ninguno"], answer: 0 },
    { question: "¿Cuál fue el regalo más especial que te he hecho?", options: ["La camisetita", "El ramo de flores", "Una carta gigante", "Cualquier detalle"], answer: 0 },
    { question: "Si tuviéramos que hacer un viaje improvisado ahora, ¿a dónde iríamos?", options: ["A la playa", "A una cabaña perdida en la montaña", "A un parque de atracciones", "A Europa"], answer: 1 },
    { question: "¿Qué canción nos pega más como 'nuestra canción'?", options: ["Una de reggaeton", "Aire de Lucho RK", "Una del Atleti", "La que suena de fondo"], answer: 1 },
    { question: "¿Cómo suelo llamarte más cariñosamente a solas?", options: ["Mi niña", "Morrr", "Preciosa", "Todas las anteriores es correcta"], answer: 3 },
    { question: "¿Nuestro plan favorito para un domingo perezoso?", options: ["Quedarnos en la cama todo el día viendo pelis", "Salir a tomar chocolate", "Hacer maratón de juegos", "Dormir acurrucados"], answer: 0 },
    { question: "¿Quién cae rendido y se duerme antes viendo una serie?", options: ["Tú, te duermes enseguida", "Yo, que caigo frito", "Los dos a la vez", "Ninguno"], answer: 0 },
    { question: "¿Qué es lo que más te repito sobre lo guapa que eres?", options: ["Que eres perfecta para mí", "Que no pienses mal de tu físico", "Que me tienes loco", "Todas son ciertas"], answer: 3 },
    { question: "¿Qué fecha tan señalada estamos a punto de celebrar?", options: ["El 7 de noviembre", "Nuestro aniversario exacto", "El día que nos conocimos", "Nuestra primera escapada"], answer: 0 }
];
let currentQuestion = 0;

function loadQuestion() {
    const container = document.getElementById("question-container");
    if (!container) return;
    if (currentQuestion >= questions.length) {
        container.innerHTML = "<h3>¡Has acertado todas! 🎉</h3><p>Estás un pasito más cerca de la sorpresa final...</p>";
        launchConfetti();
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

// --- VERDAD O RETO ---
const verdades = [
    "¿Cuál es tu parte favorita de mi cuerpo? 😏", "¿En qué momento exacto te diste cuenta de que te gustaba?",
    "¿Qué es lo más atrevido que has pensado hacer conmigo? 🔥", "¿Qué ropa mía te gusta más cómo me queda?",
    "Del 1 al 10, ¿cuánto de nervioso te pongo cuando te miro fijamente?", "¿Qué es lo primero que miras de mí cuando me cambio?",
    "¿En qué lugar, que no sea una cama, te gustaría que nos liáramos? 🤫", "¿Cuál es el mensaje que más nerviosa te ha puesto?",
    "Del 1 al 10, ¿cuántas ganas tenías de besarme en la primera cita?", "¿Qué hago sin darme cuenta que más te pone?",
    "Si tuviéramos un finde solos en una cabaña, ¿qué no podría faltar?", "¿Te has imaginado cómo seríamos viviendo juntos?",
    "¿Qué parte de tu cuerpo te gustaría que besara más a menudo? 😈", "¿Cuál es tu recuerdo más 'caliente' de los dos?",
    "Si esta noche solo pudieras tocarme con una mano, ¿dónde la pondrías?", "¿Cuál crees que es tu mayor arma de seducción?",
    "Si te concediera un deseo ahora mismo, ¿cuál sería? ✨", "¿Qué fantasía inconfesable te gustaría cumplir conmigo?"
];

const retos = [
    "Dame un beso apasionado de 10 segundos donde tú elijas. 🔥", "Hazme un masaje en el cuello durante 2 minutos. 💆‍♀️",
    "Susúrrame al oído la fantasía más secreta que tengas. 🤫", "Tienes que darme besos por el cuello hasta que te diga. 😈",
    "Déjame que te dé un beso en tu zona más sensible.", "Baila pegada a mí durante 30 segundos sin música.",
    "Dame un beso de película de 15 segundos sin usar las manos.", "Susúrrame al oído con voz sugerente qué quieres que pase.",
    "Quítate una prenda de ropa (¡y yo me quito otra!). 🥵", "Déjame vendarte los ojos y adivina con qué te rozo.",
    "Hazme un chupetón o marca suave donde nadie lo vea. 🧛‍♀️", "Muerde mi labio inferior suavemente 5 segundos."
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

// --- CARTA SECRETA ---
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
            launchConfetti();
        }, 300);
    }
}

// --- MEMORY GAME ---
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
        card.innerHTML = `<div class="front">${emoji}</div><div class="back"></div>`;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
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
                launchConfetti();
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

// --- SORPRESA FINAL (DESBLOQUEO CON EL 4) ---
function checkSecretCode() {
    const userInput = document.getElementById("secret-code-input").value.trim().toLowerCase();
    
    if (userInput === "4" || userInput === "cuatro") {
        alert("¡Código correcto, mi vida! Te amo 💘");
        launchConfetti();
        document.getElementById("lock-container").style.display = "none";
        document.getElementById("video-reveal-container").style.display = "block";
    } else {
        alert("Pista: Piensa en cuántos meses llevamos compartiendo momentos increíbles 😉");
    }
}

// --- CARGA INICIAL ---
window.onload = () => {
    createBoard();
    loadQuestion();
    initMemoryGame();
    updateLoveCounter();
    setInterval(updateLoveCounter, 60000);
};
