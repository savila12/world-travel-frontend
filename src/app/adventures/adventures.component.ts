import { Component, OnInit } from '@angular/core';
import {AdventureService} from '../services/adventure/adventure.service';
declare const M;

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {
  public adventures: [];
  public adventureName: string;
  public dateWent: string;
  public adventureDescription: string;
  public countryName: string;

  constructor(private adventureService: AdventureService) { }

  getAdventures(): any {
    this.adventureService.getAdventures().subscribe((response: any) => {
      this.adventures = response;
    }, err => console.log(err));
  }

  createAdventure(): any {
    const newAdventure = {
      adventureName: this.adventureName,
      dateWent: this.dateWent,
      adventureDescription: this.adventureDescription,
      countryName: this.countryName
    };

    this.adventureService.createAdventure(newAdventure).subscribe((response: any) => {
      // @ts-ignore
      this.adventures = [...this.adventures, response];
    }, err => console.log(err));
  }

  deleteAdventure(adventure): any {
    // @ts-ignore
    const index = this.adventures.indexOf(adventure);
    console.log(index);
    this.adventureService.deleteAdventure(adventure).subscribe(() => {
      // @ts-ignore
      this.adventures.splice(index, 1);
    });
  }

  updateAdventure(adventure): any {
    // @ts-ignore
    const index = this.adventures.indexOf(adventure);
    const updateAdventure = {
      adventureName: this.adventureName,
      dateWent: this.dateWent,
      adventureDescription: this.adventureDescription,
      countryName: this.countryName
    };
    console.log(index);
    this.adventureService.updateAdventure(adventure).subscribe(response => {
      // @ts-ignore
      // this.adventures[index][this.adventureName] = adventure.adventureName;
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.getAdventures();
    if (!localStorage.getItem('currentUser')){
      const toastHTML = '<span>You much login to see your Adventures</span>';
      M.toast({html: toastHTML});
    }
  }

}
