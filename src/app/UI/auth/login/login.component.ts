import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Func/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    // Verifica si el formulario es válido antes de realizar la solicitud
    if (this.loginForm.valid) {
      // Llama al servicio de autenticación para realizar el inicio de sesión
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          console.log('Inicio de sesión exitoso');
          // Puedes redirigir al usuario o realizar otras acciones aquí
        },
        (error) => {
          console.error('Error durante el inicio de sesión:', error);
        }
      );
    } else {
      // Formulario no válido, realiza acciones adicionales si es necesario
    }
  }
}