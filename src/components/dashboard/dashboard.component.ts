import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users : any=[];
  constructor(private auth:AuthService, private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(res=>{this.users =res;})
  }
  logOut(){
    this.auth.signOut();
  }

}
