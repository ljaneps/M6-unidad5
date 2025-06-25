import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafos } from './grafos';

describe('Grafos', () => {
  let component: Grafos;
  let fixture: ComponentFixture<Grafos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
