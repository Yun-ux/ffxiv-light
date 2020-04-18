import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  current: any = null;
  constructor() { }
}
