import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesSliderComponent } from './values-slider.component';

describe('ValuesSliderComponent', () => {
  let component: ValuesSliderComponent;
  let fixture: ComponentFixture<ValuesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
