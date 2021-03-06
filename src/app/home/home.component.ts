import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private registerMode = false;

  constructor() {
  }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  changeRegisterMode(registerMode) {
    this.registerMode = registerMode;
  }
}
