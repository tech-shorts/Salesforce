import { createElement } from 'lwc';
import exTilejest from 'c/exTilejest';

describe('c-ex-tilejest', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Clicking on Edit option', () => {
        // Create element
        const element = createElement('c-ex-tilejest', {
            is: exTilejest
        });
        document.body.appendChild(element);

        // get lightning-tile
        let btnElement = element.shadowRoot.querySelector('lightning-tile'); 
        btnElement.dispatchEvent(new CustomEvent('performAction', { detail: { action: { value: 'edit' } } } )); 
        
        return Promise.resolve()
        .then(() => {
            // Verify displayed greeting
            const div = element.shadowRoot.querySelector('p');
            expect(div.textContent).toBe('Action Selected:edit');
        }); 
    });
});