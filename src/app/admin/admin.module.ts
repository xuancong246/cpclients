import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdOrganizationsComponent } from './ad-organizations/ad-organizations.component';
import { AdUsersComponent } from './ad-users/ad-users.component';
import { AdRolesComponent } from './ad-roles/ad-roles.component';
import { AdFundsComponent } from './ad-funds/ad-funds.component';
import { AdPageHeaderDirective } from './shared/ad-page-header.directive';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdOrganizationsComponent,
        AdUsersComponent,
        AdRolesComponent,
        AdFundsComponent,
        AdPageHeaderDirective
    ]
})

export class AdminModule { }
