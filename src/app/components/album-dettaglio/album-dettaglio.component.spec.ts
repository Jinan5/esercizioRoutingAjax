import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDettaglioComponent } from './album-dettaglio.component';

describe('AlbumDettaglioComponent', () => {
  let component: AlbumDettaglioComponent;
  let fixture: ComponentFixture<AlbumDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumDettaglioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
