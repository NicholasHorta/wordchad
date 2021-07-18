import { Injectable } from '@angular/core';
import placeholderJSON from '../../assets/JSON/placeholder.json'


@Injectable({
    providedIn: 'root'
})

export class PlaceholderService {

    placeholderText: string; 
    optionProperty: string;

    generatePlaceholderText(optProp: string) {
        optProp = optProp.toLocaleLowerCase()
        let setOptionProperty = placeholderJSON.placeholders[optProp]
        setOptionProperty = setOptionProperty[Math.floor(Math.random() * placeholderJSON.placeholders[optProp].length)]
        this.optionProperty = setOptionProperty + '....';
    }
}