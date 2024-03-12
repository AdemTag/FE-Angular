import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./pages/home/home.component";
//import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {DetailPdocComponent} from "./detail-pdoc/detail-pdoc.component";



@NgModule({
  declarations: [
    HomeComponent,
   // FileUploadComponent,
    DetailPdocComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PdocModule { }
