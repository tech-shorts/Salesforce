import { LightningElement } from 'lwc';
import NewLightningModal from 'c/newLightningModal';
export default class NewLightningModalOpener extends LightningElement {
    openModal() {
        NewLightningModal.open();
    }
}