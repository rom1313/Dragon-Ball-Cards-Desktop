let combat

class Combat extends Phaser.Scene {
    constructor() {
        super("Combat");
    }
    //--------------------------------------------------------------------------------------- PRELOAD

    preload() {
        combat = this;

        // JOUEUR
        // joueur.inventaire.push(objet);
        // joueur.inventaire.push(objet2);
        // PNJ
        /*     spriteennemi =this.load.image("dude", "/img/boy.png", { frameWidth: 48, frameHeight: 48 });
        // PARTICULE
        this.load.image("particule", "/img/glitter2.png", {
            frameWidth: 21,
            frameHeight: 21
        }); */
        // MAP
        this.load.image("mapimg2", "img/combat.png", {
            frameWidth: 1000,
            frameHeight: 500
        });
    }
    //------------------------------------------------------ CREATE
    create() {
        camera = this.cameras.main;
        camera.fadeIn(1500, 1);
        // CREATION MAP
        this.background = this.add
            .image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "mapimg2")
            .setOrigin(0.5, 0.5);
        this.background.displayWidth = this.sys.canvas.width;
        this.background.displayHeight = this.sys.canvas.height;
        // CREATION JOUEUR
        // HITBOX
        // this.background.setPipeline("Light2D");
        /* this.lights.enable(); */
        // this.lights.setAmbientColor(55, 55, 255);
        /* var spotlight = this.lights.addLight(300, 300, 1600).setIntensity(3);
        var spotlight2 = this.lights.addLight(1400, 200, 800).setIntensity(3);
        var spotlight3 = this.lights.addLight(690, 200, 800).setIntensity(3);
        var spotlight4 = this.lights.addLight(950, 300, 800).setIntensity(2); */
        // // CREATION PARTICULE
        this.input.on("pointermove", function (pointer) { });
        toucheclavier = this.input.keyboard.createCursorKeys();
        // -----------------------------CREATION ANIMATION
    }
    //-----------------------------------------------------------------------------------UPDATE
    update() {
        /*   if ($connecte === true) {
             
              hudcache = false;
  
              this.scene.start("Menuprincipal", "Acceuil");
          } */
    }
}
//--------------------------------------------------------------------------------
