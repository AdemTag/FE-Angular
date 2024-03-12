import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  @Input('appBorderCard') borderColor: string | undefined;
  private initialColor: string = 'rgba(255,255,255,0)';
  private defaultColor: string = '#0f0096';
  private defaultHeight: number = 250;
  private defaultWidth: number = 350; // Ajout de la largeur par défaut


  constructor(private el: ElementRef) {
    this.setDimensions(this.defaultWidth, this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setDimensions(width: number, height: number) {
    this.el.nativeElement.style.width = `${width}px`; // Définir la largeur
    this.el.nativeElement.style.height = `${height}px`; // Définir la hauteur
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
