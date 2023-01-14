import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ExToastMessage extends LightningElement {
    showNotification() {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Hello World',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}