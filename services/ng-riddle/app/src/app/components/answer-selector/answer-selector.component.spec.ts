import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSelectorComponent } from './answer-selector.component';

describe('AnswerSelectorComponent', () => {
  let component: AnswerSelectorComponent;
  let fixture: ComponentFixture<AnswerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
