import {Component, ViewChild, ElementRef, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'toggle-logs-view',
    templateUrl: './toggle-logs-view.component.html',
    styleUrls: ['./toggle-logs-view.component.css']
})

export class ToggleLogsViewComponent implements OnInit {
  // Text Logs Component View Status
  textLogsViewStatus: boolean;
  @ViewChild('toggleViewFolder') toggleLogsViewElem: ElementRef;
  @Output() toggleLogsView: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.textLogsViewStatus = false;
  }

  setTextLogsViewStatus() {
    this.textLogsViewStatus = !this.textLogsViewStatus
    this.toggleLogsView.emit(this.textLogsViewStatus)
  }
}