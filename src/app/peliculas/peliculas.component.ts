import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { IPelicula } from '../models/interfaces'

@Component({
	selector: 'app-peliculas',
	templateUrl: './peliculas.component.html',
	styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {}

	showMovie(pelicula: any){
		console.log(pelicula)
		this.showMovies.emit(pelicula)
	}
	@Input() peliculas: IPelicula[] = []

	@Input() resumen: string = ''

	@Output()showMovies = new EventEmitter<string>()
}
