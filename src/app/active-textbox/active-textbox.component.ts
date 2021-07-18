import { Component, ElementRef, ViewChild, OnInit, Input, OnChanges } from '@angular/core';
import { TextLog } from '../models/text-log.model';
import { TextCountService } from '../services/text-count/text-count.service';
import { TextLogService } from '../services/text-log/text-log.service';
import { TitleCreatorService } from '../services/title-creator.service';
import { PlaceholderService }  from '../services/placeholder.service';

@Component({
  selector: 'app-active-textbox',
  templateUrl: './active-textbox.component.html',
  styleUrls: ['./active-textbox.component.css'],
  providers: [PlaceholderService]
})

export class ActiveTextboxComponent implements OnInit, OnChanges{

  constructor(private textCountSVC: TextCountService, private textLogSVC: TextLogService, private autoTitleSVC: TitleCreatorService, private placeholderSVC: PlaceholderService) { }

  @ViewChild('textTitle') textLogTitle: ElementRef;
  @ViewChild('textBody') textLogBody: ElementRef;
  @ViewChild('textBoxArea') textBoxArea: ElementRef;
  @ViewChild('mainPage') mainPage: ElementRef<HTMLDivElement>;
  @Input() darkModeActive: boolean;
  @Input() textLogViewState: boolean;

  dynPlaceholderText: string
  textBoxData: string = '';
  wordCountSansSpace: number = 0;
  charCountSansSpace: number = 0;
  charCountWithSpaceAndReturns: number = 0;
  clearedTextBodyConfirmation: boolean = false;
  selectedOptionType: string;
  totalWordLimit: number;
  totalCharLimit: number;
  optionColorCode: string;
  logId: number;

  ngOnInit() {
    this.selectedOption('Note');
    this.placeholderSVC.optionProperty = this.selectedOptionType;
  }

  ngOnChanges(){
    try {
      this.mainPage.nativeElement.classList.toggle('active-textbox__background-blur-active');
    } catch(err){
      //. On Initialization an error will be thrown, this is handling that initial error
      return
    }
  }

  textBoxDataCollection() {
    this.textCountSVC.collectedText = this.textBoxData;
    this.textCountSVC.calculateCharacterAmt(this.textCountSVC.collectedText);
    this.wordCountSansSpace = this.textCountSVC.currentWordCount;
    this.charCountSansSpace = this.textCountSVC.currentCharCount;
    this.charCountWithSpaceAndReturns = this.textCountSVC.currentCharTotalWithSpaceAndReturns;
  }

  sendTextLogToSVC() {
    // Title Generate if none present
    let newLogTitle = '';
    if(this.textLogTitle.nativeElement.value === ''){
      newLogTitle = `${this.autoTitleSVC.autoTitleCreator()} ${this.autoTitleSVC.autoTitleCreator()}`;
    } else {
      newLogTitle = this.textLogTitle.nativeElement.value;
    }
    // Timestamp Generate
    const timeRef = String(new Date()).split(' ');
    const logTime = `${timeRef[0]} ${timeRef[1]} ${timeRef[2]} ${timeRef[3]} ${timeRef[4]}`;
    
    // Implement other instances of text
    const newLogBody = this.textLogBody.nativeElement.value === '' ? 'Got nothing here bro!' : this.textLogBody.nativeElement.value;
    const newLogWordCount = this.wordCountSansSpace;
    const newLogCharCount = this.charCountSansSpace;
    const newTotalCharCount = this.charCountWithSpaceAndReturns;
    const newLogId = this.logId;
    const optionId = this.selectedOptionType;
    const colorCode = this.optionColorCode;
    const newTextLog = new TextLog(newLogTitle, newLogBody, newLogCharCount, newLogWordCount, newTotalCharCount, newLogId, optionId, colorCode, logTime);
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
      case 'Important':
        this.selectedOptionType = inputValue;
        this.totalWordLimit = 0;
        this.optionColorCode = 'var(--option-red)'; 
        this.totalCharLimit = 0;
        break;
      case 'To Do':
        this.selectedOptionType = inputValue;
        this.totalWordLimit = 0;
        this.optionColorCode = 'var(--option-lime)';  
        this.totalCharLimit = 0;
        break;
      case 'List':
        this.selectedOptionType = inputValue;
        this.totalWordLimit = 0;
        this.optionColorCode = 'var(--option-blue)';
        this.totalCharLimit = 0;
        break;
      case 'Reminder':
        this.selectedOptionType = inputValue;
        this.totalWordLimit = 0;
        this.optionColorCode = 'var(--option-purple)';
        this.totalCharLimit = 0;
        break;
      case 'Tweet':
        this.selectedOptionType = inputValue;
        this.totalWordLimit = 0;
        this.optionColorCode = 'var(--option-cyan)';
        this.totalCharLimit = 280;
        break;
      default:
        this.selectedOptionType = inputValue;
        this.totalWordLimit = 0;
        this.optionColorCode = 'var(--option-pink)';
        this.totalCharLimit = 0;
    }   
    this.placeholderSVC.generatePlaceholderText(inputValue);
    this.dynPlaceholderText = this.placeholderSVC.optionProperty
  }
}


  //? textBoxDataCollection() 
  //@ The function textBoxDataCollection runs on every keypress event
  //@ Collecting the string data from the main textarea through ngModel
  //@ Collected text data is sent to the TextCountService and stored as a string 
  //@ calcCharAmt Method is called with the collectedText variable (within the service) as a param 
  //@ This updates the variable the total amount/length of the strings tOTAL character sum incl: Spaces and returns
  //@ stringBreak function is called  -> REF text-count.service.ts