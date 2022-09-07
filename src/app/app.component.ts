import { Component } from '@angular/core'
import { IPelicula } from './models/interfaces'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'supers'

	public peliculas: IPelicula[] = [
		{ nombre: 'Titanic', anio: 1997, director: 'Cameron' },
		{ nombre: 'True Lies', anio: 1992, director: 'Cameron' },
		{ nombre: 'Terminator', anio: 1982, director: 'Cameron' },
	]
	showList($event:string){
		console.log($event)
	}
	public resumen: string = 'A continuación te vamos a mostrar la película.'
}
