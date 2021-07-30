import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShSidePanelComponent } from 'app/shared/components/side-panel/sh-side-panel.component';
import { Organization } from 'app/shared/models/organization';

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
    @ViewChild('congtestspan') drawerTest: ElementRef;
    @ViewChild(ShSidePanelComponent) sidePanel: ShSidePanelComponent;

    constructor(private _adOrganizationDataService: AdOrganizationDataService) {
    }

    organizations: Organization[] = [];

    ngOnInit() {
        let self = this;

        this._adOrganizationDataService.getOrganizations()
            .subscribe(
                res => self.organizations = res,
                error => console.log(error)
            );
    }

    addOrganization() {
        this.isAddingOrganization = true;
        this.selectedOrganization = null;
    }

    onEditOrganization(organizationId: string) {
        // this.isAddingOrganization = false;
        // this.selectedOrganization = organization;
        console.log(`edit org id = ${organizationId}`);
    }

    cancelEditor() {
        this.isAddingOrganization = false;
        this.selectedOrganization = null;
    }

    congtestParentClick() {
        // console.log(this.drawerTest);
        this.sidePanel.togglePanel();
    }
}
