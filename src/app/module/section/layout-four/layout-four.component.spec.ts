import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFourComponent } from './layout-four.component';

describe('LayoutFourComponent', () => {
  let component: LayoutFourComponent;
  let fixture: ComponentFixture<LayoutFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
