// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { Password } from 'primeng/password';
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [RouterLink,RouterLinkActive,],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {


// // constructor(private router: Router) {}

// // loginSuccessful() {
// //   this.router.navigate(['/dasboard']);
// // }
// // valCheck: string[] = ['remember'];

// // password!: string;


// email=new FormControl("",[
//   Validators.required,
//   Validators.email
// ])
// password=new FormControl (" ",[
//   Validators.required,
//   Validators.minLength(6)
// ])
// loginForm = new FormGroup (" ",[
// email:this.email,
// password:this.password,
// ])

// login(){
//   console.log(this.loginForm.value)
// }
// // rest(){
// //   this.login.reset()
// // }

// }




import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder,FormControlName, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Password } from 'primeng/password';
@Component({
     selector: 'app-login',
     standalone: true,
     imports: [RouterLink,RouterLinkActive,ReactiveFormsModule,],
     templateUrl: './login.component.html',
     styleUrl: './login.component.scss'
   })
export class LoginComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor(private router: Router) {}

  login() {
    console.log(this.loginForm.value);
    // Add your login logic here
    this.router.navigate(['/new-dasboard']);
  }
  reset(){
    this.loginForm.reset()
  }
}