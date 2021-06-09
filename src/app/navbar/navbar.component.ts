import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleDarkModeStatus = new EventEmitter<boolean>();
  
  darkModeStatus: boolean = false;
  
  constructor() { }

  ngOnInit(): void {}

  toggleDarkMode(){
    this.darkModeStatus = !this.darkModeStatus;
    this.toggleDarkModeStatus.emit(this.darkModeStatus);
  }

}
