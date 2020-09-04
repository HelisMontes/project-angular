import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { UsuariosService } from '../../services/usuarios.service';

//Esto es la clase que se necesita para navegar entre páginas
import { ActivatedRoute } from '@angular/router';

//Esto es la clase que se necesita para trabajar con formularios
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  public articuloJSON:any;
  public resJSON:any;
  public contenidoArticulo:any;
  public login:boolean=false;
  public usuario:string;
  public password: string;
  public usuarioJSON:any;
  public resUsuario: any;
  public validarLogin:boolean=true

  constructor(activatedRoute: ActivatedRoute, private http: ArticulosService, private usuariosService: UsuariosService ) { 
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

  onSubmit(f: NgForm){
    console.log("usuario ",this.usuario, "password ", this.password)
    this.usuariosService.getUsuarios()
    .subscribe(result =>{
      this.usuarioJSON = result;
      this.resUsuario = this.usuarioJSON.find(res => {
        if(res.usuario == this.usuario && res.password == this.password){
          return true
        }else{
          false
        }
      })
      this.resUsuario ? this.login=true : this.validarLogin=false
    })
  }

}
