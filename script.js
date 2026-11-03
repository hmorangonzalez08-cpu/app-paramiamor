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

// --- CONTADOR DE TIEMPO (FECHA: 7 DE JULIO DE 2026) ---
const startDate = new Date(2026, 6, 7, 1, 0, 0);

function updateLoveCounter() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        document.getElementById("love-counter").innerText = "¡Empezamos hoy! ❤️";
        return;
    }

    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(daysTotal / 30.44);
    const days = Math.floor(daysTotal % 30.44);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const counterElement = document.getElementById("love-counter");
    if (counterElement) {
        counterElement.innerText = `${months} meses, ${days} días, ${hours}h y ${minutes}m ✨`;
    }
}

// --- 100 RAZONES POR LAS QUE TE AMO ---
const razones = [
    "1. Por cómo te ríes cuando te hago bromas tontas.", "2. Por la forma tan bonita en la que me miras.",
    "3. Porque me haces querer ser mejor persona.", "4. Por tus abrazos que me curan cualquier mal día.",
    "5. Por tu sonrisa, que ilumina cualquier lugar.", "6. Porque eres la mujer más hermosa que he visto.",
    "7. Por lo bien que nos entendemos solo mirándonos.", "8. Por la paz tan grande que siento contigo.",
    "9. Porque me encanta quedarme dormido a tu lado.", "10. Por cómo me buscas la mano por la calle.",
    "11. Por tus caricias suaves en la cara.", "12. Por todos los 'te amo' sinceros que nos decimos.",
    "13. Porque haces que los días lluviosos sean mágicos.", "14. Por tus besos con los que se me para el tiempo.",
    "15. Porque eres mi confidente y mi mejor amiga.", "16. Por cómo defiendes lo que quieres con pasión.",
    "17. Por tu voz dulce cuando tienes sueño.", "18. Porque a tu lado todo es divertido.",
    "19. Por cómo me cuidas cuando estoy abrumado.", "20. Por los mensajes bonitos de la nada.",
    "21. Porque eres única y no te cambiaría por nada.", "22. Por cómo se te frunce la cara al concentrarte.",
    "23. Por las locuras espontáneas que inventamos.", "24. Porque me haces sentir el chico más afortunado.",
    "25. Por tu olor que se me queda grabado.", "26. Por lo bien que te queda mi camiseta.",
    "27. Porque contigo puedo ser yo mismo al 100%.", "28. Por el apoyo tan grande que me das siempre.",
    "29. Por cómo me muerdes los labios suavemente.", "30. Porque juntos formamos un equipo invencible.",
    "31. Por lo linda que estás nada más despertarte.", "32. Por cada detalle que tienes sin esperar nada.",
    "33. Porque me encanta verte sonreír.", "34. Por el cosquilleo que siento cuando voy a verte.",
    "35. Por nuestras charlas profundas de madrugada.", "36. Porque tienes un corazón de oro puro.",
    "37. Por lo cariñosa y tierna que eres conmigo.", "38. Por lo sexy que te pones cuando nos arreglamos.",
    "39. Porque no imagino mi futuro sin ti.", "40. Por la manera en la que me sostienes.",
    "41. Por tus besos tiernos en la frente.", "42. Porque conviertes un domingo cualquiera en un planazo.",
    "43. Por la ilusión con la que me cuentas tus cosas.", "44. Por cómo te enfadas de broma para que te mime.",
    "45. Porque tus besos en el cuello me vuelven loco.", "46. Por cómo me escuchas con atención.",
    "47. Porque me fascina tu forma de ver la vida.", "48. Por las risas y cosquillas infinitas.",
    "49. Porque a tu lado el tiempo vuela.", "50. Por sacarme una sonrisa en los días difíciles.",
    "51. Por tus miradas pícaras impredecibles.", "52. Porque eres mi lugar seguro.",
    "53. Por cada paseo largo de la mano.", "54. Por lo bien que me sienta escucharte.",
    "55. Por tu valentía y tu gran fuerza.", "56. Porque amo ver tu carcajada franca.",
    "57. Por lo bien que encajan nuestras manos.", "58. Por tu lado divertido y gamberro.",
    "59. Porque me enamoras cada día más.", "60. Por tus roces disimulados que me aceleran.",
    "61. Por el brillo especial de tus ojos.", "62. Por nuestras bromas que solo entiendes tú.",
    "63. Porque contigo el silencio es cómodo.", "64. Por cómo me abrazas por la espalda.",
    "65. Por la forma tan dulce de decir mi nombre.", "66. Porque eres la mejor compañera de viajes.",
    "67. Por los besos sorpresa en cualquier sitio.", "68. Por la infinita paciencia que me tienes.",
    "69. Por pillarme mirándote como un tonto.", "70. Por la pasión con la que nos queremos.",
    "71. Por lo hermosa que sonríes con flores.", "72. Por la entrega que le pones a todo.",
    "73. Por cómo te acurrucas en mi pecho.", "74. Por estar preciosa aun estando despeinada.",
    "75. Porque me das la fuerza que me falta.", "76. Por calmar mi mente cuando me estreso.",
    "77. Por tu sinceridad sin filtros.", "78. Porque aprendo contigo cada día.",
    "79. Por el flow único que tienes al bailar.", "80. Por tu lado ultra romántico.",
    "81. Por tus comentarios que me hacen reír.", "82. Porque me haces sentir muy amado.",
    "83. Por las ganas constantes de abrazarte.", "84. Por lo leal que eres con los tuyos.",
    "85. Porque tus labios son mi refugio.", "86. Por construir esta historia paso a paso.",
    "87. Por hacer que me duela la tripa de reír.", "88. Porque traes pura magia a mi vida.",
    "89. Por tus abrazos fuertes de la nada.", "90. Por leerme la mente sin hablar.",
    "91. Porque vivir esto contigo es un regalo.", "92. Por lo sexy que eres en cualquier momento.",
    "93. Por la química brutal que nos conecta.", "94. Por sacarme sonrisas mirando al móvil.",
    "95. Por tu bondad y gran corazón.", "96. Por la complicidad tan bonita de estos meses.",
    "97. Porque contigo descubrí el amor verdadero.", "98. Por todo lo increíble que nos espera.",
    "99. Porque sencillamente eres Victoria.", "100. Porque te amo con todo mi corazón. ❤️"
];

function getRandomReason() {
    const display = document.getElementById("reason-display");
    const randomReason = razones[Math.floor(Math.random() * razones.length)];
    display.innerHTML = `<p style="font-size: 1.2rem; font-weight: bold; color: var(--dark-purple);">${randomReason}</p>`;
    launchConfetti();
}

// --- 100 CITAS A CIEGAS + 100 CUPONES CANJEABLES (200 OPCIONES) ---
const planesCitas = [
    "🍕 Noche de pizza casera, pijama y maratón de películas.",
    "🍷 Cena romántica a la luz de las velas (cocino yo).",
    "🌅 Ir a ver el atardecer a un sitio bonito con nuestra música.",
    "💆‍♀️ Sesión VIP de masajes con música relajante.",
    "🍿 Noche de cine con palomitas, chuches y besos.",
    "🛣️ Escapada improvisada en coche a un sitio cercano.",
    "🍦 Paseo nocturno tomándonos un helado.",
    "🍳 Desayuno especial preparado en la cama un domingo.",
    "🎳 Tarde de juegos para ver quién paga las cañas.",
    "🧺 Picnic romántico al aire libre en un parque.",
    "🛋️ Tarde entera de mimos, abrazos y siesta infinita.",
    "🍹 Noche de cócteles y vestirnos elegantes para salir.",
    "🛍️ Tarde de compras donde yo llevo las bolsas.",
    "☕ Ir a una cafetería bonita a charlar horas.",
    "🎶 Escuchar nuestro disco favorito a oscuras tumbados.",
    "🌙 Noche de miradas a las estrellas alejados de la ciudad.",
    "🚗 Cita en el coche hablando de todo con la música bajita.",
    "🎲 Noche de juegos de mesa en casa con premios picantes.",
    "📸 Maratón de hacernos fotos divertidas en la calle.",
    "🥞 Preparar tortitas juntos para merendar.",
    "🏰 Visitar un pueblo o rincón histórico que no conozcamos.",
    "🥐 Comprar churros o cruasanes calentitos recién hechos.",
    "🍔 Probar la mejor hamburguesa de la ciudad juntos.",
    "🛁 Baño relajante con espumita y música chill.",
    "🍫 Tarde de peli con manta y chocolate caliente.",
    "🌲 Paseo por el campo o la montaña a respirar aire puro.",
    "🚲 Alquilar bicicletas o patinetes y hacer una ruta.",
    "🎡 Ir a una feria o parque de atracciones a subir a todo.",
    "🎳 Tarde de recreativos a jugar a las maquinitas.",
    "🍣 Pedir comida a domicilio y comer en el suelo del salón.",
    "🌮 Noche temática de comida mexicana en casa.",
    "🍨 Ir a probar un postre gigante a una merienda.",
    "🏙️ Ir a un mirador alto a ver las luces de la ciudad.",
    "🎶 Cantar a pleno pulmón nuestras canciones en el coche.",
    "🛋️ Construir un fuerte de mantas en el salón como niños.",
    "🍷 Salir a tomar unos vinos o cañas por una zona bonita.",
    "🖼️ Visitar una exposición o museo curioso juntos.",
    "🎁 Ir a una tienda y comprarnos un detalle secreto.",
    "🍕 Hacer pizza desde cero amasándola nosotros.",
    "📖 Leernos cuentos o cartas bonitas a la luz de la vela.",
    "🍿 Ver una peli de miedo para tener excusa de abrazarnos.",
    "🍓 Comprar fresas con chocolate y comérnoslas a besos.",
    "💃 Bailar una canción lenta pegados en medio del salón.",
    "🌭 Cita de comida rápida improvisada a altas horas.",
    "🌅 Ver amanecer juntos tras una noche hablando.",
    "🥐 Salir a desayunar pronto un día de diario juntos.",
    "🎯 Ir a tirar dardos o jugar al billar.",
    "🍹 Inventar un cóctel propio con nuestro nombre.",
    "🛋️ Tarde de mimos viendo nuestras fotos desde que nos conocemos.",
    "💌 Escribirnos una carta rápida de 5 minutos y leerla en alto.",
    "🍦 Cita de ir probando helados de sabores raros.",
    "🛏️ Quedarnos todo el día en pijama sin mirar el reloj.",
    "🍕 Salir a cenar a un sitio que elijas tú al 100%.",
    "🥐 Ir a por pan dulce recien horneado para desayunar.",
    "🚗 Ruta en coche sin destino fijo doblando esquinas al azar.",
    "🍿 Noche de saga completa de pelis con snacks infinitos.",
    "☕ Tarde de café helado y charla en una terraza.",
    "🎶 Crear una playlist conjunta entre los dos.",
    "🍔 Probar un sitio nuevo que hayamos visto en Instagram.",
    "🛋️ Masaje de pies y piernas cansadas tras un día largo.",
    "🍹 Salir a tomar un mojito en una terraza chula.",
    "🍓 Preparar un batido casero de frutas juntos.",
    "🌌 Salir a ver la luna llena a un sitio tranquilo.",
    "🥞 Hacer crepes dulces o salados en la cocina.",
    "🛍️ Probarte ropa rara en una tienda y hacer fotos de risa.",
    "🍿 Maratón de vuestro programa o serie favorita.",
    "🚗 Cita en el autocine o ver una peli en el portátil en el coche.",
    "☕ Cita de café para ponernos al día como si fuera la primera vez.",
    "🍕 Cita de pizza fría al día siguiente para desayunar.",
    "🍝 Cocinar pasta italiana casera escuchando música de fondo.",
    "🍷 Probar un vino diferente que no hayamos tomado nunca.",
    "🍩 Comprar una caja de donuts y comérnosla entera.",
    "🛋️ Tumbarte en mi regazo mientras te acaricio el pelo.",
    "🍫 Comer fondu de chocolate con trozos de fruta.",
    "🌅 Subir a un sitio alto a ver caer la tarde.",
    "🥐 Cita para buscar el mejor cruasán de la ciudad.",
    "🍔 Cita de cenar hamburguesas chorreando queso.",
    "🚗 Conducir de noche por la ciudad con las ventanas bajadas.",
    "🍿 Noche de ver pelis infantiles o de nuestra infancia.",
    "🛋️ Tarde de abrazos con música acústica suave.",
    "🍓 Comprar fruta de temporada e inventar un postre.",
    "🥞 Cita de tortitas con sirope hasta arriba.",
    "🍕 Cita de pizza redonda cortada a trozos desiguales.",
    "🍷 Cita de picoteo con queso y embutido en casa.",
    "☕ Tarde de té helado o café en un sitio tranquilo.",
    "🎶 Bailar en pijama por el salón sin vergüenza.",
    "🍿 Ver una peli cursi y burlarnos con amor.",
    "🛋️ Tumbarse a no hacer nada absolutamente juntos.",
    "🚗 Ir a lavar el coche juntos y terminar mojados.",
    "🥐 Comprar bollería recién hecha un sábado por la mañana.",
    "🍔 Cita para ver cuál de los dos come más rápido.",
    "🍷 Cita de copas tranquilas hablando de nuestros planes.",
    "🍕 Cita de pizza con los bordes rellenos de queso.",
    "🍿 Cita de palomitas saladas mezcladas con chocolate.",
    "☕ Cita de café rápido antes de empezar el día.",
    "🛋️ Hacer un refugio con cojines en la cama.",
    "🍓 Cita de comer fresas a mordiscos compartidos.",
    "🥞 Cita para cocinar waffles con helado por encima.",
    "🍕 Cita de pizza cuadrada hecha en bandeja de horno.",
    "❤️ Cita sorpresa organizada 100% por mí de principio a fin."
];

const cuponesVales = [
    "🎟️ VALE POR: Un beso apasionado de 10 segundos en cualquier momento.",
    "🎟️ VALE POR: Un masaje completo de 15 minutos en espalda o piernas.",
    "🎟️ VALE POR: Tener la razón en una discusión sin rechistar.",
    "🎟️ VALE POR: Elegir la película o serie que vamos a ver hoy.",
    "🎟️ VALE POR: Que te prepare tu plato o postre favorito.",
    "🎟️ VALE POR: Un abrazo gigante de 2 minutos sin soltarte.",
    "🎟️ VALE POR: Salir a cenar a donde tú elijas hoy mismo.",
    "🎟️ VALE POR: Un desayuno completo servido en la cama.",
    "🎟️ VALE POR: Un perdón instantáneo por una pequeña metedura de pata.",
    "🎟️ VALE POR: Una tarde entera de mimos y mimos sin parar.",
    "🎟️ VALE POR: Que te haga la cama o te ayude en lo que necesites.",
    "🎟️ VALE POR: Un ataque de besos sorpresa en la cara.",
    "🎟️ VALE POR: Decidir el plan completo de este fin de semana.",
    "🎟️ VALE POR: Un helado o dulce a tu elección pagado por mí.",
    "🎟️ VALE POR: Apagar el móvil 2 horas para estar solo contigo.",
    "🎟️ VALE POR: Un baile lento juntos en medio de la habitación.",
    "🎟️ VALE POR: Que te susurre al oído algo muy sucio y picante.",
    "🎟️ VALE POR: Un paseo romántico cogidos de la mano.",
    "🎟️ VALE POR: Que te traiga una merienda sorpresa.",
    "🎟️ VALE POR: 10 minutos de caricias intensas en el pelo.",
    "🎟️ VALE POR: Un piropo sincero mirando fijo a los ojos.",
    "🎟️ VALE POR: Elegir el tipo de comida que pedimos a domicilio.",
    "🎟️ VALE POR: Que te haga cosquillas suaves en la espalda.",
    "🎟️ VALE POR: Un beso húmedo en el cuello que te haga temblar.",
    "🎟️ VALE POR: Escuchar una canción dedicada exclusivamente a ti.",
    "🎟️ VALE POR: Una noche libre de cualquier preocupación o estrés.",
    "🎟️ VALE POR: Un detalle tonto pero lindo traído de sorpresa.",
    "🎟️ VALE POR: Un mordisquito suave en los labios cuando tú quieras.",
    "🎟️ VALE POR: Que te lleve en brazos por la casa.",
    "🎟️ VALE POR: Un masaje de pies cansados tras un día duro.",
    "🎟️ VALE POR: Hacerte sonreír cuando estés de mal humor.",
    "🎟️ VALE POR: Un 'Te amo' dicho al oído con la voz ronca.",
    "🎟️ VALE POR: Tener el mando de la televisión toda la noche.",
    "🎟️ VALE POR: Que cocine yo solito y lave los platos.",
    "🎟️ VALE POR: Un beso sorpresa de película en la calle.",
    "🎟️ VALE POR: Ponerme la ropa que a ti más te guste de mi armario.",
    "🎟️ VALE POR: Un picnic rápido improvisado en el salón.",
    "🎟️ VALE POR: Que te cuente un secreto que nunca le he dicho a nadie.",
    "🎟️ VALE POR: Un baño o ducha juntos sin prisa.",
    "🎟️ VALE POR: Que te haga cosquillitas para hacerte reír.",
    "🎟️ VALE POR: Un masaje relajante con crema de buen olor.",
    "🎟️ VALE POR: Cumplir un capricho tuyo durante el día de hoy.",
    "🎟️ VALE POR: Un beso lento y dulce de 20 segundos.",
    "🎟️ VALE POR: Una noche de juego picante donde tú pones las reglas.",
    "🎟️ VALE POR: Que te lleve un café o té calentito a la mesa.",
    "🎟️ VALE POR: Verte dormir un rato mientras te acaricio la mano.",
    "🎟️ VALE POR: Que te diga 5 cosas que me encantan de tu físico.",
    "🎟️ VALE POR: Que te diga 5 cosas que me encantan de tu forma de ser.",
    "🎟️ VALE POR: Un paseo nocturno para ver las estrellas juntos.",
    "🎟️ VALE POR: Una foto romántica de los dos subida a redes.",
    "🎟️ VALE POR: Una sesión de mimos intensos en el sofá.",
    "🎟️ VALE POR: Traerte una chuche o chocolate que te guste.",
    "🎟️ VALE POR: Un beso juguetón en la nariz o la mejilla.",
    "🎟️ VALE POR: Que te cante un trozo de canción al oído.",
    "🎟️ VALE POR: Decidir qué comemos hoy sin discusiones.",
    "🎟️ VALE POR: Un masaje express de hombros mientras estudias o trabajas.",
    "🎟️ VALE POR: Ver una peli de tu género favorito.",
    "🎟️ VALE POR: Que te rasque la espalda hasta que te quedes frita.",
    "🎟️ VALE POR: Un abrazo súper apretado que te quite el aire.",
    "🎟️ VALE POR: Que te compre tu bebida favorita.",
    "🎟️ VALE POR: Un beso robado en un sitio público.",
    "🎟️ VALE POR: Decidir la música que suena en el coche.",
    "🎟️ VALE POR: Que te pida perdón con un postre delicioso.",
    "🎟️ VALE POR: Una noche entera dormido abrazado a ti.",
    "🎟️ VALE POR: Un guiño de ojo y una sonrisa picante a lo lejos.",
    "🎟️ VALE POR: Que te prepare una taza de chocolate caliente.",
    "🎟️ VALE POR: Un juego de miradas sin hablar durante 1 minuto.",
    "🎟️ VALE POR: Que te lleve la manta si tienes frío.",
    "🎟️ VALE POR: Un beso suave en cada párpado.",
    "🎟️ VALE POR: Cumplir un reto que tú me pongas ahora mismo.",
    "🎟️ VALE POR: Que te diga lo mucho que te amo frente a todos.",
    "🎟️ VALE POR: Un masaje de manos súper relajante.",
    "🎟️ VALE POR: Un piropo atrevido que te ponga roja.",
    "🎟️ VALE POR: Una tarde libre para que descanses mientras me encargo de todo.",
    "🎟️ VALE POR: Un ataque de cosquillas suave hasta que te rindas.",
    "🎟️ VALE POR: Un beso picante rozando los labios muy despacio.",
    "🎟️ VALE POR: Que te prepare una bolsa de agua caliente o manta.",
    "🎟️ VALE POR: Una sesión de fotos juntos donde salgas perfecta.",
    "🎟️ VALE POR: Un masaje en el cuero cabelludo.",
    "🎟️ VALE POR: Que te diga qué pensé la primera vez que te vi.",
    "🎟️ VALE POR: Un beso largo al despedirnos.",
    "🎟️ VALE POR: Que te escuche desahogarte todo el tiempo que necesites.",
    "🎟️ VALE POR: Un regalo sorpresa en los próximos días.",
    "🎟️ VALE POR: Elegir qué snack comemos viendo la peli.",
    "🎟️ VALE POR: Un paseo juntos sin mirar la hora.",
    "🎟️ VALE POR: Acompañarte a donde tengas que ir sin poner pegas.",
    "🎟️ VALE POR: Un beso místico en la palma de la mano.",
    "🎟️ VALE POR: Que te cuente una anécdota divertida mía de pequeño.",
    "🎟️ VALE POR: Un abrazo sorpresa de la nada.",
    "🎟️ VALE POR: Que te prepare la cena completa.",
    "🎟️ VALE POR: Un piropo en voz alta por la calle.",
    "🎟️ VALE POR: Un beso en la barbilla y en la nariz.",
    "🎟️ VALE POR: Ver el atardecer juntos en un banco.",
    "🎟️ VALE POR: Que te agarre de la cintura y te pegue a mí.",
    "🎟️ VALE POR: Un juego de acariciar la frente hasta que te duermas.",
    "🎟️ VALE POR: Traerte tu comida preferida de sorpresa.",
    "🎟️ VALE POR: Un beso cargado de mucho amor.",
    "🎟️ VALE POR: Decir en voz alta: 'Tengo a la novia más guapa del mundo'.",
    "🎟️ VALE POR: Un cupón comodín: ¡Tú pides lo que quieras y yo cumplo!"
];

function getRandomDatePlan() {
    const display = document.getElementById("date-coupon-display");
    const randomPlan = planesCitas[Math.floor(Math.random() * planesCitas.length)];
    display.innerHTML = `<h3 style="color: #a29bfe; margin-bottom: 8px;">PLAN DE CITA 📍</h3><p style="font-size: 1.2rem; font-weight: bold; color: var(--dark-purple);">${randomPlan}</p>`;
    launchConfetti();
}

function getRandomCoupon() {
    const display = document.getElementById("date-coupon-display");
    const randomCoupon = cuponesVales[Math.floor(Math.random() * cuponesVales.length)];
    display.innerHTML = `<h3 style="color: #ff7675; margin-bottom: 8px;">CUPÓN CANJEABLE 🎟️</h3><p style="font-size: 1.2rem; font-weight: bold; color: var(--dark-purple);">${randomCoupon}</p>`;
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
