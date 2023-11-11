import { Component } from '@angular/core';
import { AuthService } from 'src/app/Func/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          // Manejar la respuesta del servidor (éxito)
          console.log('Inicio de sesión exitoso:', response);
        },
        (error) => {
          // Manejar el error
          console.error('Error al iniciar sesión:', error);
        }
      );
  }

  forgotPassword(event: Event) {
    event.preventDefault();
    // Agrega lógica para manejar la recuperación de contraseña aquí
    console.log('¿Olvidaste tu contraseña?');
  }

  redirectToRegistration() {
    // Agrega lógica para redirigir a la página de registro aquí
    console.log('Redirigiendo a la página de registro...');
  }
}
