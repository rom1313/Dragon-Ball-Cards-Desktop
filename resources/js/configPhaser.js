const config = {
    width: 1366,
    height: 768,
    pixelArt: false,
    scene: [Acceuil, Combat],
    type: Phaser.AUTO,
    resolution: window.devicePixelRatio,
    parent: "jeu",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    },
    scale: {
        parent: "jeu",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

var game = new Phaser.Game(config);
console.log('ok !!')

