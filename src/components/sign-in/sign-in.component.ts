import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { validateForm } from 'src/helpers/validatefom';
import { AuthService } from 'src/services/auth.service';
import { UserStoreService } from 'src/services/user-store.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  type: string = 'password';
  eyeIcon = 'fa-eye-slash';
  isText: boolean = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,
    private userStore:UserStoreService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }
  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      //send obj to db
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message)
      this.loginForm.reset();
      this.auth.storeToken(res.token);
      const tokenPayload = this.auth.decodeToken();
      this.userStore.setfullNameForStore(tokenPayload.unique_name);
      this.userStore.setRoleForStore(tokenPayload.role);
      this.router.navigate(['dashboard'])
    }, 
     error: (err) => {
      alert(err?.error.message)
    },
  });
}
    else {
      validateForm.validateAllFormFeilds(this.loginForm);
    }
  }
}