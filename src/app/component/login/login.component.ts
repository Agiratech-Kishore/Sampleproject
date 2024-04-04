import { Component, Inject } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response:any) => {
        console.log('Login successful', response);
      },
      error: (error:any) => {
        console.log('Login failed', error);
      }
    });
  }
  navigateToSignUp() {
    // Navigate to the Sign Up page
    this.router.navigate(['/signup']);
  }
}


