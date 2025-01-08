import { LightningElement, api } from 'lwc';

//Nothing too crazy here, just a simple component to display an icon.
export default class orgScreenFlowSLDSIcons extends LightningElement {
    @api iconName = 'utility:info';
    @api size = 'medium';
    @api alignment = 'center';
    @api variant = '';

    get alignmentClass() {
        return `slds-text-align_${this.alignment}`;
    }
}