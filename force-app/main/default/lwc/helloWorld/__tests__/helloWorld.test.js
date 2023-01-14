import { createElement } from 'lwc';
import helloWorld from 'c/helloWorld';

describe('c-hello-world', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays greeting', () => {
        // Create element
        const element = createElement('c-hello-world', {
            is: helloWorld
        });
        document.body.appendChild(element);

        let inputBox = element.shadowRoot.querySelector('lightning-input');
        inputBox.value = 'World';
        inputBox.dispatchEvent(new CustomEvent('change'));

        return Promise.resolve()
        .then(() => {
            // Verify displayed greeting
            const div = element.shadowRoot.querySelector('h1');
        expect(div.textContent).toBe('Hello World');
        });
       
    });
});