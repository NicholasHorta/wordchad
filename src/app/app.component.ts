import { Component, ElementRef, EventEmitter, Output} from '@angular/core';
import { TitleCreatorService } from './services/title-creator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logsViewStatus: boolean;
  
  @Output() xyz: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(){}

  darkModeActive: boolean = false;

  darkModeStatus($event: boolean){
    this.darkModeActive = $event;
  }

  toggleLogsView(item: boolean){
    this.logsViewStatus = item;
  }

}
