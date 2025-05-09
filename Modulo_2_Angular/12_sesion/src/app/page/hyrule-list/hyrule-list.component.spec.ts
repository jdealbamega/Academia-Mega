import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyruleListComponent } from './hyrule-list.component';

describe('HyruleListComponent', () => {
  let component: HyruleListComponent;
  let fixture: ComponentFixture<HyruleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyruleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HyruleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
