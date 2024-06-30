import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsVetrinaComponent } from './albums-vetrina.component';

describe('AlbumsVetrinaComponent', () => {
  let component: AlbumsVetrinaComponent;
  let fixture: ComponentFixture<AlbumsVetrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsVetrinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsVetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
