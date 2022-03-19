// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "jgg00085redujaenes";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Estás en casa viciándote como siempre...</h1>\
        <img src='media/img/buenasnoches.png' class='float_center' style='width: 500px;'>\
        <br/>\
        <p>\"Buenas nocheS! I understand you are here on the behalf of Mr. Rosenberg. I hope any recent... *BOOM*</p>\
        \
        <p>Yo: Buah, otra vez se ha cerrado el juego este. Desde que instalé la versión definitiva del GTA Trilogy todo son problemas, macho.\
        Ni parches, ni nada, no hay manera de hacer que vaya bien este juego. 60€ para nada, llego a saberlo y me quedo jugando a los originales...</p>\
        \
        <p class='transient'><a href='movil'>Cierras el juego</a></p>",
        {
            heading: "El vicio"
        }
    ),
    movil: new undum.SimpleSituation(
        "<p>Dejas de lado el ordenador, y te dispones a mirar lo que sucede en el mundo.</p>\
        <p>Vamos, que desbloqueas tu FlyPhone 14 Pro MiniMax y abres Twitter e Instagram, en el que pierdes más de media hora mirando las tonterías de siempre, como\
        las encuestas, viendo si sube o baja la intención de voto de según qué bloques en una provincia que no sabes ni situar en un mapa, o mirando vídeos de perritos y comida.</p>\
        <p>En todo este tiempo no te salta ningún mensaje, ni siquiera de tu novia, que está de viaje en Madrid y, cuando te das cuenta, ves que el tiempo se te ha echado encima, pues habías\
        quedado para ver la obra de Goyo Jiménez, el de los americanos, en el Infanta Leonor. </p>\
        <p>Así que te dispones a <a href='./cogercosas'>coger las cosas</a> o <a href='finalcallesinnada'>sales directamente sin nada</a>.</p>",
        {
            heading: "Mirando el FlyPhone",
            actions: {
                "cogercosas": function (character, system, to) {
                    system.write("<p>Coges el móvil, las llaves, la cartera y tu chaqueta y te dispones a salir a la calle.</p>\
                    <p class='transient'><a href='calle'>Sales a la calle</a></p>");
                    system.setQuality("llaves", 1);
                    system.setQuality("cartera", 1);
                    system.setQuality("chaqueta", 1);
                }
            }
        }
    ),
    calle: new undum.SimpleSituation(
        "<h1>Se te lía en la calle</h1>\
        <p>Ya en la calle, recorres las estrechas calles de Jaén en dirección al Teatro Infanta Leonor cuando, por azares de la vida, \
        se desata una fuerte lluvia para lo cual, y por falta de previsión tuya, no habías consultado en el AEMET y, por tanto, no tienes un paragüas.</p>\
        <p>Por tanto, decides <a href='./correralteatro'>correr hacia el teatro</a> o <a href='./volveraporparaguas'>volver a casa rápidamente </a> a por un paragüas...</p>",
        {
            heading: "Mirando el FlyPhone",
            actions: {
                "correralteatro": function (character, system, to) {
                    system.write("<p>Corriendo al teatro, llegas empapado y tu entrada se moja, imposibilitando que el lector pueda verificar tu pase.</p>\
                    <p class='transient'>Así que optas por <a href='espectaculo'>aguantarte</a> o <a href='espectaculo'>colarte</a></p>");
                },
                "volveraporparaguas": function (character, system, to) {
                    system.write("<p>Vuelves rápidamente a tu casa sin mojarte aunque, debido a las fuertes lluvias, quedas atrapado en el ascensor por un breve corte de luz.</p>\
                    <p>Por fortuna, dura poco tiempo, aunque para cuando vuelves a estar en la calle, el tiempo ya se te ha echado encima</p>\
                    <p class='transient'>Así que optas por <a href='espectaculo'>aguantarte</a> o <a href='espectaculo'>probar suerte</a> con la puerta de salida de emergencia</p>");
                }
            }
        }

    ),
    espectaculo: new undum.SimpleSituation(
        "<p><b>Un encargado</b>: ¡Eh tú!.... Ostras, tío, ¿que haces por aquí?</p>\
        <p>Yo: Eh, Paco, ¿qué pasa tío?, pues nada, que venía a ver al de los americanos, y entre la lluvia y todo pues no he podido entrar...</p>\
        <p>Paco,el encargado: A ver, déjame que saque mi FlyPhone con el lector de la empresa y dame tu entrada.</p>\
        <p>Yo: toma</p>\
        <p>Paco, el encargado: Un momento... Vale, anfiteatro B, fila 7, asiento 26. Hmm... vale, vamos para adentro</p>\
        <br/>\
        <p class='transient'><a href='espectaculopartedos'>Entrar a ver el monólogo</a></p>"
    ),
    espectaculopartedos: new undum.SimpleSituation(
        "<h1>La decepción</h1>\
        <img src='media/img/goyojimenez.jpg' class='float_center' style='width: 500px;'>\
           <iframe width='100%' height='400' src='https://www.youtube.com/embed/dkWrx1gizOw' \
           title='YouTube video player' \
           frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' \
           allowfullscreen></iframe>\
        <p class='transient'>Tras tanto lío, acabas sentado detrás de un cabezón que no te deja ver apenas, y flanqueado a ambos lados por un señor mayor que no parece entender el monólogo\
        y la típica parejita que, para a ver venido a lo que están haciendo, mejor haber pillado una habitación de hotel...</p>\
        <p> Al final, optas por <a href='./aguantar'>aguantarte</a> e intentar disfrutar el monólogo en la medida de lo posible, o por <a href='salirporpatas'>irte antes de tiempo</a></p>",
        {
            actions: {
                "aguantar": function (character, system, to) {
                    system.write("<p>Aguantas como bien puedes la hora y media de espectáculo que queda.</p>\
                    <p class='transient'>Por fin termina y <a href='salirporpatas'>sales rápidamente del lugar</a>.</p>");
                }
            }
        }

    ),
    salirporpatas: new undum.SimpleSituation(
        "<h1>De vuelta a casa</h1>\
        <p>Ya de vuelta a casa, por fortuna sin lluvia, disfrutas de un paseo relajado, aunque notando algo de frío, pues la noche ya ha caído. Sin embargo, \
        disfrutas del inconfundible olor a petricor.</p>\
        <p>Pero, por si creías que obas a acabar bien el día, casi al llegar a tu casa te das cuenta de que la chaqueta y, en consecuencia, las llaves, se quedaron en el teatro, ya cerrado.</p>\
        <p>Entonces, aparece Paqui, la vecina cotilla de enfrente con su compra, o cotilleo, en el súper de última hora y, apiadándose de su joven vecino, te ofrece cobijo en su casa, \
        al cual decides <a href='./aceptarcotilla'>aceptar su invitación</a> o <a href='./rechazarcotilla'>rechazarla</a>.</p>",
        {
            actions: {
                "aceptarcotilla": function (character, system, to) {
                    system.write("<p>Terminas el día en el sofá de tu vecina cenando sopa de bote mientras se queda por todo y te sonsaca temas familiares. Poco más tarde vuelve tu familia y\
                    <a href='finaltrasteatro'>vuelves a casa</a>.</p>");
                },
                "rechazarcotilla": function (character, system, to) {
                    system.write("<p>Te quedas esperando cual mendigo en el portal de casa, hasta que aparece tu familia y <a href='finaltrasteatro'>vuelves a casa</a>.</p>");
                }
            }
        }
    ),
    finaltrasteatro: new undum.SimpleSituation(
        "<h1>FIN</h1>\
        <p>De vuelta a tu cueva, te sientas en el PC y vuelves a abrir el \"bendito\" Grand Theft Auto Vice City.</p>"
    ),
    finalcallesinnada: new undum.SimpleSituation(
        "<p>Sales a la calle sin llevarte absolutamente nada, no sabes donde están tus amigos, ni puedes volver a casa pues te dejaste las llaves.</p>\
        <p>Para más inri, hace tanto frío que acabas con hipotermia tirado en un banco, esperando varias horas hasta que vuelve tu familia y puedes volver a entrar a casa.</p>\
        <p>FIN</p>"
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    llaves: new undum.OnOffQuality(
        "Llaves", {priority:"0001", group:'objetos', onDisplay:"&#10003;"},),
    cartera: new undum.OnOffQuality(
        "Cartera", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}),
    chaqueta: new undum.OnOffQuality(
        "Chaqueta", {priority:"0003", group:'objetos', onDisplay:"&#10003;"})
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    objetos: new undum.QualityGroup('Objetos', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.llaves = 0;
    character.qualities.cartera = 0;
    character.qualities.chaqueta = 0;
    system.setCharacterText("<p>¡Vas a ver al de los americanos!</p>");
};
