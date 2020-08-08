import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
    }//,
    // { path: 'financial', loadChildren: 'app/financial/financial.module#FinancialModule' },
    // { path: 'project', loadChildren: 'app/project/project.module#ProjectModule' },
    // { path: 'calendar', loadChildren: 'app/calendar/calendar.module#CalendarModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { };
