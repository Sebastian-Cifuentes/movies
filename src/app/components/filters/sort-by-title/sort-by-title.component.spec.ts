import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByTitleComponent } from './sort-by-title.component';

describe('SortByTitleComponent', () => {
  let component: SortByTitleComponent;
  let fixture: ComponentFixture<SortByTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortByTitleComponent]
    });
    fixture = TestBed.createComponent(SortByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
