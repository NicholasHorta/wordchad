import {TextLogService} from '../text-log/text-log.service';
import {Injectable} from '@angular/core';

@Injectable()

//! Text Count Service
//!! Calculate characters and words amount
//!! Avoid specials/punctuation - Regex

export class TextCountService {
    constructor(private textLogSVC: TextLogService){};
    collectedText: string = '';
    currentCharCount: number = 0;
    currentWordCount: number = 0;
    currentCharCountWithSpaceAndReturns: number = 0;
    selectedOptionAmt: number = 280;
    newLineCheck: RegExp = /[\n]{1,}/g;


    stringBreak(textBodyString: string){
        this.currentCharCount = 0;
        this.currentWordCount = 0;
        this.currentCharCountWithSpaceAndReturns = 0;
        const newLineHandler = textBodyString.replace(this.newLineCheck,  ' ');
        newLineHandler.split(' ').map(i =>  i === '' ? i : this.currentWordCount++);
        textBodyString.split('').map(i =>  this.currentCharCountWithSpaceAndReturns++);
        textBodyString.split('').map(i =>  i === ' ' || i === '\n' ? i : this.currentCharCount++);
        console.log(this.currentCharCount, '--Char');
        console.log(this.currentWordCount, '--Word');
    }

    calcCharAmt(collectedText: string){
        this.currentCharCount = collectedText.length
        console.log('%ctext-count.service.ts line:34 this.currentCarCount', 'color: #007acc;', this.currentCharCount);
        this.stringBreak(collectedText)
    }
}

//@ Returns workings - still need to fix
// const wordcount = textBodyString.split(' ').map(i =>  {
//     if(this.newLineCheck.test(i)){
//          return i.replace(this.newLineCheck, ' ');
//     } else {
//         return i;
//     }
// });