import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HublotComponent } from './hublot.component';

describe('HublotComponent', () => {
  let component: HublotComponent;
  let fixture: ComponentFixture<HublotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HublotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HublotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
