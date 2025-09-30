import { Component, ElementRef, Host, HostBinding, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: { 'class': 'control' ,
    '(click)': 'onClick()' }
  
})
export class ControlComponent {
  @HostBinding('class') className = 'control';
  label = input.required<string>(); 
  private el = inject(ElementRef); 

  onClick() {
    console.log(`${this.label} control clicked`);
  }
}
