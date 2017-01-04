import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class LoadMovieDBService {

    constructor(private http: Http) { }

    getMovieListAsObservable() {
        return this.http.get("./assets/db/movieDB.json");
    }

}