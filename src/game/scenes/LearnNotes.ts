import { GameObjects, Scene } from "phaser";
import { PianoOctave } from "./shapes/PianoOctave";
import { NoteGamme, Solfege, ToucheClavier } from "../models/solfege";

export class LearnNotes extends Scene {

    title: GameObjects.Text;

    clavierPiano: ToucheClavier[] = [];
    solfege: Solfege = new Solfege();

    constructor() {
        super('LearnNotes');
        
    }

    create() {

        this.title = this.add.text(this.scale.width / 2, 20, 'My Piano Tool : Les notes', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let note_do = {
            noteNonAlteree: Solfege.NOTE_C,
            alteration: null,
            nbrAlteration: 0,
            fonctionNote: Solfege.FONCTION_NOTE_FONDAMENTALE
          } as NoteGamme;
          
        this.clavierPiano = this.solfege.getClavierPiano(note_do);

        const pianoOctave = new PianoOctave(this, 2, this.clavierPiano);

        this.add.container(
            this.scale.width / 2 - pianoOctave.getWidth(), 
            this.scale.height / 2 - pianoOctave.getHeight() / 2, 
            pianoOctave
        );
    }

}