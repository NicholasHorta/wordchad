import { TextLogService } from '../text-log/text-log.service';
import { Injectable } from '@angular/core';

@Injectable()

export class TextCountService {
    constructor(private textLogSVC: TextLogService) { };
    collectedText: string;
    currentCharCount: number;
    currentWordCount: number;
    currentCharTotalWithSpaceAndReturns: number;
    selectedOptionAmt: number = 280;
    newLineCheck: RegExp = /[\n]{1,}/g;

    stringBreak(textBodyString: string) {
        this.currentCharCount = 0;
        this.currentWordCount = 0;
        this.currentCharTotalWithSpaceAndReturns = 0;
        const newLineHandler = textBodyString.replace(this.newLineCheck, ' ');
        newLineHandler.split(' ').map(i => i === '' ? i : this.currentWordCount++);
        console.log(textBodyString.split('').map(i => this.currentCharTotalWithSpaceAndReturns++));
        textBodyString.split('').map(i => i === ' ' || i === '\n' ? i : this.currentCharCount++);
    }

    calculateCharacterAmt(collectedText: string) {
        this.currentCharCount = collectedText.length
        this.stringBreak(collectedText)
    }
}

//? stringBreak() 
//@ collectedText variable with the current textarea value is passed as a param
//@ CharCount, WordCount & CharTotal assigned ZERO sum starting values
//@ These values accumulate conditionally according to the ternary outcome 
//@ The textBodyString is split and the resulting array mapped over where the item within each is evaluated and return an increment to their appointed property 
//@ The newLineCheck runs through the string and replaces any '\n' (carriage return) with a space, to contribute to the TOTAL word count