import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/servives/marvel.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title='Characters';

  constructor(private marvelSvc:MarvelService, private router:Router) { }
  characters?:Observable<any>;

  ngOnInit(){

    this.getAllCharacters();

  }


  getAllCharacters(){

    this.characters= this.marvelSvc.getCharacters();

  }

  getCharacter(id:string){

    this.router.navigate(['/character/',id]);

  }

}
