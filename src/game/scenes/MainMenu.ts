import { Game, GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

class MyPianoToolMenuItem {
    gui: GameObjects.Text;
    next: string;
}

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    menu: MyPianoToolMenuItem[] = [];

    selector: GameObjects.Image;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    currentChoice: number = 0;
    keyEnter: Phaser.Input.Keyboard.Key | undefined;

    minTimeBetweenCursorsPress: number = 250;
    timeSinceLastCursorsPress: number = 0;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.logo = this.add.image(this.scale.width / 2, 200, 'pianoPack', 'mypianotool-logo').setDepth(100);

        this.title = this.add.text(this.scale.width / 2, this.logo.getBounds().bottom + 25, 'My Piano Tool', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.appendMenuItem('Les notes', 'LearnNotes');
        this.appendMenuItem('Les gammes', 'LearnGammes');
        this.appendMenuItem('Les accords', 'LearnAccords');

        this.selector = this.add.image(
            this.menu[0].gui.getBounds().left - 50, 
            this.menu[0].gui.getBounds().centerY,
            'pianoPack', 
            'white-left-key'
        ).setRotation(Phaser.Math.PI2 / 4).setScale(.1);

        this.setCurrentChoice();

        this.cursors = this.input.keyboard?.createCursorKeys();
        this.keyEnter = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        EventBus.emit('current-scene-ready', this);
    }

    override update(time: number, delta: number): void
    {
        this.timeSinceLastCursorsPress += delta;
        if (this.cursors?.up.isDown) {
            if (this.timeSinceLastCursorsPress >= this.minTimeBetweenCursorsPress) {
                this.updateChoice(-1);
                this.timeSinceLastCursorsPress = 0;
            }
        } else if (this.cursors?.down.isDown) {
            if (this.timeSinceLastCursorsPress >= this.minTimeBetweenCursorsPress) {
                this.updateChoice(+1);
                this.timeSinceLastCursorsPress = 0;
            }
        }
        if (this.cursors?.space.isDown || this.keyEnter?.isDown) {
            this.changeScene(this.menu[this.currentChoice].next);
        }
    }

    private appendMenuItem(title: string, next: string) {
        const previousComponent = this.menu.length == 0 ? this.title : this.menu[this.menu.length - 1].gui;
        const yDelta = this.menu.length == 0 ? 50 : 25;
        this.menu.push(
            {
                gui: this.add.text(this.scale.width / 2, previousComponent.getBounds().bottom + yDelta, title, {
                    fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
                    stroke: '#000000', strokeThickness: 8,
                    align: 'center'
                }).setOrigin(0.5),
                next: next
            }
        );
    }

    private updateChoice(delta: number) {
        this.currentChoice += delta;
        if (this.currentChoice < 0) {
            this.currentChoice = 0;
        } else if (this.currentChoice >= this.menu.length) {
            this.currentChoice = this.menu.length - 1;
        }
        this.setCurrentChoice();
    }

    private setCurrentChoice() {
        this.selector.setX(this.menu[this.currentChoice].gui.getBounds().left - 50);
        this.selector.setY(this.menu[this.currentChoice].gui.getBounds().centerY);
        this.menu.forEach(
            (value, index) => {
                value.gui.setColor(index == this.currentChoice ? '#aaaaff' : '#ffffff');
            }
        );
    }

    changeScene (next: string)
    {
        this.scene.start(next);
    }
}
