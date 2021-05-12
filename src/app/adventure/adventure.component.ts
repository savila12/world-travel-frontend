import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../services/adventure/adventure.service';
declare const M;

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  // public adventure: any[];
  // public adventureName: string;
  // public dateWent: string;
  // public adventureDescription: string;
  // public countryName: string;

  constructor(private adventureService: AdventureService) { }

  // getAdventures(): any {
  //   this.adventureService.getAdventures().subscribe((response: any) => {
  //     this.adventure = response;
  //     }, err => console.log(err));
  // }

  // createAdventure(): any {
  //   const newAdventure = {
  //     adventureName: this.adventureName,
  //     dateWent: this.dateWent,
  //     adventureDescription: this.adventureDescription,
  //     countryName: this.countryName
  //   };
  //
  //   this.adventureService.createAdventure(newAdventure).subscribe((response: any) => {
  //     this.adventure = [...this.adventure, response];
  //   });
  // }
  //
  // deleteAdventure(adventure: any): any {
  //   // @ts-ignore
  //   const index = this.adventure.indexOf(adventure);
  //   console.log(index);
  //   this.adventureService.deleteAdventure(adventure).subscribe(() => {
  //     // @ts-ignore
  //     this.categories.splice(index, 1);
  //   });
  // }

  ngOnInit(): void {
    // this.getAdventures();
    // if (!localStorage.getItem('currentUser')){
    //   const toastHTML = '<span>You much login to see your Adventures</span>';
    //   M.toast({html: toastHTML});
    // }
  }

}
