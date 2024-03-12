import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PDOC } from "../mock-pdoc-list";
import { Pdoc } from "../pdoc";
import { Observable } from 'rxjs';
import { FileService } from "../services/file.service"; // Assurez-vous que le service est correctement importé
import {FileModel} from "../../FileModel";


@Component({
  selector: 'app-detail-pdoc',
  templateUrl: './detail-pdoc.component.html',
  styleUrls: ['./detail-pdoc.component.css']
})
export class DetailPdocComponent implements OnInit {
  pdocList: Pdoc[] = [];
  pdoc: Pdoc | undefined;
  fileList: FileModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fileService: FileService // Injectez le service ici
  ) {}

  goToFileUploadPage() {
    this.router.navigateByUrl('/admin/upload');
  }

  goToHome() {
    this.router.navigateByUrl('/admin/home'); // Rediriger vers la page d'accueil
  }

  ngOnInit() {
    this.getFileList();
    this.pdocList = PDOC;
    const pdocId: string | null = this.route.snapshot.paramMap.get('id');

    if (pdocId) {
      this.pdoc = this.pdocList.find(pdoc => pdoc.id === +pdocId);
    }
  }

  getFileList() {
    this.fileService.getFiles().subscribe(
      (data: any) => {
        console.log(data); // Affichez les données dans la console pour vérifier leur format
        this.fileList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des fichiers :', error);
      }
    );
  }



}
