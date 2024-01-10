import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardLargeComponent } from './card-large.component';
import { CurrencyStatusService } from '../../services/currency-status.service';
import { Journey } from '../../classes/Journey';
import { of, BehaviorSubject } from 'rxjs';

describe('CardLargeComponent', () => {
  let component: CardLargeComponent;
  let fixture: ComponentFixture<CardLargeComponent>;
  let mockCurrencyStatusService: Partial<CurrencyStatusService>;

  beforeEach(async(() => {
    mockCurrencyStatusService = {
      $currencyStatus: new BehaviorSubject<any>({ value: 1.2, code: 'USD' })
    }; // Cambio aquí
    TestBed.configureTestingModule({
      declarations: [ CardLargeComponent ],
      providers: [
        { provide: CurrencyStatusService, useValue: mockCurrencyStatusService as CurrencyStatusService } // Cambio aquí
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLargeComponent);
    component = fixture.componentInstance;

    const mockJourney: Journey = {
      origin: 'MZL',
      destination: 'BOG',
      price: 400,
      flights: []
    };
    component.journey = mockJourney;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showDetails', () => {
    expect(component.showDetails).toBeFalsy();
    component.toggleDetalles();
    expect(component.showDetails).toBeTruthy();
  });
});
