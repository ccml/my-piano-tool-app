import { GameObjects, Scene } from "phaser";
import { Solfege, ToucheClavier } from "../../models/solfege";

class PianoKey {
    name: string;
    nbrOfAlterations: number;
    alteration: string;
    isBlack: boolean;
    gui: GameObjects.Graphics;
}

export class PianoOctave extends GameObjects.Graphics {
    
    keys: PianoKey[] = [];

    baseSizeBlackX = 20 * this.zoomFactor;
    baseSizeWhiteX = 30 * this.zoomFactor;
    baseSizeBlackY = 70 * this.zoomFactor;
    baseSizeWhiteY = 120 * this.zoomFactor;
    
    ctx: CanvasRenderingContext2D | null;

    constructor(scene: Scene, private zoomFactor: number, clavierPiano: ToucheClavier[]) {
        super(scene);

        const octave = document.createElement('canvas');
        this.ctx = octave.getContext('2d');

        this.addKey(Solfege.NOTE_C);
        this.addKey(Solfege.NOTE_D);
        this.addKey(Solfege.NOTE_D, Solfege.ALTERATION_BEMOL);
        this.addKey(Solfege.NOTE_E);
        this.addKey(Solfege.NOTE_E, Solfege.ALTERATION_BEMOL);
        this.addKey(Solfege.NOTE_F);
        this.addKey(Solfege.NOTE_G);
        this.addKey(Solfege.NOTE_G, Solfege.ALTERATION_BEMOL);
        this.addKey(Solfege.NOTE_A);
        this.addKey(Solfege.NOTE_A, Solfege.ALTERATION_BEMOL);
        this.addKey(Solfege.NOTE_B);
        this.addKey(Solfege.NOTE_B, Solfege.ALTERATION_BEMOL);

    }

    getWidth() : number {
        return this.baseSizeWhiteX * 7;
    }

    getHeight() : number {
        return this.baseSizeWhiteY;
    }

    private addKey(keyName: string, alteration: string = '') {

        const index = this.keys.filter(k => !k.isBlack).length;
        
        const isBlackKey = alteration !== '';
        const isLeftWhiteKey = keyName === 'C' || keyName == 'F';
        const isRightWhiteKey = keyName === 'E' || keyName == 'B';
        
        const frameName =
            isBlackKey ? 'black-key'
                : isLeftWhiteKey ? 'white-left-key'
                    : isRightWhiteKey ? 'white-right-key'
                        : 'white-middle-key';

        const xOffset = 
            isBlackKey ?
                (index - 1) * this.baseSizeWhiteX - this.baseSizeBlackX / 2
                :
                index * this.baseSizeWhiteX;
        const yOffset = 0;
        
        this.keys.push(
            {
                name: keyName,
                alteration: alteration,
                nbrOfAlterations: alteration === '' ? 0 : 1,
                isBlack: isBlackKey,
                gui: this
                        .fillStyle(isBlackKey ? 0x000000 : 0xffffff)
                        .fillRect(
                            xOffset,
                            yOffset, 
                            isBlackKey ? this.baseSizeBlackX : this.baseSizeWhiteX-2, 
                            isBlackKey ? this.baseSizeBlackY : this.baseSizeWhiteY
                        )
            }
        );
    }

}