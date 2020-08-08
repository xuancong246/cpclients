import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShGridComponent } from './components/grid/sh-grid.component';
import { ShTableComponent } from './components/table/sh-table.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ShGridComponent,
        ShTableComponent
    ],
    exports: [
        ShGridComponent,
        ShTableComponent
    ]
})

export class SharedModule { }
