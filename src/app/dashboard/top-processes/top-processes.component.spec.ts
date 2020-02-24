import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProcessesComponent } from './top-processes.component';

describe('TopProcessesComponent', () => {
  let component: TopProcessesComponent;
  let fixture: ComponentFixture<TopProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
