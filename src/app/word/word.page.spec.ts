import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordPage } from './word.page';

describe('WordPage', () => {
  let component: WordPage;
  let fixture: ComponentFixture<WordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
