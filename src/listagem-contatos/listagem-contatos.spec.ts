import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemContatos } from './listagem-contatos';

describe('ListagemContatos', () => {
  let component: ListagemContatos;
  let fixture: ComponentFixture<ListagemContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
