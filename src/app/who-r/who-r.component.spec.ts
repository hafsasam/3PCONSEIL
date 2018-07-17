import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoRComponent } from './who-r.component';

describe('WhoRComponent', () => {
  let component: WhoRComponent;
  let fixture: ComponentFixture<WhoRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
