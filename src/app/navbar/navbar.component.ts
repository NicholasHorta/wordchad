import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sendOut = new EventEmitter<string>()

  @ViewChild('sitename') sitename!: ElementRef;
  @ViewChild('icon1') iconOne!: ElementRef;
  @ViewChild('icon2') iconTwo!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.sitename.nativeElement.classList.toggle('darkmode')
    this.iconOne.nativeElement.classList.toggle('darkmode')
    this.iconTwo.nativeElement.classList.toggle('darkmode')
    this.sendOut.emit('darkmode')
  }

}
