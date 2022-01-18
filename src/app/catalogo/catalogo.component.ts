import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecuperoDatiService } from '../services/recupero-dati.service';
import { CampoScontrinoI, EtichettaI, MerceI, RepartoI } from '../interface/market.interface';
import { Router } from '@angular/router';
import { DataExchangeService } from '../services/data-exchange.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  MAX_RANDOM: number = 3

  listaMerce: MerceI[] = []
  prezzoTotale : number[] = []
  quantita : number[] = []
  peso : number[] = []
  listaEtichette: EtichettaI[] = []
  listaScontrino: CampoScontrinoI[] = []

  constructor(
    private rds: RecuperoDatiService,
    private router: Router,
    private dxs: DataExchangeService
  ) { }

  ngOnInit(): void {
    this.getListMerce()
  }

  getListMerce(){
    this.rds.getAllMerce().subscribe(
      (result) => {
        console.log(result)
        this.listaMerce = result
      },
      (error) => { console.error(error) }
    )
  }

  calcolaPrezzoTotale(merce:MerceI, i:number){
    console.log(`calcolaPrezzoTotale(${JSON.stringify(merce)}, ${i})`)
    if(merce.pesatura){
      if(this.peso[i])
        this.prezzoTotale[i] = Number((Number(merce.prezzoUnitario)*Number(this.quantita[i])*this.peso[i]).toFixed(2))
    }else{
      this.prezzoTotale[i] = Number((Number(merce.prezzoUnitario)*Number(this.quantita[i])).toFixed(2))
    }
  }

  calcolaPesoMerce(merce:MerceI, i:number){
    this.getEtichetta(merce, i);
  }

  goCassa(){
    this.dxs.storeScontrinoData(this.listaScontrino)
    this.router.navigate(['/cassa'])
  }

  preview(){
    for(let i in this.prezzoTotale){
      //cosa faccio quando premo il pulsante cassa?
      this.listaScontrino.push({ descrizione:this.listaMerce[i].descrizione, quantita:this.quantita[i], prezzoTotale:this.prezzoTotale[i] })
      console.log(this.listaMerce[i])
    }
  }

  getEtichetta(merce: MerceI, i: number){
    this.rds.createEtichetta(merce, this.quantita[i]).subscribe(
      (result) => {
        console.log(result)
        //cosa faccio con il risultato della post?
        this.listaEtichette[i] = result
        this.peso[i] = this.listaEtichette[i].peso //cosi visualizzo i pesi (mettere uno spinner?)
        this.calcolaPrezzoTotale(merce, i)
      },
      (error) => {
        console.error(error) 
      }
    )
  }

  closePreview(){
    this.listaScontrino = []
  }

}
