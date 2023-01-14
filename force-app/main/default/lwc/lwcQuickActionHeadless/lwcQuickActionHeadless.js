import { LightningElement, api } from 'lwc';

export default class LwcQuickActionHeadless extends LightningElement {
    
    // This method executes on quick action button clicks
    @api invoke() {
        // here we can call apex method, but this method returns nothing. 
        console.log("Quick action called");
    }
}