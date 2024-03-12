import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FileModel} from "../../FileModel";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  downloadFile(fileName: string): Observable<Blob> {
    const downloadUrl = `${this.baseUrl}/files/${fileName}`;
    return this.http.get(downloadUrl, { responseType: 'blob' });
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<FileModel[]> {
    return this.http.get<FileModel[]>(`${this.baseUrl}/files`);
  }
  deleteFile(filename: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/files/${filename}`);
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
