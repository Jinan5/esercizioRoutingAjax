import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/model';

@Component({
  selector: 'app-albums-vetrina',
  templateUrl: './albums-vetrina.component.html',
  styleUrl: './albums-vetrina.component.css',
})
export class AlbumsVetrinaComponent implements OnInit {
  albums?: Album[];
  constructor(private s: AlbumService) {}
  ngOnInit(): void {
    this.s.getAlbums().subscribe((a) => (this.albums = a));
  }
}
