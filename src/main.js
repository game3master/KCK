import Phaser from "phaser";
import Screen from 'C:\\Users\\Tościarz\\Desktop\\GraKCK\\src\\game\\Screen.js'
const config = {
    width: 512,
    height: 512,
    // backGroundColor: 'Green',
    type: Phaser.AUTO,
    parent: 'game',
    scene:[Screen],
    scale: {
        zoom:2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y:0},

        },
    },
}
const game = new Phaser.Game(config);    
game.scene.add('screen', Screen)
game.scene.start('screen')
