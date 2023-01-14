import { LightningElement, api, track } from 'lwc';
import accountDetails from '@salesforce/apex/LWC_Util.accountDetails';
import getAllAccounts from '@salesforce/apex/LWC_Util.getAllAccounts';

export default class CallApexUsingImperativeMethod extends LightningElement {
    @api recordId;
    accounts;
    revenue;
    error;
    
    // Simple way of calling, without parameters
    handleGetAccounts(){
        getAllAccounts()
            .then((data) =>{
                this.accounts = data;
                this.error = undefined;
            })
            .catch((error) =>{
                this.accounts = undefined;
                this.error = error;
            })
    }

    // Imperative calling with parameters
    handleRevenue(){
        accountDetails({accountId: this.recordId})
            .then((data) =>{
                this.revenue = data.AnnualRevenue;
                this.error = undefined;
            })
            .catch((error)=>{
                this.revenue = undefined;
                this.error = error;
            });
    }
}