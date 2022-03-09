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
        <p>Vamos, que desbloqueas tu FlyPhone 14 Pro MiniMax y abres Twitter</p>\
        <p class='transient'><a href='calle'>Sales a la calle</a></p>",
        {
            heading: "Mirando el FlyPhone"
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
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};