import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampoScontrinoI, EtichettaI, MerceI } from '../interface/market.interface';
import { DataExchangeService } from '../services/data-exchange.service';
import { RecuperoDatiService } from '../services/recupero-dati.service';

@Component({
  selector: 'app-cassa',
  templateUrl: './cassa.component.html',
  styleUrls: ['./cassa.component.scss']
})
export class CassaComponent implements OnInit {

  listaDaPagare: CampoScontrinoI[] = []

  constructor(
    private rds: RecuperoDatiService,
    private dxs: DataExchangeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateListaDaPagare()
  }

  updateListaDaPagare(){
    this.dxs.currentScontrino.subscribe(
      (result) => {
        this.listaDaPagare = result
        console.log(`updateListaDaPagare(): ${JSON.stringify(this.listaDaPagare)}`)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  cancella(){
    console.log("Cancella()")
    this.router.navigate(['/orto'])
  }

  stampa(){
    console.log("stampa()")
    this.salvaScontrino()
    this.router.navigate(['/orto'])
  }

  salvaScontrino(){
    //DA COMPLETARE
    console.log("salvaScontrino()")
    let prezzoScontrino = 0
    this.listaDaPagare.forEach((e) => prezzoScontrino+=e.prezzoTotale)
    this.rds.createScontrino(this.listaDaPagare, prezzoScontrino).subscribe(
      (response)=>{
        console.log(response)
    },
    (error) => {console.error(error)})
  }

}
