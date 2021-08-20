import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDesignerComponent } from './logo-designer.component';

describe('LogoDesignerComponent', () => {
  let component: LogoDesignerComponent;
  let fixture: ComponentFixture<LogoDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
