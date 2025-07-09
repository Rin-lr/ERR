import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nooled } from './nooled';

describe('Nooled', () => {
  let component: Nooled;
  let fixture: ComponentFixture<Nooled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nooled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nooled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
