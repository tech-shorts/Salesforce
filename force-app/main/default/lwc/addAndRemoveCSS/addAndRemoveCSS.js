import { LightningElement } from 'lwc';

export default class AddAndRemoveCSS extends LightningElement {
    // using classList method
    addBorderRight(){
        // This will add new class to existing classes 
        this.template.querySelector('[data-id="myDiv"]').classList.add('slds-border_right');
        
        // also add like this to replace entire class and add your classes
        //this.template.querySelector('[data-id="myDiv"]').className='slds-border_right slds-border_left';
    }

    // Remove class using remove method
    removeBorderRight(){
        this.template.querySelector('[data-id="myDiv"]').classList.remove('slds-border_right');
    }
    
    // Using variables to assign classes and bing this variable in html elements
    addRemoveClass; // It's used to set class 
    addBorderTopAndBottom(){
        this.addRemoveClass = 'slds-border_top slds-border_bottom';
    } 

    removeBorderTop(){
        this.addRemoveClass = 'slds-border_bottom';
    } 
}