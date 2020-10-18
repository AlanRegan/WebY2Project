import { Component, OnInit } from '@angular/core';
import { CarDatabaseService } from '../Services/car-database.service';
import { ICar, Car } from '../interfaces/car';


@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {
  carsData: ICar[];

  constructor(private _carDATABASEService:CarDatabaseService) { }

  ngOnInit() {
    this._carDATABASEService.getCarData().subscribe(carsData => {this.carsData = carsData});
  }
addTheCar(make:string, model:string, imageURL:string, price:string):boolean{
let tempCar:ICar;
tempCar = new Car(make, model, imageURL, price);
this._carDATABASEService.addCarData(tempCar);
return false;
}

}
