import { LightningElement } from 'lwc';
import IndusindLogo from '@salesforce/resourceUrl/IndusindLogo';
import asianPaintsLogo from '@salesforce/resourceUrl/asianPaintsLogo';
import SalesforceLogo from '@salesforce/resourceUrl/SalesforceLogo';

const COLUMNS = [
    { 
        label: 'Logo',  
        type: 'imageColumn',
        typeAttributes: {
            imageUrl: { fieldName: 'imageUrl'},
            imageTitle: { fieldName: 'imageTitle'}
        }
    },
    { label: 'Name', fieldName: 'name' , type: 'string'},
    { label: 'Website', fieldName: 'website', type: 'url' }
];

export default class ImageColumnDatatable extends LightningElement {
    tableColumns = COLUMNS;
    tableData = [
        {id:101, imageUrl: SalesforceLogo, imageTitle:'salesforce', name: 'salesforce', website:'https://www.salesforce.com'},
        {id:102, imageUrl: asianPaintsLogo, imageTitle:'Asian Paints', name: 'Asian Paints Ltd', website:'https://www.asianpaints.com/'},
        {id:103, imageUrl: IndusindLogo, imageTitle:'IndusInd Bank', name: 'IndusInd Bank Ltd', website:'https://www.indusind.com/'}
    ];
}