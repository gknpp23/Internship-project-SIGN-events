import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- Importação dos componentes compartilhados ---
// import { A4TabsComponent } from '../../components/a-4-tabs/a-4-tabs.component';
// import { SideToolbarComponent } from '../../components/side-toolbar/side-toolbar.component';

// --- Importação dos módulos do Angular Material ---
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-event-location',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Componentes compartilhados
    // A4TabsComponent,
    // SideToolbarComponent,
    // Módulos do Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  templateUrl: './event-location.component.html',
  styleUrls: ['./event-location.component.scss'],
})
export class EventLocationComponent {}
