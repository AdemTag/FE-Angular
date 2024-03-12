import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:any=null;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    // this.loginService.getCurrentUser().subscribe((user: any) => {
    //   this.user=user;
    // }, error => {
    //   alert('error: ' + error);
    // })
  }

}
