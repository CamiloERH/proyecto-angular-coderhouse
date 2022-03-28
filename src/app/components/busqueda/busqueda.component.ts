import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {

    query: string = '';
    movies!: IMovie[];
    debouncer: Subject<string> = new Subject();
    subscription!: Subscription;

    constructor(private moviesService: MoviesService) {}

    buscar() {
        this.moviesService.searchMovie(this.query).subscribe((movies) => {
            console.log(movies.results);
            this.movies = movies.results;
        });
    }

    ngOnInit(): void    {
        this.subscription = this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
            console.log('debounce', value);
        });
    }

    onInput() {
        this.debouncer.next( this.query );
    }

    ngOnDestroy() {
		console.log('onDestroy');
		this.subscription.unsubscribe();
	}
}
