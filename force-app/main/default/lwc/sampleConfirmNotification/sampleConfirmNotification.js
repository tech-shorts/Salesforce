import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';

export default class SampleConfirmNotification extends LightningElement {
    async handleConfirm() {
        const result = await LightningConfirm.open({
            message: 'This is a sample Confirm message',
            variant: 'headerless',
            label: 'this is the sample label value',
        });
    }
}