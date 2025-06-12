import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-side-toolbar',
standalone: true,
imports: [CommonModule],
templateUrl: './side-toolbar.component.html',
styleUrls: ['./side-toolbar.component.scss']
})
export class SideToolbarComponent {
  // Define 'state' e 'size' como propriedades de entrada (@Input)
  @Input() state: 'Active' | 'Resting' = 'Resting';
  @Input() size: 'Small' | 'Default' = 'Default';
  @Input() base: boolean = false;
}