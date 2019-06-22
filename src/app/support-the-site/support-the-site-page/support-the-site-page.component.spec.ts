import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTheSitePageComponent } from './support-the-site-page.component';

describe('SupportTheSitePageComponent', () => {
  let component: SupportTheSitePageComponent;
  let fixture: ComponentFixture<SupportTheSitePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTheSitePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTheSitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
