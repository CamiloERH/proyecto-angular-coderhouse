import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

	@Input()
	movies!: IMovie[];

	constructor() { }

}
