import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { AdOrganizationService } from './ad-organizations/ad-organization.service';
import { AdOrganizationDataService } from './shared/services/data/ad-organization-data.service';

@Component({
    selector: 'cps-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.less'],
    providers: [
        AdOrganizationService,
        AdOrganizationDataService
    ]
})
export class AdminComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('congtest:' + environment.apiUrl);
    }

}
