import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInstrumentComponent } from './detalle-instrument.component';

describe('DetalleInstrumentComponent', () => {
  let component: DetalleInstrumentComponent;
  let fixture: ComponentFixture<DetalleInstrumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleInstrumentComponent]
    });
    fixture = TestBed.createComponent(DetalleInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
