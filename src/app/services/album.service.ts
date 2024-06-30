import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, AlbumPhoto } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private ajax: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.ajax.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
  getAlbumPhotosById(id: string): Observable<AlbumPhoto[]> {
    return this.ajax.get<AlbumPhoto[]>(
      'https://jsonplaceholder.typicode.com/photos?albumId=' + id
    );
  }
}
