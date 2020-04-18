import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/_services/character.service';
import { FfxivInfos } from 'src/_models/ffxivinfos';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: any = null;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.character = this.characterService.current;
  }

}
