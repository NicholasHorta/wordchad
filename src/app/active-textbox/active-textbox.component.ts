import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { TextLog } from '../models/text-log.model';
import { TextCountService } from '../services/text-count/text-count.service';
import { TextLogService } from '../services/text-log/text-log.service';
import { TitleCreatorService } from '../services/title-creator.service';

@Component({
  selector: 'app-active-textbox',
  templateUrl: './active-textbox.component.html',
  styleUrls: ['./active-textbox.component.css'],
})

export class ActiveTextboxComponent implements OnInit {

  constructor(private textCountSVC: TextCountService, private textLogSVC: TextLogService, private autoTitleSVC: TitleCreatorService) { }

  @ViewChild('textTitle') textLogTitle: ElementRef;
  @ViewChild('textBody') textLogBody: ElementRef;
  @Input() darkModeActive: boolean;

  textBoxData: string = '';
  wordCountSansSpace: number = 0;
  charCountSansSpace: number = 0;
  charCountWithSpaceAndReturns: number = 0;
  clearedTextBodyConfirmation: boolean = false;
  selectedOptionF: string;
  totalWordLimit: number;
  totalCharLimit: number;


  ngOnInit() {
    this.selectedOption('No Limit')
  }

  textBoxDataCollection() {
    this.textCountSVC.collectedText = this.textBoxData;
    this.textCountSVC.calculateCharacterAmt(this.textCountSVC.collectedText);
    this.wordCountSansSpace = this.textCountSVC.currentWordCount;
    this.charCountSansSpace = this.textCountSVC.currentCharCount;
    this.charCountWithSpaceAndReturns = this.textCountSVC.currentCharTotalWithSpaceAndReturns;
  }

  //!! Need to auto assign title through JSON
  sendTextLogToSVC() {
    let newLogTitle = '';
    if(this.textLogTitle.nativeElement.value === ''){
      newLogTitle = `${this.autoTitleSVC.autoTitleCreator()} ${this.autoTitleSVC.autoTitleCreator()}`
    } else {
      newLogTitle = this.textLogTitle.nativeElement.value;
    }
    
    const newLogBody = this.textLogBody.nativeElement.value === '' ? 'Got nothing here bro!' : this.textLogBody.nativeElement.value;
    const newLogWordCount = this.wordCountSansSpace;
    const newLogCharCount = this.charCountSansSpace;
    const newTextLog = new TextLog(newLogTitle, newLogBody, newLogCharCount, newLogWordCount);
    this.textLogSVC.logNew(newTextLog);
  }

  clearTextBody() {
    this.clearedTextBodyConfirmation = confirm(`Hey buddy, are you sure you want to clear the text, guy? This is NOT reversible friend...`);
    if (this.clearedTextBodyConfirmation) {
      this.textLogBody.nativeElement.value = '';
      this.wordCountSansSpace = 0;
      this.charCountSansSpace = 0;
      this.charCountWithSpaceAndReturns = 0;
    };
  }

  selectedOption(inputValue: string) {
    switch (inputValue) {
      case 'twitter':
        console.log('%cactive-textbox.component.ts line:63 HERE', 'color: #efa0c;', inputValue);
        this.selectedOptionF = inputValue;
        this.totalWordLimit = 0;
        this.totalCharLimit = 280;
        break;
      case 'ucas':
        this.selectedOptionF = inputValue;
        this.totalWordLimit = 0;
        this.totalCharLimit = 4000;
        break;
      case 'sms':
        this.selectedOptionF = inputValue;
        this.totalWordLimit = 0;
        this.totalCharLimit = 160;
        break;
      default:
        console.log('%cactive-textbox.component.ts line:65 inputValue', 'color: #ff7acc;', inputValue);
        this.selectedOptionF = inputValue;
        this.totalWordLimit = 0;
        this.totalCharLimit = 0;
    }
  }
}


  //? textBoxDataCollection() 
  //@ The function textBoxDataCollection runs on every keypress event
  //@ Collecting the string data from the main textarea through ngModel
  //@ Collected text data is sent to the TextCountService and stored as a string 
  //@ calcCharAmt Method is called with the collectedText variable (within the service) as a param 
  //@ This updates the variable the total amount/length of the strings tOTAL character sum incl: Spaces and returns
  //@ stringBreak function is called  -> REF text-count.service.ts