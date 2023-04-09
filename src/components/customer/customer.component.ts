import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  sideBarOpen = true;
  logOut(){
    this.auth.signOut();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
