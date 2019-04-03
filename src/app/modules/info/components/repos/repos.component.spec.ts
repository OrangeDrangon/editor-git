import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatExpansionModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReposComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        MatInputModule,
        MatExpansionModule,
        MatButtonModule,
        MatSelectModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
