import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'financial', loadChildren: 'app/financial/financial.module#FinancialModule' },
    { path: 'project', loadChildren: 'app/project/project.module#ProjectModule' },
    { path: 'calendar', loadChildren: 'app/calendar/calendar.module#CalendarModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {};