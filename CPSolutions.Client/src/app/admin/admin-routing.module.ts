import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdOrganizationsComponent } from './ad-organizations/ad-organizations.component';
import { AdUsersComponent } from './ad-users/ad-users.component';
import { AdRolesComponent } from './ad-roles/ad-roles.component';
import { AdFundsComponent } from './ad-funds/ad-funds.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', redirectTo: 'organizations', pathMatch: 'full' },
            { path: 'organizations', component: AdOrganizationsComponent },
            { path: 'users', component: AdUsersComponent },
            { path: 'roles', component: AdRolesComponent },
            { path: 'funds', component: AdFundsComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { };