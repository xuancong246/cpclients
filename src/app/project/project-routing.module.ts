import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { PrDashboardComponent } from './pr-dashboard/pr-dashboard.component';
import { PrSettingsComponent } from './pr-settings/pr-settings.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: PrDashboardComponent },
            { path: 'settings', component: PrSettingsComponent }
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

export class ProjectRoutingModule { }