import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { CharacterService } from 'src/_services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  usernameForm;
  character: any = null;
  loading = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private characterService: CharacterService
  ) {
    this.usernameForm = this.formBuilder.group({
      firstName: '',
      lastName: ''
    });
  }

  ngOnInit() { }

  onSubmit(formData) {
    this.http.get('http://localhost:5001/character', {
      params: {
        firstName: formData.firstName,
        lastName: formData.lastName
      }
    }).subscribe((data) => {
      this.characterService.current = data;
      this.router.navigate(['/character']);
    });
  }
  save(): void {
    this.loading = true;
  }
}
