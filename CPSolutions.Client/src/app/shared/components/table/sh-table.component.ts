import { Component, Input, OnInit } from "@angular/core";
import { Column, ColumnWidth } from "app/shared/models/table-contributor";

@Component({
    selector: 'cp-sh-table',
    templateUrl: './sh-table.component.html'
})

export class ShTableComponent implements OnInit {
    @Input() columns: Column[];
    @Input() dataset: any[];

    public columnsWidth: string[] = [];

    ngOnInit() {
        for (let i = 0; i < this.columns.length; i++) {
            let width: string = 'unset';
            const columnWidth: ColumnWidth = this.columns[i].width;
            if (columnWidth.type === 'percent') width = `${columnWidth.value}%`;
            if (columnWidth.type === 'distance') width = `${columnWidth.value}px`;
            this.columnsWidth.push(width);
        }
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
}
