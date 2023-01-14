import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcToastNotifications extends LightningElement {

    // Simple success message
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'This is Sample Success Notification',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    // to show info variant and mode is dismissable
    showInfoToast() {
        const evt = new ShowToastEvent({
            title: 'Info',
            message: 'This is Sample Info Notification',
            variant: 'info',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    //to show warning message and mode is pester
    showWarningToast() {
        const evt = new ShowToastEvent({
            title: 'Warning',
            message: 'This is Sample Warning Notification',
            variant: 'warning',
            mode: 'pester'
        });
        this.dispatchEvent(evt);
    }

    // to show error message and mode is sticky
    showErrorToast() {
        const evt = new ShowToastEvent({
            title: 'Error',
            message: 'This is Sample Error Notification',
            variant: 'error',
            mode: 'sticky'
        });
        this.dispatchEvent(evt);
    }
}