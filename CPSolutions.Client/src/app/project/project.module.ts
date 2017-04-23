import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate';

import { ProjectRoutingModule } from './project-routing.module';

import { ProjectComponent } from './project.component';
import { PrDashboardComponent } from './pr-dashboard/pr-dashboard.component';
import { PrSettingsComponent } from './pr-settings/pr-settings.component';
import { PrMenuComponent } from './pr-menu/pr-menu.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ProjectRoutingModule
    ],
    declarations: [
        ProjectComponent,
        PrDashboardComponent,
        PrSettingsComponent,
        PrMenuComponent
    ]
})

export class ProjectModule { }
