import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sar2Component } from './sar2.component';

describe('Sar2Component', () => {
  let component: Sar2Component;
  let fixture: ComponentFixture<Sar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
