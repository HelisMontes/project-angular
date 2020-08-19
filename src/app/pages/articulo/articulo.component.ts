import { Component, OnInit } from '@angular/core';

//Esto es la clase que se necestia para navegar entre páginas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
