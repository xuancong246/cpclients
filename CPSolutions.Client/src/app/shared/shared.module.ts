import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { ShGridComponent } from './components/grid/sh-grid.component';
import { ShTableComponent } from './components/table/sh-table.component';
import { ShShortcutMenuComponent } from './components/shortcut-menu/sh-shortcut-menu.component';
import { ShSidePanelComponent } from './components/side-panel/sh-side-panel.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTableModule
    ],
    declarations: [
        ShGridComponent,
        ShShortcutMenuComponent,
        ShSidePanelComponent,
        ShTableComponent
    ],
    exports: [
        ShGridComponent,
        ShShortcutMenuComponent,
        ShSidePanelComponent,
        ShTableComponent
    ]
})

export class SharedModule { }
