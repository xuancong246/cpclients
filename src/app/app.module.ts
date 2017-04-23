import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { FinancialModule } from './financial/financial.module';
import { ProjectModule } from './project/project.module';
import { CalendarModule } from './calendar/calendar.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export function TranslateLoaderFactory(http: Http) {
    return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: TranslateLoaderFactory,
            deps: [Http]
        }),

        AppRoutingModule,
        AdminModule,
        FinancialModule,
        ProjectModule,
        CalendarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
