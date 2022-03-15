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
        <img src='media/games/tutorial/woodcut1.png' class='float_center'>\
        <p>\"Buenas nocheS! I've heard you come in the behalf of Mr. Rosenberg. I hope his... *BOOM*</p>\
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
        las encuestas viendo si sube o baja la intención de voto de según que bloques en una provincia que no sabes ni situar en un mapa o mirando vídeos de perritos y comida.</p>\
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
        "<p>Calle</p>\
        <p class='transient'><a href='espectaculo'>Entra al teatro</a></p>"

    ),
    espectaculo: new undum.SimpleSituation(
        "<p>Espectáculo</p>\
        <p class='transient'><a href='casa'>Tira pa casa</a></p>"

    ),
    casa: new undum.SimpleSituation(
        "<p>Casa</p>\
        <p class='transient'><a href='fin'>Apaga la alarma</a></p>"

    ),
    fin: new undum.SimpleSituation(
        "<p>FIN</p>"

    ),
    finalcallesinnada: new undum.SimpleSituation(
        "<p>Sales a la calle sin llevarte absolutamente nada, no sabes donde están tus amigos, ni puedes volver a casa pues te dejaste las llaves.</p>\
        <p>Para más inri, hace tanto frío que acabas con hipotermia tirado en un banco</p>\
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
