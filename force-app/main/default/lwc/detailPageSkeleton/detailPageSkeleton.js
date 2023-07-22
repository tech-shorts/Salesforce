import { LightningElement, api } from 'lwc';

export default class DetailPageSkeleton extends LightningElement {
    @api noOfSkeletons = 5; 

    renderedCallback(){
        let CONTAINER_HTML = `<div class="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_6-of-12">
                                <div class="skelton-container">
                                    <div class="slds-border_bottom">
                                        <div class="skelton line-small"></div>
                                        <div class="skelton line-large"></div>
                                    </div>
                                </div>
                            </div>`;
        const container = this.template.querySelector('.skelton-grid');
        let loadingContainerHtml='';
        
        for (let i = 0; i < this.noOfSkeletons; i++) {
            loadingContainerHtml +=CONTAINER_HTML;
            
        }
        container.innerHTML = loadingContainerHtml;
    }
}