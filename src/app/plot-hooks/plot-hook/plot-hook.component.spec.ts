import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotHookComponent } from './plot-hook.component';

describe('PlotHookComponent', () => {
  let component: PlotHookComponent;
  let fixture: ComponentFixture<PlotHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
