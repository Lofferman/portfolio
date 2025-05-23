import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshComponent } from './mesh.component';

describe('MeshComponent', () => {
  let component: MeshComponent;
  let fixture: ComponentFixture<MeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
