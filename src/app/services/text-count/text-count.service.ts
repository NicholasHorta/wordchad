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
        //? Place condition here 
        // textBodyString.split(' ').map(i =>  i === '' || this.newLineCheck.test(i) ? i : this.currentWordCount++);
        const wordcount = textBodyString.split(' ').map(i =>  {
            return i
        });
        const bppb = wordcount.map(i => {
            return i.replace(this.newLineCheck, '')
        })
        console.log(bppb)
        textBodyString.split('').map(i =>  this.currentCharCountWithSpaceAndReturns++);
        textBodyString.split('').map(i =>  i === ' ' || i === '\n' ? i : this.currentCharCount++);
        // console.clear() //% CLEAR
        console.log(this.currentCharCount, '--Char');
        console.log(this.currentWordCount, '--Word');
        // console.log(this.newLineCheck.test(), '--Regex');
    }

    calcCharAmt(collectedText: string){
        this.currentCharCount = collectedText.length
        this.stringBreak(collectedText)
        console.log(this.currentCharCount, '--Count Without')
    }

}