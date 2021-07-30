import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
    selector: 'cp-sh-side-panel',
    templateUrl: './sh-side-panel.component.html',
    styleUrls: [
        './sh-side-panel.component.scss'
    ]
})

export class ShSidePanelComponent implements OnInit {
    showFiller = true;
    congtestdrawer = 'congtestdrawer1';
    @ViewChild('congtestdrawer1') myTag;
    @ViewChild('drawer') drawer: MatDrawer;

    ngOnInit() {
        // this.myTag.toggle();
    }

    congtestClick() {
        // this.myTag.toggle();
    }

    togglePanel() {
        this.drawer.toggle();
        console.log(this.drawer.opened);
    }
}
