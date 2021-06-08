import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingChildComponent } from './trending-child.component';

describe('TrendingChildComponent', () => {
  let component: TrendingChildComponent;
  let fixture: ComponentFixture<TrendingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
