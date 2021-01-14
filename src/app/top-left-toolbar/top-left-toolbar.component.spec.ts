import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftToolbarComponent } from './top-left-toolbar.component';

describe('TopLeftToolbarComponent', () => {
  let component: TopLeftToolbarComponent;
  let fixture: ComponentFixture<TopLeftToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLeftToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
