import { LightningElement , wire} from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';

export default class GetCurrentUserDetails extends LightningElement {
    userId = Id;
    name;
    email;
    error;

    @wire(getRecord, { recordId: Id, fields: [NAME_FIELD, EMAIL_FIELD]}) 
    userDetails({error, data}) {
        if (data) {
            this.name = data.fields.Name.value;
            this.email = data.fields.Email.value;
        } else if (error) {
            this.error = error ;
        }
    }
}