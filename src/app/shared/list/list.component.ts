import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.apiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
    
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

  // ********** FAVORITAR ********** //
  toggleFavorite(pokemonName: string): void {
    this.apiService.toggleFavorite(pokemonName);
  }

  isFavorite(pokemonName: string): boolean {
    return this.apiService.isFavorite(pokemonName);
  }

  // ********** COMENTAR ********** //

  openPokemonDetails(pokemonName: string): void {
    this.router.navigate(['/pokemon', pokemonName]);
  }
}