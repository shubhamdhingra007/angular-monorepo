import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sa2r2Component } from './sa2r2.component';

describe('Sa2r2Component', () => {
  let component: Sa2r2Component;
  let fixture: ComponentFixture<Sa2r2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sa2r2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sa2r2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
