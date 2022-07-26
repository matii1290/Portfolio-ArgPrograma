import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftyskillsComponent } from './hardsoftyskills.component';

describe('HardsoftyskillsComponent', () => {
  let component: HardsoftyskillsComponent;
  let fixture: ComponentFixture<HardsoftyskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftyskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardsoftyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
