import { Component, Input } from '@angular/core';
import { FileService } from '../services/file.service'; // Assurez-vous que le chemin d'importation est correct

@Component({
  selector: 'app-file-download',
  template: `
    <button (click)="download()">Télécharger {{ fileName }}</button>
    <div *ngIf="errorMessage" style="color: red;">Erreur : {{ errorMessage }}</div>
  `,
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent {
  @Input() fileName: string = '';
  errorMessage: string | null = null;

  constructor(private fileService: FileService) {} // Injection de FileService

  download() {
    this.fileService.downloadFile(this.fileName).subscribe({
      next: (blob: Blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = this.fileName;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
        this.errorMessage = null; // Réinitialiser le message d'erreur
      },
      error: error => this.handleError(error) // Gestion simplifiée des erreurs
    });
  }

  private handleError(error: any) { // Simplification pour la gestion des erreurs
    this.errorMessage = `Une erreur est survenue: ${error.statusText || "Vérifiez la console pour plus de détails"}`;
    console.error('Une erreur est survenue:', error);
  }
}
