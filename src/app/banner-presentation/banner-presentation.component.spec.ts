import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPresentationComponent } from './banner-presentation.component';

describe('BannerPresentationComponent', () => {
  let component: BannerPresentationComponent;
  let fixture: ComponentFixture<BannerPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
