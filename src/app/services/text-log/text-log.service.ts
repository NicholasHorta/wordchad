import {EventEmitter} from '@angular/core';
import {Injectable} from '@angular/core';
import {TextLog} from '../../models/text-log.model';
@Injectable()

// Copy the text 
// Store the saved array items and current text according to time, have the option for it



export class TextLogService {
    
    textLogsArray: TextLog[] = [{title: 'Shoob', body: 'oavbdvobandpovnadivnadn', charAmt: 44, wordAmt: 17, totalAmt: 60, logId: 1}];

    logNew(log: TextLog){
        this.textLogsArray.push(log)
    }

    getExistingArray(){
        return this.textLogsArray
    }

    removeItemFromArray(){

    }
   
}