import { Renderer2 } from '@angular/core';
import { UiImageDirective } from './ui-image.directive';


describe('UiImageDirective', () => {
  it('should create an instance', () => {
    // given I have an instance
    const ALT = 'test';
    const renderer: jasmine.SpyObj<Renderer2> = jasmine.createSpyObj('Renderer2', ['setAttribute']);
    const elementRef = { nativeElement: document.createElement('input') };
    const directive = new UiImageDirective(elementRef, renderer);
    directive.alt = ALT;

    // when on error callback is called
    directive.onError();

    // then host element attributes were changed
    expect(renderer.setAttribute).toHaveBeenCalledWith(elementRef.nativeElement, 'src', UiImageDirective.IMAGE_PLACEHOLDER);
    expect(renderer.setAttribute).toHaveBeenCalledWith(elementRef.nativeElement, 'title', ALT);
  });
});
