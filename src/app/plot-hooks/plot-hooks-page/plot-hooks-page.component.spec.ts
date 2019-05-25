import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotHooksPageComponent } from './plot-hooks-page.component';

describe('PlotHooksPageComponent', () => {
  let component: PlotHooksPageComponent;
  let fixture: ComponentFixture<PlotHooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotHooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotHooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
