import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {Request,Response} from "../models/app.interface";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    url: string = 'https://tatooine-chatbot-api.onrender.com/api';
    public apiUrl = this.url;

    constructor(private http: HttpClient) { }

    // Ejemplo se tiene que cambiar
    questions(request:Request): Observable<Response> {
        return this.http.post<Response>(`${this.apiUrl}/questions`, request, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }   
}
