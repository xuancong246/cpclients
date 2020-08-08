import { Injectable } from '@angular/core';

@Injectable()
export class AdOrganizationService {
    public selectedIds: string[] = [];

    toggleSelection(id: string) {
        let index = this.selectedIds.indexOf(id);
        if (index >= 0) {
            this.selectedIds.splice(index, 1);
        } else {
            this.selectedIds.push(id);
        }
    }
}
