import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.authService.authenticate(this.email, this.password)) {
      this.router.navigate(['/dashboard']); // Redirige a una página de dashboard o inicio
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, intente de nuevo.';
    }
  }
}
