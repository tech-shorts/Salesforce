import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class SampleAlertNotification extends LightningElement {
    async handleAlert() {
        await LightningAlert.open({
            message: 'this is a sample alert message',
            theme: 'error', 
            label: 'Error!', 
        });
    }
}