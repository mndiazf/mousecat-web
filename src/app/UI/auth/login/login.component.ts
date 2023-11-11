import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  login() {
    // Agrega lógica de inicio de sesión aquí
    console.log('Iniciando sesión...');
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
