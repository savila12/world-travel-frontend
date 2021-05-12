import {Component, Input, OnInit} from '@angular/core';
import { AdventureService } from '../services/adventure/adventure.service';
import {ActivatedRoute} from '@angular/router';
import {angularClassDecoratorKeys} from 'codelyzer/util/utils';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // @Input()
  public adventure: any;
  public adventures: any[];
  public adventureName: string;
  public dateWent: string;
  public adventureDescription: string;
  public countryName: string;

  constructor(private adventureService: AdventureService, private route: ActivatedRoute) { }

  updateAdventure(adventure ): any {
    // @ts-ignore
    const index = this.adventures.indexOf(adventure);
    const updateAdventure = {
      id: adventure.id,
      adventureName: adventure.adventureName,
      dateWent: adventure.dateWent,
      adventureDescription: adventure.adventureDescription,
      countryName: adventure.countryName
    };
    console.log(index, updateAdventure);
    this.adventureService.updateAdventure(updateAdventure).subscribe(response => {
      // @ts-ignore
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.adventureService.getAdventures().subscribe(response => {
      this.adventures = response;
      this.route.paramMap
        .subscribe(params => {
          this.adventure = this.adventures.find(adventure => {
            return adventure.id === parseInt(params.get('id'), 10);
          });
          console.log(this.adventure);
        });
    });

  }

}
