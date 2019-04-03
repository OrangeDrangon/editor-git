import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatExpansionModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormComponent } from '../form/form.component';
import { ReposComponent } from '../repos/repos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoComponent, FormComponent, ReposComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatExpansionModule,
        MatButtonModule,
        MatSelectModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
