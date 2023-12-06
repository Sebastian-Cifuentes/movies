import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByReleaseDateComponent } from './sort-by-release-date.component';

describe('SortByReleaseDateComponent', () => {
  let component: SortByReleaseDateComponent;
  let fixture: ComponentFixture<SortByReleaseDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortByReleaseDateComponent]
    });
    fixture = TestBed.createComponent(SortByReleaseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
