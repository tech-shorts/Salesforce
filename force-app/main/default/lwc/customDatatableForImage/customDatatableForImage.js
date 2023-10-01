import LightningDatatable from 'lightning/datatable';
import imageTypeColumn from './imageTypeColumn.html';

export default class CustomDatatableForImage extends LightningDatatable {
    static customTypes ={
        imageColumn: {
            template: imageTypeColumn,
            standardCellLayout: false,
            typeAttributes: ['imageUrl', 'imageTitle']
        }
    }
}