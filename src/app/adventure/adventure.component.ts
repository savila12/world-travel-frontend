import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../services/adventure/adventure.service';
declare const M;

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  public adventure: [];

  constructor(private adventureService: AdventureService) { }

  getAdventures(): any {
    this.adventureService.getAdventures().subscribe(response => {
      this.adventure = response;
      }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getAdventures();
    if (!localStorage.getItem('currentUser')){
      const toastHTML = '<span>You much login to see your Adventures</span>';
      M.toast({html: toastHTML});
    }
  }

}
