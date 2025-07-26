import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexisnexisComponent } from './lexisnexis.component';

describe('LexisnexisComponent', () => {
  let component: LexisnexisComponent;
  let fixture: ComponentFixture<LexisnexisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LexisnexisComponent]
    });
    fixture = TestBed.createComponent(LexisnexisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
