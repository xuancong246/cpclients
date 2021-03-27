import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[cpsAdPageActionBar]'
})
export class AdPageActionBarDirective {
    constructor(elementRef: ElementRef, renderer: Renderer2) {
        renderer.setAttribute(elementRef.nativeElement, 'class', 'ad-page__action-bar');
        // renderer.setElementClass(elementRef.nativeElement, 'ad-page__action-bar', true);
    }
}
