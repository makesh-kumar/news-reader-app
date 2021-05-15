import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReaderComponent } from './news-reader.component';

describe('NewReaderComponent', () => {
  let component: NewReaderComponent;
  let fixture: ComponentFixture<NewReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
