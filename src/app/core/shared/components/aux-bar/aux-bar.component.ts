import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-aux-bar',
  templateUrl: './aux-bar.component.html',
  styleUrl: './aux-bar.component.scss'
})
export class AuxBarComponent {

  constructor(
    private location: Location
  ){

  }
  goBack(){
    this.location.back();
  }

}
