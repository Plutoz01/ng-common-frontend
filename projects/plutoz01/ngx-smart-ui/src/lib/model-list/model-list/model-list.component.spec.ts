import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelListComponent } from './model-list.component';

describe('ModelListComponent', () => {
  let component: ModelListComponent<any>;
  let fixture: ComponentFixture<ModelListComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
