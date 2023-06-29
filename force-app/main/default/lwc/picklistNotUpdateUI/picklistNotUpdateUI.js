import { LightningElement, track } from 'lwc';

export default class PicklistNotUpdateUI extends LightningElement {
    @track fruitsOptionsList = [ { label: 'apple', value: 'apple'},
                                 { label: 'banana', value: 'banana'}];

    addOrange(){
        //It will actually adds object to array, but in UI its won't update
        this.fruitsOptionsList.push({label: 'Orange', value: 'Orange'});
        console.log(this.fruitsOptionsList);// here in log showing, but not updating in UI
    }

    addCherry(){
        let cherryFuit = {label: 'cherry', value: 'cherry'};
        // this is the workaround to update UI 
        this.fruitsOptionsList = [...this.fruitsOptionsList, cherryFuit];
    }
}