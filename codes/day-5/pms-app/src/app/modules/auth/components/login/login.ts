import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  username = signal('')
  password = signal('')

  login() {
    
  }
}
