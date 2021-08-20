import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorvergataComponent } from './torvergata.component';

describe('TorvergataComponent', () => {
  let component: TorvergataComponent;
  let fixture: ComponentFixture<TorvergataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorvergataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorvergataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
