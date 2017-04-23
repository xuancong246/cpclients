import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdOrganizationsComponent } from './ad-organizations/ad-organizations.component';
import { AdUsersComponent } from './ad-users/ad-users.component';
import { AdRolesComponent } from './ad-roles/ad-roles.component';
import { AdFundsComponent } from './ad-funds/ad-funds.component';
import { AdPageHeaderDirective } from './shared/directives/ad-page-header.directive';
import { AdPageActionBarDirective } from './shared/directives/ad-page-action-bar.directive';
import { AdOrganizationEditorComponent } from './ad-organizations/ad-organization-editor.component';
import { AdOrganizationEditor2Component } from './ad-organizations/ad-organization-editor2.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
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
        AdOrganizationEditor2Component
    ]
})

export class AdminModule { }
