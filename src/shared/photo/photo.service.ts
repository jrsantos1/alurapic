import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from 'src/shared/photo/photo.interface';

@Injectable({providedIn: 'root'})
export class PhotoService{

  constructor(private http: HttpClient){}

  listForUser(user: string){
    return this.http.get<Photo[]>('http://localhost:3000/' + user + '/photos')
  }
}
