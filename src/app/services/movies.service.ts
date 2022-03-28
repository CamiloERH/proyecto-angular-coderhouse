import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    
    private apiUrl: string = 'https://api.themoviedb.org/3';
    private apiKey: string = 'af6a4349b4a8ce0842fe540bbd8ee9ce';

    constructor( private http: HttpClient ) {}

    searchMovie(query: string): Observable<any> {
		const url = `${ this.apiUrl }/search/movie?api_key=${ this.apiKey }&language=es&query=${query}&page=1`;
		return this.http.get<any>( url );
	}


   
}
