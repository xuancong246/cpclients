import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShortcutMenu, ShortcutMenuItem } from 'app/shared/models/shortcut-menu-contributor';

@Component({
    selector: 'cp-sh-shortcut-menu',
    templateUrl: './sh-shortcut-menu.component.html',
    styleUrls: [
        './sh-shortcut-menu.component.scss'
    ]
})

export class ShShortcutMenuComponent {
    @Input() shortcutMenu: ShortcutMenu;
    @Output() menuItemClicked = new EventEmitter();

    onClickMenuItem(item: ShortcutMenuItem) {
        this.menuItemClicked.emit(item.action);
    }
}
