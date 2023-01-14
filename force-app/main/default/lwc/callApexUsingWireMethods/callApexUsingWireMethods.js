import { LightningElement, wire, api } from 'lwc';
import getAllAccounts from '@salesforce/apex/LWC_Util.getAllAccounts';
import accountDetails from '@salesforce/apex/LWC_Util.accountDetails';

export default class CallApexUsingWireMethods extends LightningElement {
    @api recordId = '0012v00002J6XEMAA3';
    account;
    error;

    // wire method to property
    @wire(getAllAccounts)
    accounts;
    
    // Wire Method With Params to function
    @wire(accountDetails, {accountId: '$recordId'})
    accDetails({data, error}){
        if(data){
            this.account = data;
            this.error = undefined;
        } else if(error){
            this.account = undefined;
            this.error = error;
        }
    }
}