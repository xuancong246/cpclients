import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';
import { AdOrganizationService } from './ad-organization.service';
import { Column } from 'app/shared/models/table-contributor';

@Component({
    selector: 'cps-ad-organization-list',
    templateUrl: './ad-organization-list.component.html',
    styleUrls: ['./ad-organization-list.component.less']
})
export class AdOrganizationListComponent implements OnInit {
    @Input() organizations: AdOrganizationModel[];
    @Output() onClickName = new EventEmitter<AdOrganizationModel>();
    @Output() menuItemClicked: EventEmitter<RowDropdownAction> = new EventEmitter<RowDropdownAction>();

    public congtest: Column[] = [{
        width: { type: 'unset' },
        heading: { type: 'languageKey', value: 'congtest' },
        content: { type: 'binding', propertyName: 'name' }
    }, {
        width: { type: 'unset' },
        heading: { type: 'languageKey', value: 'congtest' },
        content: { type: 'binding', propertyName: 'address' }
    }, {
        width: { type: 'unset' },
        heading: { type: 'languageKey', value: 'congtest' },
        content: { type: 'binding', propertyName: 'description' }
    }];
    public congtestData: any[] = [];

    constructor(private _adOrganizationService: AdOrganizationService) {
    }

    ngOnInit() {
        this.congtestData.length = 0;
        this.mapOrganizations(this.congtestData, this.organizations);
    }

    private mapOrganizations(destination: any[], source: AdOrganizationModel[]) {
        source.forEach((organization: AdOrganizationModel) => {
            destination.push({
                id: organization.id,
                name: organization.name,
                address: organization.address,
                description: organization.description
            });
        });
    }

    selectOrganization(organization: AdOrganizationModel) {
        this.onClickName.emit(organization);
    }

    toggleSelection(id: string) {
        console.log(id);
        this._adOrganizationService.toggleSelection(id);
    }

    clickMenuItem(action: RowDropdownAction) {
        console.log(`congtest: ${ action }`);
        // this.menuItemClicked.emit(action);
    }
}
