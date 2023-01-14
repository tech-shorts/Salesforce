import { LightningElement,api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class LwcQuickActionButton extends LightningElement {

    // to close the model window 
    handleCancel(){
        this.dispatchEvent(new CloseActionScreenEvent());
      }
}