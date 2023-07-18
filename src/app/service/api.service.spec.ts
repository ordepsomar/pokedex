import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve alternar o status de favorito', () => {
    const pokemonName = 'pikachu';

    expect(service.isFavorite(pokemonName)).toBe(false);

    service.toggleFavorite(pokemonName);
    expect(service.isFavorite(pokemonName)).toBe(true);

    service.toggleFavorite(pokemonName);
    expect(service.isFavorite(pokemonName)).toBe(false);
  });

  it('deve adicionar comentário a um pokémon', () => {
    const pokemonName = 'charizard';
    const comment = 'Ótimo Pokemon para batalhas.';

    expect(service.getComments(pokemonName)).toEqual([]);

    service.addComment(pokemonName, comment);
    expect(service.getComments(pokemonName)).toEqual([comment]);
  });
});
