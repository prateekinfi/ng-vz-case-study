import { Car } from './../models/Car';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CarDataService {
    url: string = '';

    constructor(private http: HttpClient) {
        this.url = "https://vz-ps-angular-case-study.firebaseio.com/cars.json";
    }
    getCarDetails():Observable<Array<Car>> {
        return this.http.get<Array<Car>>(this.url);  
    }
}