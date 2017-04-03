import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[cpsAdPageHeader]'
})
export class AdPageHeaderDirective {
    constructor(elementRef: ElementRef, renderer: Renderer) {
        renderer.setElementClass(elementRef.nativeElement, 'ad-page__header', true);
    }
}
