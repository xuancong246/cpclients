import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar.component';
import { CaDashboardComponent } from './ca-dashboard/ca-dashboard.component';
import { CaSettingsComponent } from './ca-settings/ca-settings.component';

const routes: Routes = [
    {
        path: '',
        component: CalendarComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: CaDashboardComponent },
            { path: 'settings', component: CaSettingsComponent }
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

export class CalendarRoutingModule { }