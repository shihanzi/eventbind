import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent implements OnInit {

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
