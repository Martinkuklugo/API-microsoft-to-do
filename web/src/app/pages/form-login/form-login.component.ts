import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent {
  constructor(private router: Router){}

  goRegister():void{
    this.router.navigate(['./register-user'])
  }
  return():void{
    this.router.navigate(['./login'])
  }
}
