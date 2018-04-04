import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HublotHeaderComponent } from './hublot-header.component';

describe('HublotHeaderComponent', () => {
  let component: HublotHeaderComponent;
  let fixture: ComponentFixture<HublotHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HublotHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HublotHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
