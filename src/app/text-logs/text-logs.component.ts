import { Component, OnInit } from '@angular/core';
import {TextLog} from '../models/text-log.model';
import {TextLogService} from '../services/text-log/text-log.service';
@Component({
  selector: 'app-text-logs',
  templateUrl: './text-logs.component.html',
  styleUrls: ['./text-logs.component.css']
})
export class TextLogsComponent implements OnInit {

  constructor(private textLogSRV: TextLogService) { }
  textLogsArray: TextLog[] = []

  ngOnInit(){
    this.textLogsArray = this.textLogSRV.getExistingArray()
  }
}
