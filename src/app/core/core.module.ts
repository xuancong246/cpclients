import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoHomeComponent } from './co-home/co-home.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CoreComponent, CoHomeComponent]
})
export class CoreModule { }
