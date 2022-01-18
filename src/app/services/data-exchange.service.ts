import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CampoScontrinoI, EtichettaI, MerceI } from '../interface/market.interface';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  private allPassedData : 
          BehaviorSubject<CampoScontrinoI[]> =
          new BehaviorSubject<CampoScontrinoI[]>([])

  currentScontrino = this.allPassedData.asObservable();

  constructor() { }

  storeScontrinoData(data : CampoScontrinoI[]){
    this.allPassedData.next(data)
  }

}
