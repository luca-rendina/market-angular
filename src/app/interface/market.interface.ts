export interface MerceI{
    id: number,
    descrizione: string, //-
    prezzoUnitario: number, //-
    pesatura: boolean,
    reparto: RepartoI,
    colore: string
}

export interface RepartoI{
    id: number,
    sigla: string,
    descrizione: string,
    ubicazione: string
}

export interface EtichettaI{
    barcode: number,
    merce: MerceI, //merce.descrizione
    quantita: number, //-
    prezzoUnitario: number,
    peso: number, 
    prezzoTotale: number, //-
    timeStamp: Date
}

export interface ScontrinoI{
    id?: number,
    lista: CampoScontrinoI,
    prezzoTotale: number
}

export interface CampoScontrinoI{
    descrizione: string,
    quantita: number,
    prezzoTotale: number
}