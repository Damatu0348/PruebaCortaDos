import { Component, OnInit } from '@angular/core';
import { Character } from '../../Interfaces/character';
import { RickAndMortyService } from '../../Services/rick-morty.service';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  imports: [CharacterCardComponent, HttpClientModule, CommonModule],
  providers: [RickAndMortyService]
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 1;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters(this.currentPage).subscribe((data) => {
      this.characters = data.results;
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCharacters();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
  onSearch(event: any): void {
    const query = event.target.value;
    if (query) {
      this.rickAndMortyService.getCharacters(query).subscribe((data) => {
        this.characters = data.results;
      });
    } else {
      this.loadCharacters();
    }
  }
}