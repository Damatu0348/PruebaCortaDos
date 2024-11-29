import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CharacterListComponent } from "./RickMorty/Components/character-list/character-list.component";


@Component({
  selector: 'app-root',
  imports: [CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'appPruebaCorta';
  searchQuery: any;
  ngOnInit(): void {
    initFlowbite();
  }
}

