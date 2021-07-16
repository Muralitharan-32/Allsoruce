import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'allsource';
  valueOne = 1;
  valueTwo = 2;
  valueThree = 3;
  constructor() {

  }

  ngOnInit() {

  }


  one(value): void {
    this.valueOne = this.change(value);

  }


  two(value): void {
    this.valueTwo = this.change(value);
  }


  three(value): void {
    this.valueThree = this.change(value);
  }

  change(value): number {
    console.log(value);
    let tempValue = value;
    if (tempValue === 3) {
      tempValue = tempValue - 2;
    } else {
      tempValue = tempValue + 1;
    }
    return tempValue
  }
}
