import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementHubComponent } from './improvement-hub.component';

describe('ImprovementHubComponent', () => {
  let component: ImprovementHubComponent;
  let fixture: ComponentFixture<ImprovementHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovementHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
