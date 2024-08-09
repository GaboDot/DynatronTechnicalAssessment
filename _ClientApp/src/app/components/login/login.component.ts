import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ColGroupComponent } from '@progress/kendo-angular-grid';
import { Login } from 'src/app/interfaces/login';
import { SessionService } from 'src/app/reusable/shared/session.service';
import { UtilityService } from 'src/app/reusable/shared/utility.service';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePwd: boolean = true;
  showLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService : UserService,
    private _sessionService: SessionService,
    private _utilityService: UtilityService
  ) {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    ngOnInit(): void {}

    UserLogin() {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 1500);
      const request: Login = {
        email: this.loginForm.value.email,
        password: window.btoa(this.loginForm.value.password)
      }
      this._userService.Login(request).subscribe({
        next: (data) => {
          if(data.status) {
            this._sessionService.saveSession(data.value);
            this.router.navigate(['pages/sales-report']);
          }
          else {
            this._utilityService.showAlert('Invalid Email / Password', 'Close', 'notif-warning');
          }
        },
        complete: () => {
          this.showLoading = false;
        },
        error: () => {
          this._utilityService.showAlert('Unable to login', 'Close', 'notif-error');
        }
      });
    }
}
