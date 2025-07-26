import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucanaComponent } from './tucana.component';

describe('TucanaComponent', () => {
  let component: TucanaComponent;
  let fixture: ComponentFixture<TucanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TucanaComponent]
    });
    fixture = TestBed.createComponent(TucanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
