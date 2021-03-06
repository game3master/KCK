import Phaser, { DOWN, LEFT, RIGHT } from "phaser";
export default class Screen extends Phaser.Scene {
    preload() {
        this.load.atlas("fairy", "../../assets/images/fairy.png", "../../assets/images/fairy_atlas.json")
    }

    create() {
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, 0, 0, "fairy", "fairy_idle_+_walk_1");
        this.add.existing(this.player)
        this.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }
    update() {
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.inputKeys.left.isDown) {
            playerVelocity.x = -1;
        } else if (this.inputKeys.right.isDown) {
            playerVelocity.x = 1;
        }
        if (this.inputKeys.up.isDown) {
            playerVelocity.y = -1;
        } else if (this.inputKeys.down.isDown) {
            playerVelocity.y = 1;
        }
        playerVelocity.normalize()
        playerVelocity.scale(speed)
        this.player.setVelocity(playerVelocity.x, playerVelocity.y);
    }

}