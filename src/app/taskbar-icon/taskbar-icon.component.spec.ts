import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarIconComponent } from './taskbar-icon.component';

describe('TaskbarIconComponent', () => {
  let component: TaskbarIconComponent;
  let fixture: ComponentFixture<TaskbarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskbarIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskbarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
