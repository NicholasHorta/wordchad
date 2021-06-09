import { Injectable } from '@angular/core';
import titlecontent from '../../assets/JSON/autoTitle.json'
@Injectable({
  providedIn: 'root'
})

export class TitleCreatorService {

  constructor(){}
  randomNumberGen: number;

  autoTitleCreator(){
    this.randomNumberGen = Math.floor(Math.random() * titlecontent.randomWords.length + 1)
    return titlecontent.randomWords[this.randomNumberGen]
  }
}
