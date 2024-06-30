import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AlbumsVetrinaComponent } from './components/albums-vetrina/albums-vetrina.component';
import { AlbumDettaglioComponent } from './components/album-dettaglio/album-dettaglio.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'album',
    component: AlbumsVetrinaComponent,
  },
  {
    path: 'album/:id',
    component: AlbumDettaglioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
