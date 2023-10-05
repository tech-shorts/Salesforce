import { LightningElement } from 'lwc';
// table columns 
const COLUMNS = [
    { label: 'Id', fieldName: 'id' , type: 'integer'},
    { label: 'Name', fieldName: 'name' , type: 'string', 
        cellAttributes: {
            class: {
                fieldName: 'cellHighlightCls'
            }
        }},
    { label: 'Website', fieldName: 'website', type: 'url'}
];
export default class DataTableCellHighlight extends LightningElement {
    tableColumns = COLUMNS;
    // sample data
    tableData = [
        {id:101, name: 'salesforce', website:'https://www.salesforce.com', cellHighlightCls: ''},
        {id:102, name: 'Asian Paints Ltd', website:'https://www.asianpaints.com/', cellHighlightCls:'slds-theme_shade slds-theme_alert-texture'},
        {id:103, name: 'IndusInd Bank Ltd', website:'https://www.indusind.com/', cellHighlightCls:''}
    ];
}