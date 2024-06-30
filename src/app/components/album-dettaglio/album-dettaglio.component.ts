import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumPhoto } from '../../models/model';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-dettaglio',
  templateUrl: './album-dettaglio.component.html',
  styleUrl: './album-dettaglio.component.css',
})
export class AlbumDettaglioComponent implements OnInit {
  photos?: AlbumPhoto[] = [];
  constructor(private s: AlbumService, private r: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.r.snapshot.paramMap.get('id')!;
    this.s.getAlbumPhotosById(id).subscribe((p) => (this.photos = p));
  }
}
