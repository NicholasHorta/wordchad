import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})

export class SelectOptionsComponent implements OnInit {

  @ViewChild('twitterOption') twitterOption: ElementRef;
  @ViewChild('smsOption') smsOption: ElementRef;
  @ViewChild('ucasOption') ucasOption: ElementRef;

  constructor() { }



  ngOnInit(): void {
  }




}
