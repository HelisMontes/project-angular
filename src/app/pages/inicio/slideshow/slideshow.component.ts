import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../../../services/slideshow.service';
import { from } from 'rxjs';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  //VARIABLES PÚBLICAS O PRIVADAS
  public resJSON: any;
  public renderSlide:boolean = true;
  constructor(private slideshowService: SlideshowService) { 
    
    /*=============================================
    RECIBIENDO DATOS DINAMICOS
    =============================================*/

    this.slideshowService.getSlideshow()
    //subscribe trae la respuesta de la peticion
    .subscribe(respuesta => {
        this.resJSON = respuesta;
    })

  }

  ngOnInit(): void {
  }

  callback(){

		if(this.renderSlide){

			this.renderSlide = false;

			/*=============================================
			JD SLIDER
			=============================================*/

			$('.slideshow').jdSlider({

				wrap:'.slide-inner', //Especificar el slide que vamos a usar
				isAuto: true, //Inicia la animación automáticamente
				isLoop: true, //Al finalizar vuelve a comenzar
				interval: 7000, //Tiempo por cada slide
				isCursor:true //Pausar animación con el mouse

			});
		}
	}

}
