import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component'
import { ArticuloComponent } from './pages/articulo/articulo.component'

const routes: Routes = [

{path:  '', component: InicioComponent},
{path:  'articulo/:id', component: ArticuloComponent},
//SI QUIEREN INGRESAR UNA RUTA QUE NO EXISTA REDIRECCIONA A LA PAGINA PRINCIPAL
{path: '**', pathMatch:'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
