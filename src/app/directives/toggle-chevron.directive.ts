import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleChevron]',
})
export class ToggleChevronDirective {

  icons = {
    right: { icon: 'fa-angle-double-right', pair: 'down' },
    down: { icon: 'fa-angle-double-down', pair: 'right' },
  };
  constructor(private renderer: Renderer2) {}

  @HostListener('click', ['$event.currentTarget']) onClick(target:any) {
    for (let x in this.icons) {
      if (target.classList.contains(this.icons[x].icon)) {
        this.renderer.addClass(target, this.icons[this.icons[x].pair].icon);
        this.renderer.removeClass(target, this.icons[x].icon);
        break;
      }
    }
  }

}
