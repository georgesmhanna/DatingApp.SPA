import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private model: any = {};

  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) {
  }

  ngOnInit() {
  }

  register() {
    return this.authService.register(this.model).subscribe(() => {
      this.alertify.success('User Registration Successful');
    }, error => {
      this.alertify.error('Error when registering user');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
