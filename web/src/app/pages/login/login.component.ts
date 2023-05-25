import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


export class LoginComponent {
constructor(private router: Router){}

redireccionar():void{
  console.log('redireccionando...')
  this.router.navigate(['./form-login'])
}
}
