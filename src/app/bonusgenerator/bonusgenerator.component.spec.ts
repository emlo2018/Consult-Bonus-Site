import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusgeneratorComponent } from './bonusgenerator.component';

describe('BonusgeneratorComponent', () => {
  let component: BonusgeneratorComponent;
  let fixture: ComponentFixture<BonusgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
