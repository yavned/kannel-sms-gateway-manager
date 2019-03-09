import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'sms-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  @Input() showLogin: boolean = true;
  @Output() toggleLogin: EventEmitter<any> = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService
  ) {}

  ngOnInit() {
    this.LoginForm = this._formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  submitForm({ value, valid }: { value: any, valid: boolean }) {
    if (valid) {
      this._loginService
        .login(value)
        .subscribe(res => {
          if (res.Success) {
            // save to local storage token & user id
            localStorage.setItem('sms_admin_token', res.Token);

            this._router.navigate(['/user-managment']);
          }
        })
    }
  }
}
