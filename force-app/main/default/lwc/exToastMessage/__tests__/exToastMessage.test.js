import {createElement} from 'lwc';
import {ShowToastEventName} from 'lightning/platformShowToastEvent';
import ExToastMessage from 'c/exToastMessage';

describe('c-ex-toast-message', () =>{
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Test Toast message', () => {
        const TOAST_TITLE = 'Success';
        const TOAST_MESSAGE = 'Hello World';
        const TOAST_VARIANT = 'success';

        // Create initial element
        const element = createElement('c-ex-toast-message', {
            is: ExToastMessage
        });
        document.body.appendChild(element);

        // Mock handler for toast event
        const handler = jest.fn();
        // Add event listener to catch toast event
        element.addEventListener(ShowToastEventName, handler);

        // Select button for simulating user interaction
        const buttonEl = element.shadowRoot.querySelector('lightning-button');
        buttonEl.click();

        return Promise.resolve().then(() => {
            // Check if toast event has been fired
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.title).toBe(TOAST_TITLE);
            expect(handler.mock.calls[0][0].detail.message).toBe(TOAST_MESSAGE);
            expect(handler.mock.calls[0][0].detail.variant).toBe(TOAST_VARIANT);
        });
    });
});