import { LightningElement, api, wire } from 'lwc';
import {getRecord, getFieldValue, updateRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import OPPORTUNITY_NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Opportunity.Account.Name';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Opportunity.Account.Id';

const fields = [OPPORTUNITY_NAME_FIELD, ACCOUNT_NAME_FIELD, ACCOUNT_ID_FIELD];

export default class UpdateRecordUsingUiRecordApi extends LightningElement {
    @api recordId; // get the current record id

    // Wire method to get the data of fields
    @wire(getRecord, { recordId: '$recordId', fields })
    opportunity;

    updateAccount(){
        /*
        * we can access field values directly referencing the value
        * or you can use also use getFieldValue to get the value
        */
        let oppName = getFieldValue(this.opportunity.data, OPPORTUNITY_NAME_FIELD);
        //let oppName = this.opportunity.data.fields.Name.value; // Also access this way
        let accName = this.opportunity.data.fields.Account.value.fields.Name.value;
        let accId = getFieldValue(this.opportunity.data, ACCOUNT_ID_FIELD);

        if(oppName != accName){
            /* 
             * create an object of record which you are going to update, 
             * Id field is mandatory, then add fields which are going to update
             */
            let fields = {
                Id: accId,
                Name: oppName
            }
            const recordInput = { fields };
            updateRecord(recordInput)
            .then(() =>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success!',
                        message: 'Account name updated successfully',
                        variant: 'success'
                    })
                )
            })
            .catch(error =>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error!',
                        message: 'Something went wrong while updating account',
                        variant: 'error'
                    })
                )
            })
        } else{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'It\'s already updated',
                    variant: 'success' 
                })
            );
        }
    }
}