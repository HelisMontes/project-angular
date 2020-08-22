import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    =============================================*/
    this.articulosService.getArticulo()
    .subscribe(res =>{
      console.log("Resultado de Articulos ", res)
    })
  }

  ngOnInit(): void {
  }

}
