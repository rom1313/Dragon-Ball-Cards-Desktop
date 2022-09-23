let acceuil
class Acceuil extends Phaser.Scene {
    constructor() {
        super("Acceuil");
    }
    //--------------------------------------------------------------------------------------- PRELOAD

    preload() {
        acceuil = this;

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
        this.load.image("mapimg", "img/home.webp", {
            frameWidth: 1000,
            frameHeight: 500
        });
    }
    //------------------------------------------------------ CREATE
    create() {
        // CREATION MAP
        this.background = this.add
            .image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "mapimg")
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
class Menuprincipal extends Phaser.Scene {
    constructor() {
        super("Menuprincipal");
    }
    //--------------------------------------------------------------------------------------- PRELOAD
    preload() {
        // JOUEUR
        // joueur.inventaire.push(objet);
        // joueur.inventaire.push(objet2);
        // PNJ
        /*  this.load.image("dude", "/img/boy.png", { frameWidth: 48, frameHeight: 48 });
        // PARTICULE
        this.load.image("particule", "/img/glitter2.png", {
            frameWidth: 21,
            frameHeight: 21
        }); */
        // MAP
        this.load.image("fondmenu", "img/session.png", {
            frameWidth: 1000,
            frameHeight: 500
        });
        this.load.image("fondmenu2", "img/session2.png", {
            frameWidth: 1000,
            frameHeight: 500
        });
        this.load.spritesheet("ildaa", "/img/ildaa.png", {
            frameWidth: 528,
            frameHeight: 757
        });
        this.load.spritesheet("sonde", "/img/sonde.png", {
            frameWidth: 120,
            frameHeight: 120
        });
    }

    //------------------------------------------------------ CREATE
    create() {
        spritesonde = this.physics.add.sprite(1150, 300, "sonde");
        spritesonde.setSize(89, 92, true);
        spritesonde.setDepth(2);
        $spriteildaa = this.physics.add.sprite(1000, 650, "ildaa");
        $spriteildaa.setSize(30, 80, true);
        $spriteildaa.setDepth(2);
        camera = this.cameras.main;
        camera.fadeIn(1500, 1);
        // CREATION MAP
        this.background = this.add
            .image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "fondmenu")
            .setOrigin(0.5, 0.5);
        this.background.displayWidth = this.sys.canvas.width;
        this.background.displayHeight = this.sys.canvas.height;
        // CREATION JOUEUR
        // HITBOX
        /*    this.background.setPipeline("Light2D");
        this.lights.enable();
        this.lights.setAmbientColor(0x808080);
        var spotlight = this.lights.addLight(300, 200, 1600).setIntensity(3);
        var spotlight2 = this.lights.addLight(1400, 200, 800).setIntensity(3);
        var spotlight3 = this.lights.addLight(690, 200, 800).setIntensity(3);
        var spotlight4 = this.lights.addLight(950, 300, 800).setIntensity(2); */
        // // CREATION PARTICULE
        this.input.on("pointermove", function (pointer) { });
        toucheclavier = this.input.keyboard.createCursorKeys();
        effetfond = this.add
            .image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "fondmenu2")
            .setOrigin(0.5, 0.5);
        effetfond.displayWidth = this.sys.canvas.width;
        effetfond.displayHeight = this.sys.canvas.height;
        this.tweens.add({
            targets: effetfond,
            alpha: { from: 0, to: 1 },
            ease: "Sine.InOut",
            duration: 3000,
            repeat: -1,
            yoyo: true
        });

        this.anims.create({
            key: "ildaayeux",
            frames: this.anims.generateFrameNumbers("ildaa", {
                frames: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]
            }),
            frameRate: 8,
            repeat: -1
        });
        $spriteildaa.play("ildaayeux");
        /* spritesonde.setVelocity(100, 200); */
        spritesonde.setBounce(1, 1);
        spritesonde.setCollideWorldBounds(true);
        // -----------------------------CREATION ANIMATION
        /* let opacite = 0;
        setInterval(() => {
            if (opacite >= 1) {
                opacite = 0;
                effetfond.setAlpha(opacite);
            } else {
                opacite += 0.03;
                effetfond.setAlpha(opacite);
            }
        }, 250); */
    }
    //-----------------------------------------------------------------------------------UPDATE
    update() {
   
    }
}