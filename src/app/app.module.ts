//Importa la clase BrowserModule, para buscar modulos de Angular.
import { BrowserModule } from '@angular/platform-browser';

//Importa la clase NgModule es el módulo raiz de Angular.
import { NgModule } from '@angular/core';

// AppComponent es el componente principal de Angular
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './pages/inicio/articulos/articulos.component';
import { FormularioComponent } from './pages/inicio/formulario/formulario.component';
import { GaleriaComponent } from './pages/inicio/galeria/galeria.component';
import { HeaderComponent } from './pages/inicio/header/header.component';
import { MouseComponent } from './pages/inicio/mouse/mouse.component';
import { SlideshowComponent } from './pages/inicio/slideshow/slideshow.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';

//Los decoradores son funciones que modifican clases de javascript
@NgModule({

//Las declaraciones son las clases de vistas que pertenecen a ese módulo
  declarations: [
    AppComponent,
    ArticulosComponent,
    FormularioComponent,
    GaleriaComponent,
    HeaderComponent,
    MouseComponent,
    SlideshowComponent,
    InicioComponent,
    ArticuloComponent
  ],

  //Importamos otro módulos cuya clases exportadas sean necesarias para las platillas de 
  // de componentes declaradas en este módulo
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

   // Los proveedores son los creadores de servicios que este módulo contribuye a la recolección 
   // global de servicios; Se vuelven accesibles en todas las partes de la aplicación. 
   // Esto lo habilitamos cuando invocamos servicios desde una base de datos.
  providers: [],
  bootstrap: [AppComponent]
})

//Exportamos la clase del módulo raíz para poder ser invocada en otros archivos
export class AppModule { }
