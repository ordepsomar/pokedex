import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pokemon-comments',
  templateUrl: './pokemon-comments.component.html',
  styleUrls: ['./pokemon-comments.component.scss']
})
export class PokemonCommentsComponent implements OnInit {

  pokemonName: string = '';
  comment: string = '';
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemonName = params.get('pokemonName') || '';
      this.isLoading = true;
    });
  }

  addComment(): void {
    if (this.comment.trim() !== '') {
      this.apiService.addComment(this.pokemonName, this.comment);
      this.comment = '';
    }
  }

  getComments(): string[] {
    return this.apiService.getComments(this.pokemonName);
  }

}
