import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialComponent } from './financial.component';
import { FiDashboardComponent } from './fi-dashboard/fi-dashboard.component';
import { FiOutputComponent } from './fi-output/fi-output.component';
import { FiInputComponent } from './fi-input/fi-input.component';
import { FiSettingsComponent } from './fi-settings/fi-settings.component';

const routes: Routes = [
    {
        path: '', component: FinancialComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: FiDashboardComponent },
            { path: 'output', component: FiOutputComponent },
            { path: 'input', component: FiInputComponent },
            { path: 'settings', component: FiSettingsComponent }
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
export class FinancialRoutingModule { };