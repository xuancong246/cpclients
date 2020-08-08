import { Component, ViewEncapsulation } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'cps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    title = 'app works!';

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
