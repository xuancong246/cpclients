import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { AdminComponent } from './admin.component';
import { AdOrganizationsComponent } from './ad-organizations/ad-organizations.component';
import { AdUsersComponent } from './ad-users/ad-users.component';
import { AdRolesComponent } from './ad-roles/ad-roles.component';
import { AdFundsComponent } from './ad-funds/ad-funds.component';
import { AdPageHeaderDirective } from './shared/directives/ad-page-header.directive';
import { AdPageActionBarDirective } from './shared/directives/ad-page-action-bar.directive';
import { AdOrganizationEditorComponent } from './ad-organizations/ad-organization-editor.component';
import { AdOrganizationListComponent } from './ad-organizations/ad-organization-list.component';
import { AdOrganizationMenuComponent } from './ad-organizations/ad-organization-menu.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        AdminRoutingModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AdminComponent,
        AdOrganizationsComponent,
        AdUsersComponent,
        AdRolesComponent,
        AdFundsComponent,
        AdPageHeaderDirective,
        AdPageActionBarDirective,
        AdOrganizationEditorComponent,
        AdOrganizationListComponent,
        AdOrganizationMenuComponent
    ]
})
export class AdminModule { }
