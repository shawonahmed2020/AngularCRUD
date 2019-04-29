import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Shawon Ahmed';
  public isDisabled = true;
  public successClass = 'text-success';
  public hasError = true;
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome';
  }
}
