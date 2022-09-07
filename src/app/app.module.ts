import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludarComponent } from './saludar/saludar.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { PeliculasComponent } from './peliculas/peliculas.component';
=======
>>>>>>> 4c6ed6d092aa4fc9a7426f02bb740be6014e5ee2

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
<<<<<<< HEAD
    PeliculasComponent,
=======
>>>>>>> 4c6ed6d092aa4fc9a7426f02bb740be6014e5ee2
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
