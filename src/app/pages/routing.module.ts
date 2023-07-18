import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCommentsComponent } from './pokemon-comments/pokemon-comments.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'details/:id',
    component: PokemonDetailsComponent
  },
  {
    path: 'comments/:pokemonName',
    component: PokemonCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }