import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { TextLog } from '../models/text-log.model';
import { TextCountService } from '../services/text-count/text-count.service';
import { TextLogService } from '../services/text-log/text-log.service';

@Component({
  selector: 'app-active-textbox',
  templateUrl: './active-textbox.component.html',
  styleUrls: ['./active-textbox.component.css'],
})

export class ActiveTextboxComponent {
  
  constructor(private textCountSVC: TextCountService, private textLogSVC: TextLogService) { }


  @ViewChild('textTitle') textLogTitle: ElementRef;
  @ViewChild('textBody') textLogBody: ElementRef;


  textBoxData: string = '';
  wordCountSansSpace: number = 0;
  charCountSansSpace: number = 0;
  charCountWithSpaceAndReturns: number = 0;
  clearedTextBody: boolean = false;

  // Collecting the string data from the main textarea through ngModel
  // Collected text data is sent to the TextCountService and stored as a string 
  // Method is called with the collected text as a param and calculates TOTAL character sum incl: Spaces and returns
  // We then 
  textBoxDataCollection() {
    this.textCountSVC.collectedText = this.textBoxData;
    this.textCountSVC.calcCharAmt(this.textCountSVC.collectedText);
    this.wordCountSansSpace = this.textCountSVC.currentWordCount;
    this.charCountSansSpace = this.textCountSVC.currentCharCount;
    this.charCountWithSpaceAndReturns = this.textCountSVC.currentCharCountWithSpaceAndReturns;
  }

  //!! Need to auto assign title through JSON
  sendTextLogToSVC(){
    const newLogTitle = this.textLogTitle.nativeElement.value === '' ? 'No Title' : this.textLogTitle.nativeElement.value;
    const newLogBody = this.textLogBody.nativeElement.value === '' ? 'Got nothing here bro!' : this.textLogBody.nativeElement.value;
    const newLogWordCount = this.wordCountSansSpace;
    const newLogCharCount = this.charCountSansSpace;
    const newTextLog = new TextLog(newLogTitle, newLogBody, newLogCharCount, newLogWordCount);
    this.textLogSVC.logNew(newTextLog);
  }

  clearTextBody(){
    this.clearedTextBody = confirm('Are you sure you want to clear the text? This is NOT reversible. So don\'t get pissed at your PC if you choose to do it...');
    if(this.clearedTextBody) {
      this.textLogBody.nativeElement.value = '';
      this.wordCountSansSpace = 0;
      this.charCountSansSpace = 0;
      this.charCountWithSpaceAndReturns = 0;
      //!! Need to reset the counts 
    };
  }

}
