import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Five3oneComponent } from './five3one.component';

describe('Five3oneComponent', () => {
  let component: Five3oneComponent;
  let fixture: ComponentFixture<Five3oneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Five3oneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Five3oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
