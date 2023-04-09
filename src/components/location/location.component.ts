import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogcustomerComponent } from '../dialogcustomer/dialogcustomer.component';
import { DialoglocationComponent } from '../dialoglocation/dialoglocation.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private auth:AuthService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  sideBarOpen = true;
  logOut(){
    this.auth.signOut();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialoglocationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
