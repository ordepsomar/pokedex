import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
  favorites: string[] = [];
  comments: { [pokemonName: string]: string[] } = {};
 
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }


  // ********** FAVORITAR ********** //
  toggleFavorite(pokemonName: string): void {
    if (this.isFavorite(pokemonName)) {
      this.favorites = this.favorites.filter(name => name !== pokemonName);
    } else {
      this.favorites.push(pokemonName);
    }
  }

  isFavorite(pokemonName: string): boolean {
    return this.favorites.includes(pokemonName);
  }

  // ********** COMENTAR ********** //
  addComment(pokemonName: string, comment: string): void {
    if (!this.comments[pokemonName]) {
      this.comments[pokemonName] = [];
    }
    this.comments[pokemonName].push(comment);
  }

  getComments(pokemonName: string): string[] {
    return this.comments[pokemonName] || [];
  }
}


