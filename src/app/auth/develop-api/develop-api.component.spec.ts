import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopApiComponent } from './develop-api.component';

describe('DevelopApiComponent', () => {
  let component: DevelopApiComponent;
  let fixture: ComponentFixture<DevelopApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
