export type NoteNonAlteree= string;

export type Alteration= string | null;

export type FonctionNote= string;

export type Formule= FonctionNote[] | null;

export interface Accord {
    type: TypeAccord;
    notes:  NoteGamme[];
};

export interface Note {
    noteNonAlteree: NoteNonAlteree;
    alteration: Alteration;
    nbrAlteration: number;
}

export interface NoteGamme extends Note {
    fonctionNote: string;
}

export interface NoteGammeOctave extends NoteGamme {
    octave: number;
}

export interface ToucheClavier {
    touche: Note;
    note: NoteGammeOctave;
}

export interface TypeGamme {
    nom: string;
    formule: Formule;
}

export interface Gamme {
    type: TypeGamme;
    notes: NoteGamme[];
}

export interface TypeAccord {
    nom: string;
    formule: FonctionNote[];
}

export interface Degree {
    fonctionNote: FonctionNote,
    accord: Accord
}

export class Solfege {

    public static NOTE_C = "C";
    public static NOTE_D = "D";
    public static NOTE_E = "E";
    public static NOTE_F = "F";
    public static NOTE_G = "G";
    public static NOTE_A = "A";
    public static NOTE_B = "B";

    public static ALTERATION_BEMOL = "b";
    public static ALTERATION_DIESE = "#";

    public static FONCTION_NOTE_FONDAMENTALE = "1";
    public static FONCTION_NOTE_SECONDE_MINEURE = "b2";
    public static FONCTION_NOTE_SECONDE_MAJEURE = "2";
    public static FONCTION_NOTE_TIERCE_MINEURE = "b3";
    public static FONCTION_NOTE_TIERCE_MAJEURE = "3";
    public static FONCTION_NOTE_QUARTE = "4";
    public static FONCTION_NOTE_QUARTE_AUGMENTEE = "#4";
    public static FONCTION_NOTE_QUINTE_DIMINUEE = "b5";
    public static FONCTION_NOTE_QUINTE = "5";
    public static FONCTION_NOTE_SIXTE_MINEURE = "b6";
    public static FONCTION_NOTE_SIXTE_MAJEURE = "6";
    public static FONCTION_NOTE_SEPTIEME_MINEURE = "b7";
    public static FONCTION_NOTE_SEPTIEME_MAJEURE = "7";

    public static NOM_FORMULE_TOUTES_FONCTIONS = "Gamme toutes fonctions";
    public static NOM_FORMULE_GAMME_MODE_IONIEN = "Mode ionien (Gamme majeure)";
    public static NOM_FORMULE_GAMME_MODE_DORIEN = "Mode dorien";
    public static NOM_FORMULE_GAMME_MODE_PHRYGIEN = "Mode phrygien";
    public static NOM_FORMULE_GAMME_MODE_LYDIEN = "Mode lydien";
    public static NOM_FORMULE_GAMME_MODE_MIXOLYDIEN = "Mode mixolydien";
    public static NOM_FORMULE_GAMME_MODE_EOLIEN = "Mode éolien (Gamme mineure naturelle)";
    public static NOM_FORMULE_GAMME_MODE_LOCRIEN = "Mode locrien";
    public static NOM_FORMULE_GAMME_PENTATONIQUE_MINEURE = "Gamme pentatonique mineure";
    public static NOM_FORMULE_GAMME_PENTATONIQUE_MAJEURE = "Gamme pentatonique majeure";

    public static NOM_ACCORD_MAJEUR = "MAJEUR";
    public static NOM_ACCORD_MINEUR = "MINEUR";
    public static NOM_ACCORD_DIMINUE = "DIMINUE";
    public static NOM_ACCORD_MAJEUR_7 = "MAJEUR 7";
    public static NOM_ACCORD_7 = "7èm DE DOMINANTE";
    public static NOM_ACCORD_MINEUR_7 = "MINEUR 7";
    public static NOM_ACCORD_MINEUR_7_QUINTE_BEMOL = "MINEUR 7 QUINTE BEMOL";
    public static NOM_ACCORD_MAJEUR_9 = "MAJEUR 9";
    public static NOM_ACCORD_MAJEUR_11 = "MAJEUR 11";
    public static NOM_ACCORD_MAJEUR_13 = "MAJEUR 13";
    public static NOM_ACCORD_9 = "DOMINANT 9";
    public static NOM_ACCORD_11 = "DOMINANT 11";
    public static NOM_ACCORD_13 = "DOMINANT 13";
    public static NOM_ACCORD_MINEUR_9 = "MINEUR 9";
    public static NOM_ACCORD_MINEUR_11 = "MINEUR 11";
    public static NOM_ACCORD_MINEUR_13 = "MINEUR 13";
    public static NOM_ACCORD_MAJEUR_ADD_2 = "MAJEUR ADD 2";
    public static NOM_ACCORD_MAJEUR_ADD_4 = "MAJEUR ADD 4";
    public static NOM_ACCORD_MINEUR_ADD_2 = "MINEUR ADD 2";
    public static NOM_ACCORD_MINEUR_ADD_4 = "MINEUR ADD 4";
    public static NOM_ACCORD_SUS_2 = "SUS 2";
    public static NOM_ACCORD_SUS_4 = "SUS 4";
    public static NOM_ACCORD_MAJEUR_6 = "MAJEUR 6";
    public static NOM_ACCORD_MINEUR_6 = "MINEUR 6";
    public static NOM_ACCORD_MINEUR_MAJEUR_7 = "MINEUR-MAJEUR 7";
   
    public static FORMULE_ACCORD_MAJEUR: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE
    ];

    public static FORMULE_ACCORD_MINEUR: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE
    ];

    public static FORMULE_ACCORD_DIMINUE: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE_DIMINUEE
    ];

    public static FORMULE_ACCORD_MAJEUR_7: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE
    ];

    public static FORMULE_ACCORD_7: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
    ];

    public static FORMULE_ACCORD_MINEUR_7: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
    ];

    public static FORMULE_ACCORD_MINEUR_7_QUINTE_BEMOL: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE_DIMINUEE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
    ];

    public static FORMULE_ACCORD_MAJEUR_9: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE
    ];

    public static FORMULE_ACCORD_MAJEUR_11: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE,
        Solfege.FONCTION_NOTE_QUARTE
    ];

    public static FORMULE_ACCORD_MAJEUR_13: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE,
        Solfege.FONCTION_NOTE_SIXTE_MAJEURE
    ];

    public static FORMULE_ACCORD_9: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE
    ];

    public static FORMULE_ACCORD_11: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_QUARTE
    ];

    public static FORMULE_ACCORD_13: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_SIXTE_MAJEURE
    ];

    public static FORMULE_ACCORD_MINEUR_9: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE
    ];

    public static FORMULE_ACCORD_MINEUR_11: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_QUARTE
    ];

    public static FORMULE_ACCORD_MINEUR_13: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_SIXTE_MAJEURE
    ];

    public static FORMULE_ACCORD_MAJEUR_ADD_2: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE
    ];

    public static FORMULE_ACCORD_MAJEUR_ADD_4: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_QUARTE
    ];

    public static FORMULE_ACCORD_MINEUR_ADD_2: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE
    ];

    public static FORMULE_ACCORD_MINEUR_ADD_4: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_QUARTE
    ];

    public static FORMULE_ACCORD_SUS_2: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE
    ];

    public static FORMULE_ACCORD_SUS_4: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_QUARTE,
        Solfege.FONCTION_NOTE_QUINTE
    ];

    public static FORMULE_ACCORD_MAJEUR_6: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SIXTE_MAJEURE
    ];

    public static FORMULE_ACCORD_MINEUR_6: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SIXTE_MAJEURE
    ];

    public static FORMULE_ACCORD_MINEUR_MAJEUR_7: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE
    ];

    public static ACCORD_MAJEUR = {
        nom: Solfege.NOM_ACCORD_MAJEUR,
        formule: Solfege.FORMULE_ACCORD_MAJEUR
    } as TypeAccord;

    public static ACCORD_MINEUR = {
        nom: Solfege.NOM_ACCORD_MINEUR,
        formule: Solfege.FORMULE_ACCORD_MINEUR
    } as TypeAccord;

    public static ACCORD_DIMINUE = {
        nom: Solfege.NOM_ACCORD_DIMINUE,
        formule: Solfege.FORMULE_ACCORD_DIMINUE
    } as TypeAccord;

    public static ACCORD_MAJEUR_7 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_7,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_7
    } as TypeAccord;

    public static ACCORD_7 = {
        nom: Solfege.NOM_ACCORD_7,
        formule: Solfege.FORMULE_ACCORD_7
    } as TypeAccord;

    public static ACCORD_MINEUR_7 = {
        nom: Solfege.NOM_ACCORD_MINEUR_7,
        formule: Solfege.FORMULE_ACCORD_MINEUR_7
    } as TypeAccord;

    public static ACCORD_MINEUR_7_QUINTE_BEMOL = {
        nom: Solfege.NOM_ACCORD_MINEUR_7_QUINTE_BEMOL,
        formule: Solfege.FORMULE_ACCORD_MINEUR_7_QUINTE_BEMOL
    } as TypeAccord;

    public static ACCORD_MAJEUR_9 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_9,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_9
    } as TypeAccord;

    public static ACCORD_MAJEUR_11 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_11,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_11
    } as TypeAccord;

    public static ACCORD_MAJEUR_13 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_13,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_13
    } as TypeAccord;

    public static ACCORD_9 = {
        nom: Solfege.NOM_ACCORD_9,
        formule: Solfege.FORMULE_ACCORD_9
    } as TypeAccord;

    public static ACCORD_11 = {
        nom: Solfege.NOM_ACCORD_11,
        formule: Solfege.FORMULE_ACCORD_11
    } as TypeAccord;

    public static ACCORD_13 = {
        nom: Solfege.NOM_ACCORD_13,
        formule: Solfege.FORMULE_ACCORD_13
    } as TypeAccord;

    public static ACCORD_MINEUR_9 = {
        nom: Solfege.NOM_ACCORD_MINEUR_9,
        formule: Solfege.FORMULE_ACCORD_MINEUR_9
    } as TypeAccord;

    public static ACCORD_MINEUR_11 = {
        nom: Solfege.NOM_ACCORD_MINEUR_11,
        formule: Solfege.FORMULE_ACCORD_MINEUR_11
    } as TypeAccord;

    public static ACCORD_MINEUR_13 = {
        nom: Solfege.NOM_ACCORD_MINEUR_13,
        formule: Solfege.FORMULE_ACCORD_MINEUR_13
    } as TypeAccord;

    public static ACCORD_MAJEUR_ADD_2 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_ADD_2,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_ADD_2
    } as TypeAccord;

    public static ACCORD_MAJEUR_ADD_4 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_ADD_4,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_ADD_4
    } as TypeAccord;

    public static ACCORD_MINEUR_ADD_2 = {
        nom: Solfege.NOM_ACCORD_MINEUR_ADD_2,
        formule: Solfege.FORMULE_ACCORD_MINEUR_ADD_2
    } as TypeAccord;

    public static ACCORD_MINEUR_ADD_4 = {
        nom: Solfege.NOM_ACCORD_MINEUR_ADD_4,
        formule: Solfege.FORMULE_ACCORD_MINEUR_ADD_4
    } as TypeAccord;

    public static ACCORD_SUS_2 = {
        nom: Solfege.NOM_ACCORD_SUS_2,
        formule: Solfege.FORMULE_ACCORD_SUS_2
    } as TypeAccord;

    public static ACCORD_SUS_4 = {
        nom: Solfege.NOM_ACCORD_SUS_4,
        formule: Solfege.FORMULE_ACCORD_SUS_4
    } as TypeAccord;

    public static ACCORD_MAJEUR_6 = {
        nom: Solfege.NOM_ACCORD_MAJEUR_6,
        formule: Solfege.FORMULE_ACCORD_MAJEUR_6
    } as TypeAccord;

    public static ACCORD_MINEUR_6 = {
        nom: Solfege.NOM_ACCORD_MINEUR_6,
        formule: Solfege.FORMULE_ACCORD_MINEUR_6
    } as TypeAccord;

    public static ACCORD_MINEUR_MAJEUR_7 = {
        nom: Solfege.NOM_ACCORD_MINEUR_MAJEUR_7,
        formule: Solfege.FORMULE_ACCORD_MINEUR_MAJEUR_7
    } as TypeAccord;

    public static GAMME_TOUTES_FONCTIONS = {
        nom: Solfege.NOM_FORMULE_TOUTES_FONCTIONS,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MINEURE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MINEURE,
            Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE_DIMINUEE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MINEURE,
            Solfege.FONCTION_NOTE_SIXTE_MAJEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE
        ]
    } as TypeGamme;

    public static MODE_IONIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_IONIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MAJEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE
        ]
    } as TypeGamme;

    public static MODE_DORIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_DORIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MINEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MAJEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
        ]
    } as TypeGamme;

    public static MODE_PHRYGIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_PHRYGIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MINEURE,
            Solfege.FONCTION_NOTE_TIERCE_MINEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MINEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
        ]
    } as TypeGamme;

    public static MODE_LYDIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_LYDIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
            Solfege.FONCTION_NOTE_QUARTE_AUGMENTEE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MAJEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE
        ]
    } as TypeGamme;

    public static MODE_MIXOLYDIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_MIXOLYDIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MAJEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
        ]
    } as TypeGamme;

    public static MODE_EOLIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_EOLIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MINEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MINEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
        ]
    } as TypeGamme;

    public static MODE_LOCRIEN = {
        nom: Solfege.NOM_FORMULE_GAMME_MODE_LOCRIEN,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MINEURE,
            Solfege.FONCTION_NOTE_TIERCE_MINEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE_DIMINUEE,
            Solfege.FONCTION_NOTE_SIXTE_MINEURE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
        ]
    } as TypeGamme;

    public static GAMME_PENTATONIQUE_MINEURE = {
        nom: Solfege.NOM_FORMULE_GAMME_PENTATONIQUE_MINEURE,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_TIERCE_MINEURE,
            Solfege.FONCTION_NOTE_QUARTE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SEPTIEME_MINEURE
        ]
    } as TypeGamme;

    public static GAMME_PENTATONIQUE_MAJEURE = {
        nom: Solfege.NOM_FORMULE_GAMME_PENTATONIQUE_MAJEURE,
        formule: [ 
            Solfege.FONCTION_NOTE_FONDAMENTALE,
            Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
            Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
            Solfege.FONCTION_NOTE_QUINTE,
            Solfege.FONCTION_NOTE_SIXTE_MAJEURE
        ]
    } as TypeGamme;

    public alterations: Alteration[] = [ 
        Solfege.ALTERATION_BEMOL, 
        Solfege.ALTERATION_DIESE 
    ];

    public notesNonAlterees: NoteNonAlteree[] = [
        Solfege.NOTE_A, 
        Solfege.NOTE_B, 
        Solfege.NOTE_C, 
        Solfege.NOTE_D, 
        Solfege.NOTE_E, 
        Solfege.NOTE_F, 
        Solfege.NOTE_G
    ];

    public fonctionsNotes: FonctionNote[] = [
        Solfege.FONCTION_NOTE_FONDAMENTALE,
        Solfege.FONCTION_NOTE_SECONDE_MINEURE,
        Solfege.FONCTION_NOTE_SECONDE_MAJEURE,
        Solfege.FONCTION_NOTE_TIERCE_MINEURE,
        Solfege.FONCTION_NOTE_TIERCE_MAJEURE,
        Solfege.FONCTION_NOTE_QUARTE,
        Solfege.FONCTION_NOTE_QUINTE_DIMINUEE,
        Solfege.FONCTION_NOTE_QUINTE,
        Solfege.FONCTION_NOTE_SIXTE_MINEURE,
        Solfege.FONCTION_NOTE_SIXTE_MAJEURE,
        Solfege.FONCTION_NOTE_SEPTIEME_MINEURE,
        Solfege.FONCTION_NOTE_SEPTIEME_MAJEURE
    ];

    public typeGammes : TypeGamme[] = [
        Solfege.MODE_IONIEN,
        Solfege.MODE_DORIEN,
        Solfege.MODE_PHRYGIEN,
        Solfege.MODE_LYDIEN,
        Solfege.MODE_MIXOLYDIEN,
        Solfege.MODE_EOLIEN,
        Solfege.MODE_LOCRIEN,
        Solfege.GAMME_PENTATONIQUE_MINEURE,
        Solfege.GAMME_PENTATONIQUE_MAJEURE
    ];

    public typeAccords : TypeAccord[] = [
        Solfege.ACCORD_MAJEUR,
        Solfege.ACCORD_MINEUR,
        Solfege.ACCORD_DIMINUE,
        Solfege.ACCORD_MAJEUR_7,
        Solfege.ACCORD_7,
        Solfege.ACCORD_MINEUR_7,
        Solfege.ACCORD_MINEUR_7_QUINTE_BEMOL,
        Solfege.ACCORD_MAJEUR_9,
        Solfege.ACCORD_MAJEUR_11,
        Solfege.ACCORD_MAJEUR_13,
        Solfege.ACCORD_9,
        Solfege.ACCORD_11,
        Solfege.ACCORD_13,
        Solfege.ACCORD_MINEUR_9,
        Solfege.ACCORD_MINEUR_11,
        Solfege.ACCORD_MINEUR_13,
        Solfege.ACCORD_MAJEUR_ADD_2,
        Solfege.ACCORD_MAJEUR_ADD_4,
        Solfege.ACCORD_MINEUR_ADD_2,
        Solfege.ACCORD_MINEUR_ADD_4,
        Solfege.ACCORD_SUS_2,
        Solfege.ACCORD_SUS_4,
        Solfege.ACCORD_MAJEUR_6,
        Solfege.ACCORD_MINEUR_6,
        Solfege.ACCORD_MINEUR_MAJEUR_7
    ];

    public typeAccordsMajeurs : TypeAccord[] = [
        Solfege.ACCORD_MAJEUR,
        Solfege.ACCORD_MAJEUR_7,
        Solfege.ACCORD_7,
        Solfege.ACCORD_MAJEUR_9,
        Solfege.ACCORD_MAJEUR_11,
        Solfege.ACCORD_MAJEUR_13,
        Solfege.ACCORD_9,
        Solfege.ACCORD_11,
        Solfege.ACCORD_13,
        Solfege.ACCORD_MAJEUR_ADD_2,
        Solfege.ACCORD_MAJEUR_ADD_4,
        Solfege.ACCORD_MAJEUR_6
    ];

    public typeAccordsMineurs : TypeAccord[] = [
        Solfege.ACCORD_MINEUR,
        Solfege.ACCORD_MINEUR_7,
        Solfege.ACCORD_MINEUR_7_QUINTE_BEMOL,
        Solfege.ACCORD_MINEUR_9,
        Solfege.ACCORD_MINEUR_11,
        Solfege.ACCORD_MINEUR_13,
        Solfege.ACCORD_MINEUR_ADD_2,
        Solfege.ACCORD_MINEUR_ADD_4,
        Solfege.ACCORD_MINEUR_6
    ];

    public typeAccordsAutres : TypeAccord[] = [
        Solfege.ACCORD_DIMINUE,
        Solfege.ACCORD_SUS_2,
        Solfege.ACCORD_SUS_4,
        Solfege.ACCORD_MINEUR_MAJEUR_7
    ];

    public getNbrDemiTons(note: NoteNonAlteree): number {
        return (note === Solfege.NOTE_B) || (note == Solfege.NOTE_E) ? 1 : 2;  
    }

    public getNbrDemiTonsEntreDeuxNotes(note1: NoteNonAlteree, note2: NoteNonAlteree): number {
        let indexNote1 = this.notesNonAlterees.indexOf(note1);
        let indexNote2 = this.notesNonAlterees.indexOf(note2);
        let currentIndex = indexNote1;
        let nbrDemiTons = 0;
        while(currentIndex != indexNote2) {
            nbrDemiTons += this.getNbrDemiTons(this.notesNonAlterees[currentIndex]);
            currentIndex = (currentIndex + 1) % this.notesNonAlterees.length;
        }
        return nbrDemiTons;
    }

    public getLocalOffsetDemiTon(note: Note): number {
        return note.alteration === Solfege.ALTERATION_BEMOL ? -1 : (note.alteration === Solfege.ALTERATION_DIESE ? 1 : 0);
    }

    public getNoteGamme(fondamentale: Note, fonctionNote: FonctionNote): NoteGamme {
        if(fonctionNote == Solfege.FONCTION_NOTE_QUARTE_AUGMENTEE) {
            var noteNonAugmentee = this.getNoteGamme(fondamentale, Solfege.FONCTION_NOTE_QUARTE);
            //            
            var alterationNoteAugmentee = null;
            var nbrAlterationNoteAugmentee = 0;
            if(noteNonAugmentee.alteration == Solfege.ALTERATION_BEMOL) {
                if(noteNonAugmentee.nbrAlteration == 1) {
                    alterationNoteAugmentee = null;
                    nbrAlterationNoteAugmentee = 0;
                } else {
                    alterationNoteAugmentee = Solfege.ALTERATION_BEMOL;
                    nbrAlterationNoteAugmentee = noteNonAugmentee.nbrAlteration - 1;
                }
            } else if(noteNonAugmentee.alteration == Solfege.ALTERATION_DIESE) {
                alterationNoteAugmentee = Solfege.ALTERATION_DIESE;
                nbrAlterationNoteAugmentee = 1 + noteNonAugmentee.nbrAlteration;
            } else {
                alterationNoteAugmentee = Solfege.ALTERATION_DIESE;
                nbrAlterationNoteAugmentee = 1;
            }
            //
            return {
                noteNonAlteree: noteNonAugmentee.noteNonAlteree,
                alteration: alterationNoteAugmentee,
                nbrAlteration: nbrAlterationNoteAugmentee,
                fonctionNote: fonctionNote
            } as NoteGamme;    
        } else {
            let fonctionNonAlteree = fonctionNote.length == 1 ? fonctionNote : fonctionNote.substring(1);
            // Calcul du nom de la note
            let offset = Number(fonctionNonAlteree) - 1;
            let indexFondamentale = this.notesNonAlterees.indexOf(fondamentale.noteNonAlteree);
            let noteNonAlteree = this.notesNonAlterees[(indexFondamentale + offset) % this.notesNonAlterees.length];
            // Calcul de l'alteration
            let nbrDemiTonsEntreDeuxNotes = this.getNbrDemiTonsEntreDeuxNotes(fondamentale.noteNonAlteree, noteNonAlteree);
            let nbrDemiTonsFonction = this.fonctionsNotes.indexOf(fonctionNote);
            let alterationOffset = (nbrDemiTonsFonction - nbrDemiTonsEntreDeuxNotes) + this.getLocalOffsetDemiTon(fondamentale);
            let alteration = alterationOffset < 0 ? Solfege.ALTERATION_BEMOL : (alterationOffset > 0 ? Solfege.ALTERATION_DIESE : null);
            let nbrAlteration = Math.abs(alterationOffset);
            //
            return {
                noteNonAlteree: noteNonAlteree,
                alteration: alteration,
                nbrAlteration: nbrAlteration,
                fonctionNote: fonctionNote
            } as NoteGamme;    
        }
    }

    public getGamme(fondamentale: Note, typeGamme: TypeGamme): Gamme {
        let gamme: Gamme = {
            type: typeGamme,
            notes: []
        };
        typeGamme.formule?.forEach(fonction => {
            gamme.notes.push(this.getNoteGamme(fondamentale, fonction));
        });
        return gamme;
    }

    public getDegree(gamme: Gamme, fonctionNote: FonctionNote): Degree {
        if(!gamme) return <Degree> {};
        let indexDegree = gamme.notes.findIndex(ng => ng.fonctionNote === fonctionNote);
        let notesAccord = [
            gamme.notes[indexDegree],
            gamme.notes[(indexDegree+2)%7],
            gamme.notes[(indexDegree+4)%7],
            gamme.notes[(indexDegree+6)%7]
        ];
        return <Degree> { 
            fonctionNote: (gamme.notes[indexDegree]).fonctionNote,
            accord: {
                type: this.getTypeAccord(notesAccord),
                notes: notesAccord
            }
        };
    }

    public getRelativeFonction(fonctionNote: FonctionNote, baseFonctionNote: FonctionNote): FonctionNote {
        let baseIndex = this.fonctionsNotes.indexOf(baseFonctionNote == Solfege.FONCTION_NOTE_QUARTE_AUGMENTEE ? Solfege.FONCTION_NOTE_QUINTE_DIMINUEE : baseFonctionNote);
        let index = this.fonctionsNotes.indexOf(fonctionNote == Solfege.FONCTION_NOTE_QUARTE_AUGMENTEE ? Solfege.FONCTION_NOTE_QUINTE_DIMINUEE : fonctionNote);
        let offset = index - baseIndex;
        if(offset < 0) {
            offset += this.fonctionsNotes.length;
        }
        return this.fonctionsNotes[offset];
    }

    public getTypeAccord(accord: NoteGamme[], nbrNotes: number = 0): TypeAccord | undefined {
        if(accord.length === 3 || nbrNotes === 3) {
            let typeAccord = this.typeAccords.find(
                ta => 
                ta.formule[0] === this.getRelativeFonction(accord[0].fonctionNote, accord[0].fonctionNote)
                &&
                ta.formule[1] === this.getRelativeFonction(accord[1].fonctionNote, accord[0].fonctionNote)
                &&
                ta.formule[2] === this.getRelativeFonction(accord[2].fonctionNote, accord[0].fonctionNote)
            );
            return typeAccord;
        }
        else if(accord.length === 4) {
            let typeAccord = this.typeAccords.find(
                ta => 
                ta.formule[0] === this.getRelativeFonction(accord[0].fonctionNote, accord[0].fonctionNote)
                &&
                ta.formule[1] === this.getRelativeFonction(accord[1].fonctionNote, accord[0].fonctionNote)
                &&
                ta.formule[2] === this.getRelativeFonction(accord[2].fonctionNote, accord[0].fonctionNote)
                &&
                ta.formule[3] === this.getRelativeFonction(accord[3].fonctionNote, accord[0].fonctionNote)
            );
            return typeAccord;
        }
        return undefined;
    }

    public getRelativeMineure(gammeMajeure: Gamme): Gamme {
        let baseNote = gammeMajeure.notes[5];
        return this.getGamme(baseNote, Solfege.MODE_EOLIEN);
    }

    public getRelativeMajeure(gammeMineure: Gamme): Gamme {
        let baseNote = gammeMineure.notes[2];
        return this.getGamme(baseNote, Solfege.MODE_IONIEN);
    }

    public getAccords(fondamentale: Note): Accord[] {
        let accords: Accord[] = [];
        this.typeAccords.forEach(typeAccord => {
            accords.push(<Accord>{
                type: typeAccord,
                notes: typeAccord.formule.map(fonctionNote => this.getNoteGamme(fondamentale, fonctionNote))
            });
        });
        return accords;
    }

    public isEqualNote(note1: Note, note2: Note): boolean {
        return (note1.noteNonAlteree === note2.noteNonAlteree)
            && (note1.alteration == note2.alteration)
            && (note1.nbrAlteration == note2.nbrAlteration);
    }

    isEqualNoteDetail(noteNonAlteree: NoteNonAlteree, alteration: Alteration, nbrAlteration: number, note2: Note): boolean {
        return (noteNonAlteree === note2.noteNonAlteree)
            && (alteration == note2.alteration)
            && (nbrAlteration == note2.nbrAlteration);
    }

    getNote(noteNonAlteree: NoteNonAlteree, alteration: Alteration, nbrAlteration: number): Note {
        return <Note>{
            noteNonAlteree: noteNonAlteree,
            alteration: alteration,
            nbrAlteration: nbrAlteration
        };
    }

    isEqualToucheToutesFonctionsDo(note1: Note, note2: Note): boolean {
        let standardNote2 = note2;

        // bC => b
        if(this.isEqualNoteDetail(Solfege.NOTE_C, Solfege.ALTERATION_BEMOL, 1, note2)) {
            
            standardNote2 = this.getNote(Solfege.NOTE_B, null, 0);

        // #C = bD
        } else if(this.isEqualNoteDetail(Solfege.NOTE_C, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_D, Solfege.ALTERATION_BEMOL, 1);

        // #D = bE
        } else if(this.isEqualNoteDetail(Solfege.NOTE_D, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_E, Solfege.ALTERATION_BEMOL, 1);

        // #E = F
        } else if(this.isEqualNoteDetail(Solfege.NOTE_E, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_F, null, 0);

        // bF = E
        } else if(this.isEqualNoteDetail(Solfege.NOTE_F, Solfege.ALTERATION_BEMOL, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_E, null, 0);

        // #F = bG
        } else if(this.isEqualNoteDetail(Solfege.NOTE_F, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_G, Solfege.ALTERATION_BEMOL, 1);

        // #G = bA
        } else if(this.isEqualNoteDetail(Solfege.NOTE_G, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_A, Solfege.ALTERATION_BEMOL, 1);

        // #A = bB
        } else if(this.isEqualNoteDetail(Solfege.NOTE_A, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_B, Solfege.ALTERATION_BEMOL, 1);

        // #B = C
        } else if(this.isEqualNoteDetail(Solfege.NOTE_B, Solfege.ALTERATION_DIESE, 1, note2)) {

            standardNote2 = this.getNote(Solfege.NOTE_C, null, 0);

        }
        return (note1.noteNonAlteree === standardNote2.noteNonAlteree)
            && (note1.alteration == standardNote2.alteration)
            && (note1.nbrAlteration == standardNote2.nbrAlteration);
    }

    public getOctave(fondamentale: NoteGamme, octave:number): ToucheClavier[] {
        let octavePiano: ToucheClavier[] = [];
        // La premiere touche sera un DO non altere
        let toucheDepart = <Note>{
            noteNonAlteree: Solfege.NOTE_C,
            alteration: null,
            nbrAlteration: 0
        };
        let gammeToutesFonctionsDo = this.getGamme(toucheDepart, Solfege.GAMME_TOUTES_FONCTIONS);
        let fondamentaleDansGammeToutesFonctions = gammeToutesFonctionsDo.notes.find(noteDoToutesFonctionsDo =>
            this.isEqualToucheToutesFonctionsDo(noteDoToutesFonctionsDo, fondamentale)
        );
        if(!fondamentaleDansGammeToutesFonctions) return octavePiano;
        let indexFonctionFondamentaleDansGammeToutesFonctions = this.fonctionsNotes.indexOf(fondamentaleDansGammeToutesFonctions.fonctionNote);
        if(indexFonctionFondamentaleDansGammeToutesFonctions === -1) return octavePiano;
        let indexFonctionToucheDepart = 12 - indexFonctionFondamentaleDansGammeToutesFonctions;
        for(let nbrDemiTons=0; nbrDemiTons<12; nbrDemiTons++) {            
            let noteGamme = this.getNoteGamme(fondamentale, this.fonctionsNotes[(indexFonctionToucheDepart + nbrDemiTons) % 12]);
            octavePiano.push({
                touche: <Note> {
                    noteNonAlteree: gammeToutesFonctionsDo.notes[nbrDemiTons].noteNonAlteree,
                    alteration: gammeToutesFonctionsDo.notes[nbrDemiTons].alteration,
                    nbrAlteration: gammeToutesFonctionsDo.notes[nbrDemiTons].nbrAlteration,
                },
                note: <NoteGammeOctave>{                
                    noteNonAlteree: noteGamme.noteNonAlteree,
                    alteration: noteGamme.alteration,
                    nbrAlteration: noteGamme.nbrAlteration,
                    fonctionNote: noteGamme.fonctionNote,
                    octave: octave
                }
            });
        }
        return octavePiano;
    }

    public getClavierPianoFromTo(fondamentale: NoteGamme | undefined, from: number, to: number): ToucheClavier[] {
        let clavierPiano: ToucheClavier[] = [];
        if(!fondamentale) return clavierPiano;
        for(let octave = from; octave <= to; octave++) {
            clavierPiano.push(...this.getOctave(fondamentale, octave));
        }
        return clavierPiano;
    }

    public getClavierPiano(fondamentale: NoteGamme | undefined): ToucheClavier[] {
        return this.getClavierPianoFromTo(fondamentale, 3, 4);
    }
    
}