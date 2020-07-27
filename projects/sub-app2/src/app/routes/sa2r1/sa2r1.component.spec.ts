import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sa2r1Component } from './sa2r1.component';

describe('Sa2r1Component', () => {
  let component: Sa2r1Component;
  let fixture: ComponentFixture<Sa2r1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sa2r1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sa2r1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
