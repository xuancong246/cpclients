import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[cpsAdPageHeader]'
})
export class AdPageHeaderDirective {
    constructor(elementRef: ElementRef, renderer: Renderer2) {
        // renderer.setElementClass(elementRef.nativeElement, 'ad-page__header', true);
        renderer.setAttribute(elementRef.nativeElement, 'class', 'ad-page__header');
    }
}
