import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'cps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})

export class AppComponent {
    title = 'app works!';

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
