import { Component, OnInit } from '@angular/core';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';
import { AdOrganizationDataService } from '../shared/services/data/ad-organization-data.service';

@Component({
    selector: 'cps-ad-organizations',
    templateUrl: './ad-organizations.component.html',
    styleUrls: ['./ad-organizations.component.less']
})
export class AdOrganizationsComponent implements OnInit {

    constructor(private _adOrganizationDataService: AdOrganizationDataService) {
    }

    organizations: AdOrganizationModel[] = [];

    ngOnInit() {
        let self = this;

        this._adOrganizationDataService.getOrganizations()
            .subscribe(
            organizations => self.organizations = organizations);
    }
}
