import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { PDOC } from "../../mock-pdoc-list";
import {Pdoc} from "../../pdoc";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pdoclist = PDOC;

  //pdocSelected : Pdoc;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

goToPdoc(pdoc: Pdoc){
  this.router.navigate(['/detail-porte-document/',pdoc.id]);
}



  goToFileUploadPage() {
    this.router.navigateByUrl('/upload');
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
}
