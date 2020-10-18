import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MarketcheckApiService {

  private _siteURL="https://marketcheck-prod.apigee.net/v2/search/car/fsbo/active";
  private _key='?api_key=vaFTme9SKialj9wD3Vz3rKD4jzAhFGPU&rows=5&make=';
  private _2ndSearch='&model='
  constructor(private _http: HttpClient){}

  getCarData(carMake, carModel): Observable<IMarketcheckResponse>{
    return this._http.get<IMarketcheckResponse>(this._siteURL + this._key + carMake + this._2ndSearch +carModel).pipe(tap(data => console.log('Cardata/error'+ JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError (err:HttpErrorResponse) {
console.log('MarketcheckApiService: ' +err.message);
return Observable.throw(err.message); 
  }
}
