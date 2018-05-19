import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
export class SpaceImageDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mousemove') zoomIn() {
    this.zoom += 0.005;
  }

  @HostListener('mouseout') zoomOut() {
    this.zoom = 1.0;
  }

  set zoom(value) {
    this.el.nativeElement.style.zoom = value;
  }

  get zoom() {
    return parseFloat(this.el.nativeElement.style.zoom || 1);
  }
}
