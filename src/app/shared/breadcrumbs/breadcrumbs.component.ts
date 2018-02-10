import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor( private router: Router) {

      this.getDataRoute()
        .subscribe( data => {

          this.label = data.titulo;
          console.log(data);

      });
  }

  getDataRoute() {

    return this.router.events
    .filter( evento => evento instanceof ActivationEnd )
    .filter( ( evento: ActivationEnd)  => evento.snapshot.firstChild === null  )
    .map( (evento: ActivationEnd) => evento.snapshot.data );

  }

  ngOnInit() {
  }

}
