import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAgentComponent } from './virtual-agent.component';

describe('VirtualAgentComponent', () => {
  let component: VirtualAgentComponent;
  let fixture: ComponentFixture<VirtualAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
