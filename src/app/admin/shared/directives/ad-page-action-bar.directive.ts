import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[cpsAdPageActionBar]'
})
export class AdPageActionBarDirective {
    constructor(elementRef: ElementRef, renderer: Renderer) {
        renderer.setElementClass(elementRef.nativeElement, 'ad-page__action-bar', true);
    }
}
