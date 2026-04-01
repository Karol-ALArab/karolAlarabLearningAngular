import { ElementRef } from '@angular/core';
import { HighlightOnDirective } from './highlight-on';

describe('HighlightOnDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('input'));
    const directive = new HighlightOnDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
