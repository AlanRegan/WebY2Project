import { Component, OnInit, Input } from '@angular/core';
import { ICar } from "src/app/interfaces/car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
@Input() carData: ICar;

  constructor() { }

  ngOnInit() {
  }

}
