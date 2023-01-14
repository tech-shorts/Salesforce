import { LightningElement, api} from 'lwc';

export default class SaveCancelIconsForContactCard extends LightningElement {
    isViewMode = true;
    loading = false;
    @api recordId;

    FIELDS = [{name: 'FirstName' },
        {name: 'LastName'},
        {name: 'Phone', label: 'Home phone'}]
    
    // Switching forms, view and edit mode    
    switchForm(){
        this.isViewMode = !this.isViewMode;
    }

    // on submit, show the spinner
    handleSubmit(){
        this.loading = true;
    }

    // onsuccess, stop the loader spinner and change the form to view mode
    handleSuccess(){
        this.loading = false;
        this.switchForm();
    }

    // handle error message 
    handleError(evt){
        console.log('ERROR updating contact record:'+JSON.stringify(evt));
        this.loading = false;
    }
}