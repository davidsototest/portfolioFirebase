import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPresentationUpdateComponent } from './banner-presentation-update.component';

describe('BannerPresentationUpdateComponent', () => {
  let component: BannerPresentationUpdateComponent;
  let fixture: ComponentFixture<BannerPresentationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPresentationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPresentationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
