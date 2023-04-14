import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { validateForm } from 'src/helpers/validatefom';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-dialoglocation',
  templateUrl: './dialoglocation.component.html',
  styleUrls: ['./dialoglocation.component.scss']
})
export class DialoglocationComponent implements OnInit {

  locationaddForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialoglocationComponent>,
    private auth: AuthService, private router: Router) { }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.locationaddForm = this.fb.group({
      locationname: ['', Validators.required],
      nickname: ['', Validators.required],
      perches: ['', Validators.required],
      amount: ['', Validators.required],
    })
  }
  onSave() {
    if (this.locationaddForm.valid) {
      // send obj to db
      this.auth.addLocation(this.locationaddForm.value).subscribe({
        next: (res => {
          alert(res.message);
          console.log(res); // log the response object
          this.locationaddForm.reset();
          this.router.navigate(['signin']);
        }),
        error: (err => {
          console.log(err); // log the response object
          alert(err?.error.message)
        })
      })
    }
    else if (this.locationaddForm.invalid) {
      alert("your form is invalid");
    }

    else {
      validateForm.validateAllFormFeilds(this.locationaddForm);
      alert("your form is invalid");
    }
  }
}