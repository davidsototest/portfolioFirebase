import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectssComponent } from './projectss.component';

describe('ProjectssComponent', () => {
  let component: ProjectssComponent;
  let fixture: ComponentFixture<ProjectssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
