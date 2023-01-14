import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   @track myName;

   handleNameChange(event){
      this.myName = event.target.value;
   }
}