import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesDetailComponent } from './tiles-detail.component';

describe('TilesDetailComponent', () => {
  let component: TilesDetailComponent;
  let fixture: ComponentFixture<TilesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
