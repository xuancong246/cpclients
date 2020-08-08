import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AdOrganizationService } from './ad-organization.service';

@Component({
    selector: 'cps-ad-organization-menu',
    templateUrl: './ad-organization-menu.component.html',
    styleUrls: ['./ad-organization-menu.component.less']
})
export class AdOrganizationMenuComponent implements OnInit {
    @Output() onClickAdd = new EventEmitter();

    public selectedIds: string[];

    constructor(private adOrganizationService: AdOrganizationService) { }

    ngOnInit() {
        this.selectedIds = this.adOrganizationService.selectedIds;
    }

    addOrganization() {
        this.onClickAdd.emit();
    }
}
