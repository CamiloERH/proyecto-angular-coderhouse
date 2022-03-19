import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {

	get contenidoCarrito(): IMovie[] {
		return this.moviesService.carrito;
	}

    constructor(private moviesService: MoviesService) {}
}
