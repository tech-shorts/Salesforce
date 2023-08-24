import { LightningElement } from 'lwc';
const COLUMNS = [
    { label: 'Name', fieldName: 'name' , type: 'string'},
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Revenue', fieldName: 'amount', type: 'currency' },
    { label: 'Date', fieldName: 'todayAt', type: 'date' },
];
export default class SampleDatatable extends LightningElement {

    tableColumns = COLUMNS;
    tableData = [
        {id:101, name: 'salesforce', website:'www.salesforce.com', phone:'1756011149', amount: '209.13', todayAt:'Jan 1,2023'},
        {id:102, name: 'Asian Paints Ltd', website:'https://www.asianpaints.com/', phone:'18002095678', amount: '34875', todayAt:'Mar 1,2023'},
        {id:103, name: 'IndusInd Bank Ltd', website:'https://www.indusind.com/', phone:'1860 267 7777', amount: '1426.50', todayAt:'May 1,2023'},
        {id:104, name: 'Infosys Ltd', website:'https://www.infosys.com/', phone:'18002066678', amount: '1424.55', todayAt:'Jan 1,2023'},
        {id:105, name: 'Axis Bank Ltd', website:'https://www.axisbank.com/', phone:'1800206646', amount: '14824.55', todayAt:'Jun 1,2023'}
    ];
}