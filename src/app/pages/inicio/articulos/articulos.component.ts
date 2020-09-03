import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public resJSON: any
  constructor(private articulosService: ArticulosService) {
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    =============================================*/
    this.articulosService.getArticulo()
    .subscribe(res =>{
      this.resJSON = res;
    })
  }

  ngOnInit(): void {
  }

}
