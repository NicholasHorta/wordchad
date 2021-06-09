import { Component, OnInit} from '@angular/core';
import { TitleCreatorService } from './services/title-creator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private titleCreator: TitleCreatorService){}

  darkModeActive: boolean = false;

  darkModeStatus($event: boolean){
    this.darkModeActive = $event;
  }



}
