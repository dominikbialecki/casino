import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: 'img[uiImage]' })
export class UiImageDirective {

  static readonly IMAGE_PLACEHOLDER = 'assets/image-placeholder.png';

  @Input() alt?: string;

  constructor(private readonly elementRef: ElementRef,
              private readonly renderer: Renderer2
  ) {}

  @HostListener('error')
  onError() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', UiImageDirective.IMAGE_PLACEHOLDER);
    if (this.alt) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'title', this.alt);
    }
  }
}
