import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { AuthService } from 'src/services/auth.service';
import { UserStoreService } from 'src/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users : any=[];
  public fullName :string ="";
  
    constructor(private auth:AuthService, private api: ApiService, private userStore:UserStoreService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(res=>{this.users =res;});
    this.userStore.getfullNameFromStore().subscribe
    (val=>{
        let fullNameFromToken = this.auth.getfullNameFromToken();
        this.fullName = val || fullNameFromToken
      })}
      sideBarOpen = true;
  logOut(){
    this.auth.signOut();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}