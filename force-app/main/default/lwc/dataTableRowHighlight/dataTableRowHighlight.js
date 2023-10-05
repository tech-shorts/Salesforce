import { LightningElement } from 'lwc';
// table columns 
const COLUMNS = [
    { 
        label: 'Id', 
        fieldName: 'id', 
        type: 'integer',
        cellAttributes: {
            class: {
                fieldName: 'rowHighlightCls'
            }
        }
    },
    { 
        label: 'Name', 
        fieldName: 'name' , 
        type: 'string', 
        cellAttributes: {
            class: {
                fieldName: 'rowHighlightCls'
            }
        }
    },
    { 
        label: 'Website', 
        fieldName: 'website', 
        type: 'url',
        cellAttributes: {
            class: {
                fieldName: 'rowHighlightCls'
            }
        }
    }
];
export default class DataTableRowHighlight extends LightningElement {
    tableColumns = COLUMNS;
    // sample data
    tableData = [
        {id:101, name: 'salesforce', website:'https://www.salesforce.com', rowHighlightCls: ''},
        {id:102, name: 'Asian Paints Ltd', website:'https://www.asianpaints.com/', rowHighlightCls:'slds-theme_shade slds-theme_alert-texture'},
        {id:103, name: 'IndusInd Bank Ltd', website:'https://www.indusind.com/', rowHighlightCls:''}
    ];
}