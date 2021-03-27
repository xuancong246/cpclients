import { Component, Input } from '@angular/core';
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

    onClickMenuItem(item: ShortcutMenuItem) {
        alert(item.text);
    }
}
