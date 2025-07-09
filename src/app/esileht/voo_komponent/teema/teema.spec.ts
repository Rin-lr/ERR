import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teema } from './teema';

describe('Teema', () => {
  let component: Teema;
  let fixture: ComponentFixture<Teema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teema]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teema);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
