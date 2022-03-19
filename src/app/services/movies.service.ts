import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    private _movies: IMovie[] = [
        {
            id: 1,
            title: 'Shrek',
            content:
                'Un ogro llamado Shrek vive en su pantano, pero su preciada soledad se ve súbitamente interrumpida por la invasión de los ruidosos personajes de los cuentos de hadas.',
            src: 'https://icons.iconarchive.com/icons/firstline1/movie-mega-pack-2/256/Shrek-icon.png',
        },
        {
            id: 2,
            title: 'Shrek 2',
            content:
                'Shrek, nuestro ogro favorito, debe enfrentarse al mayor de los problemas que se podía imaginar: conocer a sus suegros.',
            src: 'https://icons.iconarchive.com/icons/danzakuduro/english-movies-2/256/Shrek-2-icon.png',
        },
        {
            id: 3,
            title: 'Shrek 3',
            content:
                'Cuando el Rey Harold enferma, Shrek y la Princesa Fiona descubren que tendrán que dirigir la Tierra Muy Muy Lejana a menos que puedan encontrar al Príncipe Artie, el verdadero heredero, y llevarlo a casa.',
            src: 'https://icons.iconarchive.com/icons/jake2456/movie-pack-7/256/Shrek-the-Third-icon.png',
        },

    ];

    private _carrito: IMovie[] = [];

    addMovie(index: number) {
        if (this.carrito.find((movie) => movie.id === index)) {
            return;
        }
        let movie = this.movies.find((movie) => movie.id === index);
        this._carrito.push(movie!);
        console.log(this._carrito);
    }

    get carrito() {
        return [...this._carrito];
    }

    get movies() {
        return [...this._movies];
    }

    constructor() {}
}
