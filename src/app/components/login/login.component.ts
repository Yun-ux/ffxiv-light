import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail: string;
  userPassword: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
}
