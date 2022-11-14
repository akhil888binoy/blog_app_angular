import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistComponent } from './postlist.component';

describe('PostlistComponent', () => {
  let component: PostlistComponent;
  let fixture: ComponentFixture<PostlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
