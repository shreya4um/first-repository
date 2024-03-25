import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName, ReactiveFormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Password } from 'primeng/password';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, public layoutService: LayoutService) {
    this.formInit();
  }


  formInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    console.log(this.loginForm, "bhuvi")
  }

  get f() {
    return this.loginForm.controls
  }




  login() {

    this.submitted = true;
    if (this.loginForm) {
      return
    }


    console.log(this.loginForm.value);
    // Add your login logic here
    this.router.navigate(['/new-dasboard']);
  }
  reset() {
    this.loginForm.reset()
  }
}