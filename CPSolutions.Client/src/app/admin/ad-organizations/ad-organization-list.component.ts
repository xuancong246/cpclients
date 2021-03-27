import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';
import { AdOrganizationService } from './ad-organization.service';
import { Column } from 'app/shared/models/table-contributor';
import { ShortcutMenu } from 'app/shared/models/shortcut-menu-contributor';

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
        key: 'name',
        width: { type: 'unset' },
        heading: { type: 'languageKey', value: 'congtest' },
        content: { type: 'binding', propertyName: 'name' }
    }, {
        key: 'address',
        width: { type: 'unset' },
        heading: { type: 'languageKey', value: 'congtest' },
        content: { type: 'binding', propertyName: 'address' }
    }, {
        key: 'description',
        width: { type: 'unset' },
        heading: { type: 'languageKey', value: 'congtest' },
        content: { type: 'binding', propertyName: 'description' }
    }];
    public congtestData: any[] = [];

    public shortcutMenu: ShortcutMenu = {
        items: [
            { action: 'edit', text: 'Edit' },
            { action: 'delete', text: 'Delete' }
        ]
    };
    public displayedColumns: string[] = ['name', 'address', 'description'];

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
