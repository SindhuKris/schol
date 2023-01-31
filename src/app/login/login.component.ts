import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  public login!:FormGroup;


  constructor(
   public lc:FormBuilder,
   public router:Router,

  ){

  }

  ngOnInit(): void {
    this.login= this.lc.group({
      username:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    })
  }

  Submit(){
   this.router.navigate(['/dashboard'])
  }
}
