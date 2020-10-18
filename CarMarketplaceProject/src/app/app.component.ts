import { Component } from '@angular/core';
import { MarketcheckApiService } from './services/marketcheck-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarketcheckApiService]
})
export class AppComponent {
  carData: IMarketcheckResponse;
  errorMessage:any;

  constructor(private _marketcheckService: MarketcheckApiService){

  }
  getCarDetails(carMake: string, carModel: string): boolean {
    this._marketcheckService.getCarData(carMake, carModel).subscribe(carData => {this.carData = carData; console.log('num_found name:' + this.carData.media);},
    error => this.errorMessage = <any>error);
    return false;
  }
}
