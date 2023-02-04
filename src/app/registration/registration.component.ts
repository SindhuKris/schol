import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
 
public registration!:FormGroup;



constructor(
  public fb:FormBuilder,
  public router:Router,
  public userSer: UserService
){

}

  ngOnInit(): void {
    this.registration= this.fb.group({
      firstname:['',Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      confirmPassword:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      acceptTerms:[false, Validators.requiredTrue]
    })
  }

  Submit(){
    this.userSer.register(this.registration.value)
    .subscribe((re) => {
      this.router.navigate(['/login'])
    },()=> {
      alert('errr');
    })
  }
}
