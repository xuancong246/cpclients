export interface ShortcutMenuItem {
    action: ShortcutMenuItemAction;
    text: string;
}

export interface ShortcutMenuSeparator {}

export interface ShortcutMenu {
    items: Array<ShortcutMenuItem | ShortcutMenuSeparator>;
}
