import LightningModal from 'lightning/modal';
import MyModal from 'c/myModal';

export default class GreetingPopupModal extends LightningModal {
    async openModel() {
        await MyModal.open({
            size: 'small',
            modalHeader: 'Sample Modal',
            content: 'This is popup modal sample content of body',
        });
    }
}