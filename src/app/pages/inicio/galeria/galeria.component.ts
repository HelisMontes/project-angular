import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../../services/galeria.service';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  public rsJSON: any; 
  public rendergaleria: boolean = true;
  constructor(private galeriaService: GaleriaService) { 
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    =============================================*/
    this.galeriaService.getGaleria()
    .subscribe(res => {
      this.rsJSON =  res
    })
  }

  ngOnInit(): void {
    
  }

  callback(){
    if ( this.rendergaleria ) {
      this.rendergaleria = false;
      /*=============================================
      PINTEREST GRID
      =============================================*/

      $('.pinterest_grid').pinterest_grid({
        no_columns: 4, //Número de columnas
        padding_x: 10, //Márgenes internas horizontal
        padding_y: 10, //Márgenes internas vertical
        margin_bottom: 50, //Márgen externa inferor
        single_column_breakpoint: 769 //Punto de quiebre para una sola columna
      });

      /*=============================================
      EKKO LIGHTBOX
      =============================================*/

      $(document).on("click", "[data-toggle='lightbox']", function(e){

        e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
        $(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox

      })
    }
  }

}
