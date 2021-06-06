import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})

export class SelectOptionsComponent {
  @Output() selectedOption = new EventEmitter<string>();

  selectedOptionHandler(event: Event){
    this.selectedOption.emit((event.target as HTMLInputElement).value);
  }
}
