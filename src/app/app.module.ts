import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludarComponent } from './saludar/saludar.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    PeliculasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
