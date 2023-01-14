import { LightningElement } from 'lwc';
import SF_LOGO from '@salesforce/resourceUrl/salesforceLogo';

export default class AccessSvgFromStaticResource extends LightningElement {
    sfdcLogoURL = `${SF_LOGO}#sfdclogo`;
}