import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

	get movies() {
		return this.moviesService.movies;
	}

	constructor( private moviesService: MoviesService ) { }

	addMovie( index: number): void {
		this.moviesService.addMovie( index );
	}
}
