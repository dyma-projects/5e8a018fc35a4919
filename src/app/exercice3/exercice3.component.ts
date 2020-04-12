import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  public status: boolean = true;
  // tslint:disable-next-line: no-inferrable-types
  public toggleText: string = 'P2';

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus(): void {
    this.status = !this.status;
    this.toggleText = !(this.status) ? 'P1' : 'P2';
  }
}
