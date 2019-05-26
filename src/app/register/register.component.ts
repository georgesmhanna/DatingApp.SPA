import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private model: any = {};

  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    return this.authService.register(this.model).subscribe(() => {
      console.log('user register success');
    }, error => {
      console.log('error on register, error = ', error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }
}
