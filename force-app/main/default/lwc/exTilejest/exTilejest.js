import { LightningElement, track } from 'lwc';

export default class ExTilejest extends LightningElement {
    @track tileAction;
    @track myActions = [
        {label: 'Edit', value: 'edit', iconName: 'utility:edit'},
        {label: 'Delete', value: 'delete', iconName: 'utility:delete'}
    ];

    handleAction(event) {
        // Get the value of the selected action
        this.tileAction = event.detail.action.value;
    }
}