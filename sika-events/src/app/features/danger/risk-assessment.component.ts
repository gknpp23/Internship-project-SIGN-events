import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- Componentes compartilhados ---
// import { A4TabsComponent } from '../../components/a-4-tabs/a-4-tabs.component';
// import { SideToolbarComponent } from '../../components/side-toolbar/side-toolbar.component';

// --- Módulos do Angular Material ---
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio'; // Import para os radio buttons

@Component({
  selector: 'app-risk-assessment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Componentes
    // A4TabsComponent,
    // SideToolbarComponent,
    // Módulos do Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule, // Adicionado aqui
  ],
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.scss'],
})
export class RiskAssessmentComponent {}
