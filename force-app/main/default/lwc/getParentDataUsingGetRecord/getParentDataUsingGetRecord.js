import { LightningElement, wire, api } from 'lwc';
import { getRecord , getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Contact.Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Contact.Account.PHONE';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Contact.Account.INDUSTRY';

export default class GetParentDataUsingGetRecord extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, ACCOUNT_NAME_FIELD,ACCOUNT_PHONE_FIELD,ACCOUNT_INDUSTRY_FIELD]}) 
    contactRecord;

    get contactName(){
        // return this.contactRecord.data.fields.Name.value; // also get name from this.contactRecord.data JSON object
        return getFieldValue(this.contactRecord.data, NAME_FIELD);
    }

    get accountName(){
        // return this.contactRecord.data.fields.Account.value.fields.Name.value // also get name from this.contactRecord.data JSON object
        return getFieldValue(this.contactRecord.data, ACCOUNT_NAME_FIELD);
    }

    get accountPhone(){
        return getFieldValue(this.contactRecord.data, ACCOUNT_PHONE_FIELD);
    }

    get accountIndustry(){
        return getFieldValue(this.contactRecord.data, ACCOUNT_INDUSTRY_FIELD);
    }

}