import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {


      this.regresaObservable()
         .subscribe(
            numero => console.log( 'Subs', numero), // cuando viene del next
            error => console.error( 'Error en el obs', error) ,
            () => console.log('Termino')
          );
   }


  ngOnInit() {
  }


  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 1;

      let intervalo = setInterval( () => {

        contador += 1;

        observer.next( contador );

        if ( contador === 3 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        // if ( contador === 2 ) {
        //   observer.error('Auxilio');
        // }

      }, 1000);


    }).retry(2);
  }

}
