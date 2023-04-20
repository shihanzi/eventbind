import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AuthService) { }

  title = 'SiriPela';
  sideBarOpen = true;
  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
