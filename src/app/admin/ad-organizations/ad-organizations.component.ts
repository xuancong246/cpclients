import { Component, OnInit } from '@angular/core';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';
import { AdOrganizationDataService } from '../shared/services/data/ad-organization-data.service';

@Component({
    selector: 'cps-ad-organizations',
    templateUrl: './ad-organizations.component.html',
    styleUrls: ['./ad-organizations.component.less']
})
export class AdOrganizationsComponent implements OnInit {
    isAddingOrganization: boolean = false;
    selectedOrganization: AdOrganizationModel;

    constructor(private _adOrganizationDataService: AdOrganizationDataService) {
    }

    organizations: AdOrganizationModel[] = [];

    ngOnInit() {
        let self = this;

        this._adOrganizationDataService.getOrganizations()
            .subscribe(
            organizations => self.organizations = organizations,
            error => console.log(error)
        );
    }

    addOrganization() {
        this.isAddingOrganization = true;
        this.selectedOrganization = null;
    }

    selectOrganization(organization: AdOrganizationModel) {
        this.isAddingOrganization = false;
        this.selectedOrganization = organization;
    }
}
