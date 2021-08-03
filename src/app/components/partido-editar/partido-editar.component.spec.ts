import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoEditarComponent } from './partido-editar.component';

describe('PartidoEditarComponent', () => {
  let component: PartidoEditarComponent;
  let fixture: ComponentFixture<PartidoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
