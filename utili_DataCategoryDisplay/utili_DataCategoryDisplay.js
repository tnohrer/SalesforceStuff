import { LightningElement, track, wire } from 'lwc';
import getDataCategoryUsage from '@salesforce/apex/Org_DataCategoryGetDescribe.getDataCategoryUsage';

const columns = [
    { label: 'Data Category Name', fieldName: 'DataCategoryName' },
    { label: 'Article Count', fieldName: 'ArticleCount', type: 'number', cellAttributes: { alignment: 'left' } }
];

export default class UtiliDataCategoryDisplay extends LightningElement {
    @track data = [];
    @track columns = columns;
    @track error;

    @wire(getDataCategoryUsage)
    wiredDataCategories({ error, data }) {
        if (data) {
            console.log('Data received:', JSON.stringify(data));
            this.data = data;
            this.error = undefined;
        } else if (error) {
            console.error('Error received:', JSON.stringify(error));
            this.error = error;
            this.data = undefined;
        }
    }
}