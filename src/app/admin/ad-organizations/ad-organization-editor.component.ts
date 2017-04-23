import { Component } from '@angular/core';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';

@Component({
    selector: 'cps-ad-organization-editor',
    templateUrl: './ad-organization-editor.component.html',
    styleUrls: ['./ad-organization-editor.component.less']
})
export class AdOrganizationEditorComponent {
    organization = new AdOrganizationModel('test1', 'name test', 'address test', 'nothing');

    onSubmit() {
        console.log('Submit organization');
    }

    get toString() {
        return JSON.stringify(this.organization);
    }
}
