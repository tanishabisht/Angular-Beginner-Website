import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import {authApiService} from '../Services/authapi.service'
// import {SignUp} from '../Classes/signup'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // constructor(private fb:FormBuilder) {}
  constructor(private fb:FormBuilder, private _authApiService:authApiService) {}

  userSignupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    gender: ['female', Validators.required],
    dateOfBirth: ['22-03-2000', Validators.required],
    profilePhoto: ['']
  })

  loginData:any;
  returnedLoginData:any;

  onSubmit(){
    this.loginData = this.userSignupForm.value
    this._authApiService.postSignUp(this.loginData).subscribe(data => {this.returnedLoginData = data; console.log(data)})
    console.log('Login data :: ', this.userSignupForm.value, this.loginData, this.returnedLoginData)
  }
  

  ngOnInit(): void {
    // this._authApiService.postSignUp(this.loginData).subscribe(data => this.returnedLoginData = data)
  }

}
