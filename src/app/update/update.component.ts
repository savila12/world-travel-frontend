import {Component, Input, OnInit} from '@angular/core';
import { AdventureService } from '../services/adventure/adventure.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input()
  public adventure: any;

  constructor(private adventureService: AdventureService) { }



  ngOnInit(): void {
  }

}
