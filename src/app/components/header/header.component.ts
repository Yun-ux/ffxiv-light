import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  megaNavContents: Array<Object> = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Classes',
      href: '/classes'
    },
    {
      name: 'Jobs',
      href: '/jobs'
    },
    {
      name: 'Guides',
      href: '/guides'
    },
    {
      name: 'galery',
      href: '/galery'
    },
    {
      name: 'Login',
      href: '/login'
    },
    {
      name: 'register',
      href: '/register'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
