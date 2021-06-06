import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('qwe') item!: ElementRef;

  receivedInfo: string = ''

  giveMeInfo(ev: string){
    this.receivedInfo = ev
    console.log(this.receivedInfo)
    this.item.nativeElement.ownerDocument.body.classList.toggle('darkmodeBody')
    console.dir(this.item.nativeElement)
  }
}
