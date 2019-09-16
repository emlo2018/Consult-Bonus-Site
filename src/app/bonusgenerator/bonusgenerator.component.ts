import { Component, OnInit } from '@angular/core';
import { Consult } from '../shared/consult.model';

@Component({
  selector: 'app-bonusgenerator',
  templateUrl: './bonusgenerator.component.html',
  styleUrls: ['./bonusgenerator.component.css']
})
export class BonusgeneratorComponent implements OnInit {

  public bonus: number;
  public D: number;
  public L: number;
  public consults: Consult[];
  public years: number;
  public points: number;

  constructor() { }

  ngOnInit() {
  }
  resultNetto: number;

  generate(netto: number) {
    this.resultNetto = netto * 0.05;
    //list bonus for each consult depending on netto result with observer..
  }

  ngOnChanges() {

    if (this.years[0] < 1) {
      this.points = 1;
    }
    if (this.years[0] == 1) {
      this.points = 1, 1;
    }
    if (this.years[0] == 2) {
      this.points = 1, 2;
    }
    if (this.years[0] == 3) {
      this.points = 1, 3;

    }
    if (this.years[0] == 4) {
      this.points = 1, 4;

    }
    if (this.years[0] >= 5) {
      this.points = 1, 5;

    }
    //	Dk	=	Tk	*	Lk
    //this.render();

  }

  loopConsults() {

    console.log("In loop Consults!");
  }


}
