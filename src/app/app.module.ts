import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaProductosComponent,
    NotFoundComponent,
    RegistroComponent,
    CarritoComponent,
    IniciarSesionComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
