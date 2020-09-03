import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

//Esto es la clase que se necestia para navegar entre páginas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  public articuloJSON:any;
  public resJSON:any;
  public contenidoArticulo:any;

  constructor(activatedRoute: ActivatedRoute, private http: ArticulosService ) { 
    this.http.getArticulo()
    .subscribe(res => {
      this.articuloJSON = res;
      this.resJSON = this.articuloJSON.find(result => {
        return result.url == activatedRoute.snapshot.params["id"]; //activatedRoute.snapshot.params["id"] de esta manera es que se reciben los datos por URL
      })
      this.contenidoArticulo = this.resJSON.contenido;
    })
    
    
  }

  ngOnInit(): void {
  }

}
