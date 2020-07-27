import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sar1Component } from './sar1.component';

describe('Sar1Component', () => {
  let component: Sar1Component;
  let fixture: ComponentFixture<Sar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
