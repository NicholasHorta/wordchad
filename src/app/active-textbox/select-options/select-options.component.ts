import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})

export class SelectOptionsComponent {
  @Output() selectedOption = new EventEmitter<string>();
  @Input() optionsColor: string;

  selectedOptionHandler(event: Event){
    console.log(this.optionsColor)
    this.selectedOption.emit((event.target as HTMLInputElement).value);
  }
}
