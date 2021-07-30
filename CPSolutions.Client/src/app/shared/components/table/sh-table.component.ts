import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Column, ColumnWidth } from "app/shared/models/table-contributor";
import { ShortcutMenu, ShortcutMenuItem } from "app/shared/models/shortcut-menu-contributor";

@Component({
    selector: 'cp-sh-table',
    templateUrl: './sh-table.component.html',
    styleUrls: ['./sh-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ShTableComponent implements OnInit {
    @Input() columns: Column[];
    @Input() dataset: any[];
    @Input() shortcutMenu: ShortcutMenu;
    @Input() displayedColumns: string[];

    @Output() rowActionFired = new EventEmitter();

    public columnsWidth: string[] = [];
    // congtestTemplate: string = `<cp-sh-shortcut-menu [shortcutMenu]="shortcutMenu" (menuItemClicked)=""></cp-sh-shortcut-menu>`;
    congtestTemplate: string = `cp-sh-shortcut-menu [shortcutMenu]="shortcutMenu" (menuItemClicked)=""></cp-sh-shortcut-menu`;

    ngOnInit() {
        for (let i = 0; i < this.columns.length; i++) {
            let width: string = 'unset';
            const columnWidth: ColumnWidth = this.columns[i].width;
            if (columnWidth.type === 'percent') width = `${columnWidth.value}%`;
            if (columnWidth.type === 'distance') width = `${columnWidth.value}px`;
            this.columnsWidth.push(width);
        }
        console.log(this.dataset);
    }

    public getHeading(columnIndex: number): string {
        const column: Column = this.columns[columnIndex];
        if (column.heading.type === 'text') return column.heading.value;
        if (column.heading.type === 'languageKey') return column.heading.value + ' congtest key';
        console.log(this.columns[columnIndex].heading);
        return '';
    }

    public getCellContent(dataIndex: number, columnIndex: number): string {
        const record: any = this.dataset[dataIndex];
        const column: Column = this.columns[columnIndex];
        if (column.content.type === 'binding') return record[column.content.propertyName];
        console.log(this.columns[columnIndex]);
        console.log(this.dataset[dataIndex]);
        return '';
    }

    clickMenuItem(event: string, element: any) {
        console.log(`congtest: ${ event }`);
        console.log(element);
        // this.menuItemClicked.emit(action);
        this.rowActionFired.emit({ action: event, index: element });
    }
}
