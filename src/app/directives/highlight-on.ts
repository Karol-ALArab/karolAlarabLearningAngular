import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOn]',
  standalone: true
})
export class HighlightOnDirective {

  @Input() appHighlightOn = '';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.highlight(this.appHighlightOn || 'lightblue');
  }

  @HostListener('blur') onBlur() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
