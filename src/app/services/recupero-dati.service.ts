import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MerceI, ScontrinoI, EtichettaI, CampoScontrinoI } from '../interface/market.interface';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RecuperoDatiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMerce() : Observable<MerceI[]>{
    console.log("getAllMerce() from api")
    return this.http.get<MerceI[]>(environment.wsMerce+"/inventory")
  }

  getAllFrutta() : Observable<MerceI[]>{
    console.log("getAllFrutta() from api")
    return this.http.get<MerceI[]>(environment.wsFrutta+"/inventory")
  }

  getAllVerdura() : Observable<MerceI[]>{
    console.log("getAllVerdura() from api")
    return this.http.get<MerceI[]>(environment.wsVerdura+"/inventory")
  }

  createEtichetta(merce: MerceI, quantita: number) : Observable<EtichettaI>{
    console.log("createEtichetta() from api")
    const headers = { 'content-type': 'application/json' }
    const body = { merce: merce, quantita: quantita }
    return this.http.post<EtichettaI>(environment.wsEtichetta, body, { 'headers':headers })
  }

  createScontrino(campi: CampoScontrinoI[], prezzoTotale: number) : Observable<ScontrinoI>{
    console.log("createEtichetta() from api")
    const headers = { 'content-type': 'application/json' }
    const body = { campi: campi, prezzoTotale: prezzoTotale }
    return this.http.post<ScontrinoI>(environment.wsScontrino, body, { 'headers':headers })
  }
  
}
