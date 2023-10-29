import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Login';

  errorSession: boolean = false;
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private cookie: CookieService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService
      .sendCredentials(email, password)
      //TODO: 200 <400
      .subscribe(
        (responseOk) => {
          // Cuando el usuario credenciales Correctas
          console.log('Session iniciada correcta', responseOk);
          const { tokenSession, data } = responseOk;
          this.cookie.set('token', tokenSession, 4, '/');
          this.router.navigate(['/']);
        },
        (err) => {
          //TODO error 400>=
          this.errorSession = true;
          console.log('Ocurrio error con tu email o password');
        }
      );
  }
}
