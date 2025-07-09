import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPilt } from './video-pilt';

describe('VideoPilt', () => {
  let component: VideoPilt;
  let fixture: ComponentFixture<VideoPilt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPilt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPilt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
