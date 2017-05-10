import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDatabindingComponent } from './server-databinding.component';

describe('ServerDatabindingComponent', () => {
  let component: ServerDatabindingComponent;
  let fixture: ComponentFixture<ServerDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
