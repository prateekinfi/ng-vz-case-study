import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentDetailsService{
    url :string ='';
    constructor(private http:HttpClient){
        this.url= 'https://vz-ps-angular-case-study.firebaseio.com/marks.json'
    }
    getStudentMarksData():Observable<any> {
        return this.http.get<any>(this.url);  
    }
}