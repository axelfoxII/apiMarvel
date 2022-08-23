import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/servives/marvel.service';
import {Result} from '../../models/personajes.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  title='Character';
  idCharacter='';
  character:any={};
  characterDesc='';
  
  

  constructor(private marvelSvc:MarvelService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      
      this.idCharacter = params['id'];
    })

   }

  ngOnInit(){
    
  this.getIdCharacter();
  }


  getIdCharacter(){

    console.log(this.idCharacter);    
    this.marvelSvc.getCharacter(this.idCharacter).subscribe({

      next:(res)=>{
        
        let dataCharacter={
          name:res[0].name,
          description:res[0].description,
          thumbnailPath:res[0].thumbnail.path,
          thumbnailExtension:res[0].thumbnail.extension,
          modified:res[0].modified,
          urls:res[0].urls[0].url,  

        };
        this.character = dataCharacter;
        
       
        if (this.character.description === '') {

          this.characterDesc = 'No description'
          
        }else{
          this.characterDesc = this.character.description
        }
      },
      error:(err)=>{
        console.log(err);
      }
            
      
      
    })

  }


}
