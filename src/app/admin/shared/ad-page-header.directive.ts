import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[cpsAdPageHeader]'
})
export class AdPageHeaderDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, 'ad-page__header', true);
    }
}
