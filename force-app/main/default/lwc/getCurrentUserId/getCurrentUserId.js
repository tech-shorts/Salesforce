import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';

export default class GetCurrentUserId extends LightningElement {
    userId = Id;
}