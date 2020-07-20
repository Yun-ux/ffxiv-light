import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

}
  redirectDPS() {
    this.router.navigate(['/dps']);
  }
  redirectHEAL() {
    this.router.navigate(['/heal']);
  }
  redirectTANK() {
    this.router.navigate(['/tank']);
  }
}
