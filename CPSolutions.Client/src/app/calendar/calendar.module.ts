import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CalendarRoutingModule } from './calendar-routing.module';

import { CalendarComponent } from './calendar.component';
import { CaDashboardComponent } from './ca-dashboard/ca-dashboard.component';
import { CaSettingsComponent } from './ca-settings/ca-settings.component';
import { CaMenuComponent } from './ca-menu/ca-menu.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CalendarRoutingModule
    ],
    declarations: [CalendarComponent, CaDashboardComponent, CaSettingsComponent, CaMenuComponent]
})

export class CalendarModule { }
