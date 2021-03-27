import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ShGridComponent } from './components/grid/sh-grid.component';
import { ShTableComponent } from './components/table/sh-table.component';
import { ShShortcutMenuComponent } from './components/shortcut-menu/sh-shortcut-menu.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule
    ],
    declarations: [
        ShGridComponent,
        ShShortcutMenuComponent,
        ShTableComponent
    ],
    exports: [
        ShGridComponent,
        ShShortcutMenuComponent,
        ShTableComponent
    ]
})

export class SharedModule { }
