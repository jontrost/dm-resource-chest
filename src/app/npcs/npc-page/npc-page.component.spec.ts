import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcPageComponent } from './npc-page.component';

describe('NpcPageComponent', () => {
  let component: NpcPageComponent;
  let fixture: ComponentFixture<NpcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
