import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateForm } from 'src/helpers/validatefom';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  type: string = 'password';
  eyeIcon = 'fa-eye-slash';
  isText: boolean = false;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }
  onSignUp() {
    if (this.signupForm.valid) {
      //send obj to db
      this.auth.signUp(this.signupForm.value)
        .subscribe({
          next: (res => {
            alert(res.message);
            this.signupForm.reset();
            this.router.navigate(['signin']);
          }),
           error: (err => {
            alert(err?.error.message)
          })
        })
    }
    else if (this.signupForm.invalid) {
      alert("your form is invalid");
    }

    else {
      validateForm.validateAllFormFeilds(this.signupForm);
      alert("your form is invalid");
    }
  }
}