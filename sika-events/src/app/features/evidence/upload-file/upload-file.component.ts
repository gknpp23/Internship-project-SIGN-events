import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AttachmentIconComponent } from '../../../shared/components/attachment-icon/attachment-icon.component'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [
    CommonModule,
    AttachmentIconComponent, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      console.log('Arquivos selecionados:', input.files);
    }
  }
}
