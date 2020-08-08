import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FinancialRoutingModule } from './financial-routing.module';

import { FinancialComponent } from './financial.component';
import { FiDashboardComponent } from './fi-dashboard/fi-dashboard.component';
import { FiOutputComponent } from './fi-output/fi-output.component';
import { FiInputComponent } from './fi-input/fi-input.component';
import { FiSettingsComponent } from './fi-settings/fi-settings.component';
import { FiMenuComponent } from './fi-menu/fi-menu.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FinancialRoutingModule
    ],
    declarations: [
        FinancialComponent,
        FiDashboardComponent,
        FiOutputComponent,
        FiInputComponent,
        FiSettingsComponent,
        FiMenuComponent
    ]
})
export class FinancialModule { }
