import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

    // console.log('progreso:', this.progreso);
   }

  ngOnInit() {
    // console.log('leyenda:', this.leyenda);
  }

  onChanges( event:number ){
    console.log(event);
  }


  cambiarValor( valor: number){

    if (this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if (this.progreso <=0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );

  }
}
