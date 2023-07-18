import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Module Routing
import { RoutingModule } from './routing.module';


//Module
import { SharedModule } from '../shared/shared.module';

//Pages
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCommentsComponent } from './pokemon-comments/pokemon-comments.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonDetailsComponent,
    PokemonCommentsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }