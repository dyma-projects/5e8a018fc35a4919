import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {
  public texts: string[] = ['un', 'deux', 'trois'];

  constructor() { }

  ngOnInit(): void {
  }

}
